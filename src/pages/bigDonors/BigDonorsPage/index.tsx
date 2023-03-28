import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AddIcon from "assets/icons/addIcon";
import theme from "styles/theme";
import * as S from "./styles";
import BigDonorsListSection from "./BigDonorsListSection";

function BigDonorsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonors",
  });
  const { neutral } = theme.colors;
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/donors/new");
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

      <BigDonorsListSection />
    </S.Container>
  );
}
export default BigDonorsPage;
