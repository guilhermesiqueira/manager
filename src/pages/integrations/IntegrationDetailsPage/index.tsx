import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import dateFormatter from "lib/dateFormatter";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import theme from "styles/theme";
import LogoCard from "components/moleculars/LogoCard";
import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";

function IntegrationDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations",
  });
  const { neutral } = theme.colors;
  const { primary, tertiary } = theme.colors.brand;
  const statusColors: { [key: string]: string } = {
    active: primary[300],
    inactive: tertiary[400],
  };

  const [mobilityAttributes, setMobilityAttributes] = useState<string[]>([]);

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
    integrationDashboardAddress,
    integrationAddress,
    integrationDeeplinkAddress,
    ticketAvailabilityInMinutes,
    webhookUrl,
    createdAt,
    updatedAt,
    integrationTask,
  } = integration;

  useEffect(() => {
    fetchIntegration();
  }, []);

  return (
    <S.Content>
      <S.Title>{t("details.title", { integrationName })}</S.Title>

      <S.Container>
        <S.LeftSection>
          <Link to="edit">
            <Button
              color={neutral[50]}
              background={neutral[800]}
              _hover={{ bg: neutral[500] }}
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

          <InfoName>{t("attributes.integrationDeeplinkAddress")}</InfoName>
          <CopyableAddress text={integrationDeeplinkAddress} />

          <InfoName>{t("attributes.integrationDashboardAddress")}</InfoName>
          <CopyableAddress text={integrationDashboardAddress} />

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
