import dateFormatter from "lib/dateFormatter";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import theme from "styles/theme";
import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import useOffers from "hooks/apiHooks/useOffers";
import { capitalize } from "lib/capitalize";
import * as S from "./styles";

function OfferDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "offers",
  });
  const { green30, gray40, gray10, gray30 } = theme.colors;
  const { tertiary } = theme.colors.brand;

  const statusColors: { [key: string]: string } = {
    active: green30,
    inactive: tertiary[400],
  };

  const { getOffer } = useOffers();

  const [offer, setOffer] = useState<any>([]);
  const { id } = useParams();

  const fetchOffer = useCallback(async () => {
    try {
      const offerData = await getOffer(id);
      setOffer(offerData);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchOffer();
  }, []);

  return (
    <S.Content>
      <S.Title>{t("details.title")}</S.Title>

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
          <S.Subtitle>{t("attributes.activityStatus")}</S.Subtitle>
          <InfoName>{t("attributes.status")}</InfoName>
          <S.InfoValue
            style={{
              color: `${statusColors[offer.active ? "active" : "inactive"]}`,
            }}
          >
            {t(`attributes.${offer.active ? "active" : "inactive"}`)}
          </S.InfoValue>

          <S.Subtitle>{t("details.details")}</S.Subtitle>
          <InfoName>{t("attributes.id")}</InfoName>
          <S.InfoValue>{id}</S.InfoValue>

          <InfoName>{t("attributes.currency")}</InfoName>
          <S.InfoValue>{offer.currency?.toUpperCase() || "-"}</S.InfoValue>

          <InfoName>{t("attributes.price")}</InfoName>
          <S.InfoValue>{offer.price}</S.InfoValue>

          <InfoName>{t("attributes.createdAt")}</InfoName>
          <S.InfoValue>{dateFormatter(offer.createdAt)}</S.InfoValue>

          <InfoName>{t("attributes.lastEditedAt")}</InfoName>
          <S.InfoValue>{dateFormatter(offer.updatedAt)}</S.InfoValue>
        </S.LeftSection>

        <S.RightSection>
          <S.Subtitle>{t("details.gatewayInfo")}</S.Subtitle>

          <InfoName>{t("attributes.gateway")}</InfoName>
          <S.InfoValue>
            {offer.gateway && capitalize(offer.gateway)}
          </S.InfoValue>

          <InfoName>{t("attributes.externalId")}</InfoName>
          <CopyableAddress text={offer.externalId} />
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default OfferDetailsPage;
