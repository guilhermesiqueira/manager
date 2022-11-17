import AddIcon from "assets/icons/addIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import theme from "styles/theme";
import NonProfitsListSection from "./NonProfitsListSection";
import * as S from "./styles";

function NonProfitsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfitsPage",
  });
  const { gray10, gray30, gray40 } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/ngos/new");
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.AddButton
        color={gray10}
        backgroundColor={gray40}
        _hover={{ bg: gray30 }}
        marginLeft="8px"
        onClick={handleAddNew}
        leftIcon={AddIcon()}
      >
        {t("createNew")}
      </S.AddButton>
      <NonProfitsListSection />
    </S.Container>
  );
}

export default NonProfitsPage;
