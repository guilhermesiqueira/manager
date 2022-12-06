import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import dateFormatter from "lib/dateFormatter";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import { useContract } from "hooks/useContract";
import { useNetwork } from "hooks/useNetwork";
import RibonAbi from "utils/abis/RibonAbi.json";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import theme from "styles/theme";
import LogoCard from "components/moleculars/LogoCard";
import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";

function IntegrationDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations",
  });
  const { green30, red30, gray40, gray10, gray30 } = theme.colors;
  const statusColors: { [key: string]: string } = {
    active: green30,
    inactive: red30,
  };

  const { currentNetwork } = useNetwork();
  const [integrationBalance, setIntegrationBalance] = useState<string>("...");
  const [mobilityAttributes, setMobilityAttributes] = useState<string[]>([]);
  const { getIntegration } = useIntegrations();

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const [integration, setIntegration] = useState<any>([]);
  const { getApiIntegration, getMobilityAttributes } = useApiIntegrations();
  const { id } = useParams();

  const fetchIntegration = useCallback(async () => {
    try {
      const integrationData = await getApiIntegration(id);
      const mobilityAttributesData = await getMobilityAttributes();
      setMobilityAttributes(mobilityAttributesData);
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
    webhookUrl,
    createdAt,
    updatedAt,
    integrationTask,
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
    <S.Content>
      <S.Title>{t("details.title", { integrationName })}</S.Title>

      <S.Container>
        <S.LeftSection>
          <Link to="edit">
            <Button
              color={gray10}
              background={gray40}
              _hover={{ bg: gray30 }}
              leftIcon={<EditIcon />}
            >
              {t("details.edit")}
            </Button>
          </Link>
          <InfoName>{t("attributes.status")}</InfoName>
          <S.InfoValue style={{ color: `${statusColors[status]}` }}>
            {status}
          </S.InfoValue>

          <InfoName>{t("attributes.id")}</InfoName>
          <S.InfoValue>{id}</S.InfoValue>

          <InfoName>{t("attributes.name")}</InfoName>
          <S.InfoValue>{name}</S.InfoValue>

          <InfoName>{t("attributes.logo")}</InfoName>
          <LogoCard logo={logo} empty={!logo} />

          <InfoName>{t("attributes.walletAddress")}</InfoName>
          <CopyableAddress text={integrationWallet?.publicKey} />

          <InfoName>{t("attributes.integrationAddress")}</InfoName>
          <CopyableAddress text={integrationAddress} />

          <InfoName>{t("attributes.webhookUrl")}</InfoName>
          <CopyableAddress text={webhookUrl || "-"} />

          <InfoName>{t("attributes.ticketAvailability")}</InfoName>
          <S.InfoValue>
            {ticketAvailabilityInMinutes
              ? t("attributes.everyMinutes").replace(
                  "{{minutes}}",
                  ticketAvailabilityInMinutes,
                )
              : t("attributes.everydayAtMidnight")}
          </S.InfoValue>

          <InfoName>{t("attributes.createdAt")}</InfoName>
          <S.InfoValue>{dateFormatter(createdAt)}</S.InfoValue>

          <InfoName>{t("attributes.lastEditedAt")}</InfoName>
          <S.InfoValue>{dateFormatter(updatedAt)}</S.InfoValue>
        </S.LeftSection>

        <S.RightSection>
          {integrationTask && (
            <div>
              <S.Subtitle>{t("attributes.modalInfo")}</S.Subtitle>

              <InfoName
                hasTranslation={mobilityAttributes?.includes("description")}
              >
                {t("attributes.ctaDescription")}
              </InfoName>
              <S.InfoValue>{integrationTask.description}</S.InfoValue>

              <InfoName hasTranslation={mobilityAttributes?.includes("link")}>
                {t("attributes.ctaLink")}
              </InfoName>
              <S.InfoValue>{integrationTask.link}</S.InfoValue>
              <CopyableAddress text={integrationTask.linkAddress ?? ""} />
            </div>
          )}
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default IntegrationDetailsPage;
