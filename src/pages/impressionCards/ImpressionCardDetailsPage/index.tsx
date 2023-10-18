import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import theme from "styles/theme";
import LogoCard from "components/moleculars/LogoCard";
import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import useImpressionCards from "hooks/apiHooks/useImpressionCards";
import * as S from "./styles";

function ImpressionCardDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "impressionCards",
  });
  const { neutral } = theme.colors;

  const [impressionCard, setImpressionCard] = useState<any>([]);
  const { id } = useParams();

  const { getImpressionCard } = useImpressionCards();

  const fetchImpressionCard = useCallback(async () => {
    try {
      const impressionCardData = await getImpressionCard(id);
      setImpressionCard(impressionCardData);
    } catch (e) {
      logError(e);
    }
  }, []);

  const impressionCardHeadline = impressionCard?.headline;
  const { headline, title, description, videoUrl, image, ctaText, ctaUrl } =
    impressionCard;

  useEffect(() => {
    fetchImpressionCard();
  }, []);

  return (
    <S.Content>
      <S.Title>{t("details", { impressionCardHeadline })}</S.Title>

      <S.Container>
        <S.LeftSection>
          <Link to="edit">
            <Button
              color={neutral[50]}
              background={neutral[800]}
              _hover={{ bg: neutral[500] }}
              leftIcon={<EditIcon />}
            >
              {t("edit")}
            </Button>
          </Link>

          <InfoName>{t("attributes.id")}</InfoName>
          <S.InfoValue>{id}</S.InfoValue>

          <InfoName>{t("attributes.headline")}</InfoName>
          <S.InfoValue>{headline}</S.InfoValue>

          <InfoName>{t("attributes.title")}</InfoName>
          <S.InfoValue>{title}</S.InfoValue>

          <InfoName>{t("attributes.description")}</InfoName>
          <S.InfoValue>{description}</S.InfoValue>

          <InfoName>{t("attributes.image")}</InfoName>
          <LogoCard logo={image} empty={!image} />

          <InfoName>{t("attributes.videoUrl")}</InfoName>
          <S.InfoValue>{videoUrl}</S.InfoValue>

          <InfoName>{t("attributes.ctaText")}</InfoName>
          <S.InfoValue>{ctaText}</S.InfoValue>

          <InfoName>{t("attributes.ctaUrl")}</InfoName>
          <S.InfoValue>{ctaUrl}</S.InfoValue>
        </S.LeftSection>
      </S.Container>
    </S.Content>
  );
}

export default ImpressionCardDetailsPage;
