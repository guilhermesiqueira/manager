import IntegrationCard from "components/moleculars/cards/IntegrationCard";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import dateFormatter from "lib/dateFormatter";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import ChangeLanguageItem from "components/moleculars/ChangeLanguageItem";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import { useContract } from "hooks/useContract";
import { useNetwork } from "hooks/useNetwork";
import RibonAbi from "utils/abis/RibonAbi.json";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import theme from "styles/theme";
import LogoCard from "components/moleculars/LogoCard";
import * as S from "./styles";

function IntegrationDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationDetailsPage",
  });
  const { green, red, darkGray, lightGray } = theme.colors;
  const statusColors: { [key: string]: string } = {
    active: green,
    inactive: red,
  };
  const { currentNetwork } = useNetwork();
  const [integrationBalance, setIntegrationBalance] = useState<string>("...");
  const { getIntegration } = useIntegrations();

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const [integration, setIntegration] = useState<any>([]);
  const { getApiIntegration } = useApiIntegrations();
  const { id } = useParams();

  const fetchIntegration = useCallback(async () => {
    try {
      const integrationData = await getApiIntegration(id);
      setIntegration(integrationData);
    } catch (e) {
      logError(e);
    }
  }, []);

  const integrationName = integration?.name;
  const {
    status,
    name,
    logo,
    integrationWallet,
    integrationAddress,
    ticketAvailabilityInMinutes,
    webhookLink,
    createdAt,
    updatedAt,
  } = integration;

  const fetchBlockchainIntegration = useCallback(async () => {
    if (integrationWallet?.publicKey) {
      try {
        const chainIntegration = await getIntegration(
          integrationWallet.publicKey.toLowerCase(),
        );
        setIntegrationBalance(
          formatFromWei(chainIntegration.integrations[0].balance),
        );
      } catch (e) {
        logError(e);
      }
    }
  }, [getIntegration, integrationBalance]);

  useEffect(() => {
    fetchIntegration();
    fetchBlockchainIntegration();

    contract?.on("PoolBalanceIncreased", () => {
      fetchBlockchainIntegration();
    });
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title", { integrationName })}</S.Title>

      <ChangeLanguageItem />

      <IntegrationCard title={integrationName} value={integrationBalance} />
      <br />

      <Link to="edit">
        <Button
          color={lightGray}
          backgroundColor={darkGray}
          leftIcon={<EditIcon />}
        >
          {t("edit")}
        </Button>
      </Link>

      <S.InfoName>{t("status")}</S.InfoName>
      <S.InfoValue style={{ color: `${statusColors[status]}` }}>
        {status}
      </S.InfoValue>

      <S.InfoName>{t("id")}</S.InfoName>
      <S.InfoValue>{id}</S.InfoValue>

      <S.InfoName>{t("name")}</S.InfoName>
      <S.InfoValue>{name}</S.InfoValue>

      <S.InfoName>{t("logo")}</S.InfoName>
      <LogoCard logo={logo} empty={!logo} />

      <S.InfoName>{t("walletAddress")}</S.InfoName>
      <CopyableAddress text={integrationWallet?.publicKey} />

      <S.InfoName>{t("integrationAddress")}</S.InfoName>
      <CopyableAddress text={integrationAddress} />

      <S.InfoName>{t("webhookLink")}</S.InfoName>
      <CopyableAddress text={webhookLink || "-"} />

      <S.InfoName>{t("ticketAvailability")}</S.InfoName>
      <S.InfoValue>
        {ticketAvailabilityInMinutes
          ? t("everyMinutes").replace(
            "{{minutes}}",
            ticketAvailabilityInMinutes,
          )
          : t("everydayAtMidnight")}
      </S.InfoValue>

      <S.InfoName>{t("createdAt")}</S.InfoName>
      <S.InfoValue>{dateFormatter(createdAt)}</S.InfoValue>

      <S.InfoName>{t("lastEditedAt")}</S.InfoName>
      <S.InfoValue>{dateFormatter(updatedAt)}</S.InfoValue>
    </S.Container>
  );
}

export default IntegrationDetailsPage;
