import AddIcon from "assets/icons/addIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import theme from "styles/theme";
import ImpressionCardsListSection from "./ImpressionCardsListSection";
import * as S from "./styles";

function ImpressionCardsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "impressionCards",
  });

  const { neutral } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/impression-cards/new");
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.AddButton
        color={neutral[50]}
        backgroundColor={neutral[800]}
        _hover={{ bg: neutral[500] }}
        marginLeft="8px"
        onClick={handleAddNew}
        leftIcon={AddIcon()}
      >
        {t("createNew")}
      </S.AddButton>
      <ImpressionCardsListSection />
    </S.Container>
  );
}

export default ImpressionCardsPage;
