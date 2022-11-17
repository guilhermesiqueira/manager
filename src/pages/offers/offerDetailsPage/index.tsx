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
import * as S from "./styles";

function OfferDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "Offer.offerDetailsPage",
  });
  const { green30, red30, gray40, gray10, gray30 } = theme.colors;
  const statusColors: { [key: string]: string } = {
    active: green30,
    inactive: red30,
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
      <S.Title>{t("title")}</S.Title>

      <S.Container>
        <S.LeftSection>
          <Link to="edit">
            <Button
              color={gray10}
              background={gray40}
              _hover={{ bg: gray30 }}
              leftIcon={<EditIcon />}
            >
              {t("edit")}
            </Button>
          </Link>
          <InfoName>{t("status")}</InfoName>
          <S.InfoValue style={{ color: `${statusColors[offer.status]}` }}>
            {offer.status}
          </S.InfoValue>

          <InfoName>{t("id")}</InfoName>
          <S.InfoValue>{id}</S.InfoValue>

          <InfoName>{t("OfferAddress")}</InfoName>
          <CopyableAddress text={offer.price} />

          <InfoName>{t("webhookUrl")}</InfoName>
          <CopyableAddress text={offer.currency || "-"} />

          <InfoName>{t("createdAt")}</InfoName>
          <S.InfoValue>{dateFormatter(offer.createdAt)}</S.InfoValue>

          <InfoName>{t("lastEditedAt")}</InfoName>
          <S.InfoValue>{dateFormatter(offer.updatedAt)}</S.InfoValue>
        </S.LeftSection>

        <S.RightSection />
      </S.Container>
    </S.Content>
  );
}

export default OfferDetailsPage;
