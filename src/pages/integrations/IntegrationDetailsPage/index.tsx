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
import IntegrationTask from "types/entities/IntegrationTask";
import LogoCard from "components/moleculars/LogoCard";
import InfoName from "components/moleculars/infoName";
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
    createdAt,
    updatedAt,
    integrationTasks,
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
      <S.Title>{t("title", { integrationName })}</S.Title>

      <ChangeLanguageItem />
      <S.Container>
        <S.LeftSection>
          <S.IntegrationCardContainer>
            <IntegrationCard
              title={integrationName}
              value={integrationBalance}
            />
          </S.IntegrationCardContainer>
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
          <InfoName>{t("status")}</InfoName>
          <S.InfoValue style={{ color: `${statusColors[status]}` }}>
            {status}
          </S.InfoValue>

          <InfoName>{t("id")}</InfoName>
          <S.InfoValue>{id}</S.InfoValue>

          <InfoName>{t("name")}</InfoName>
          <S.InfoValue>{name}</S.InfoValue>

          <InfoName>{t("logo")}</InfoName>
          <LogoCard logo={logo} empty={!logo} />

          <InfoName>{t("walletAddress")}</InfoName>
          <CopyableAddress text={integrationWallet?.publicKey} />

          <InfoName>{t("integrationAddress")}</InfoName>
          <CopyableAddress text={integrationAddress} />

          <InfoName>{t("ticketAvailability")}</InfoName>
          <S.InfoValue>
            {ticketAvailabilityInMinutes
              ? t("everyMinutes").replace(
                  "{{minutes}}",
                  ticketAvailabilityInMinutes,
                )
              : t("everydayAtMidnight")}
          </S.InfoValue>

          <InfoName>{t("createdAt")}</InfoName>
          <S.InfoValue>{dateFormatter(createdAt)}</S.InfoValue>

          <InfoName>{t("lastEditedAt")}</InfoName>
          <S.InfoValue>{dateFormatter(updatedAt)}</S.InfoValue>
        </S.LeftSection>

        <S.RightSection>
          {integrationTasks &&
            integrationTasks.map((integrationTask: IntegrationTask) => (
              <div key={integrationTask.description}>
                <S.Subtitle>{t("modalInfo")}</S.Subtitle>

                <InfoName
                  hasTranslation={integrationTask?.mobilityAttributes?.includes(
                    "description",
                  )}
                >
                  {t("ctaDescription")}
                </InfoName>
                <S.InfoValue>{integrationTask?.description}</S.InfoValue>

                <InfoName
                  hasTranslation={integrationTask?.mobilityAttributes?.includes(
                    "link",
                  )}
                >
                  {t("ctaLink")}
                </InfoName>
                <S.InfoValue>{integrationTask?.link}</S.InfoValue>
                <CopyableAddress text={integrationTask?.linkAddress ?? ""} />
              </div>
            ))}
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default IntegrationDetailsPage;
