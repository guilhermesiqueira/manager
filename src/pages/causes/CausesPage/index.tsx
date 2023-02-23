import AddIcon from "assets/icons/addIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import theme from "styles/theme";
import CausesListSection from "./CausesListSection";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "causes.list",
  });

  const { neutral, gray30, gray40 } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/causes/new");
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.AddButton
        color={neutral[50]}
        backgroundColor={gray40}
        _hover={{ bg: gray30 }}
        marginLeft="8px"
        onClick={handleAddNew}
        leftIcon={AddIcon()}
      >
        {t("createNew")}
      </S.AddButton>
      <CausesListSection />
    </S.Container>
  );
}

export default CausesPage;
