import { useTranslation } from "react-i18next";
import CausesListSection from "./CausesListSection";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "causesPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <CausesListSection />
    </S.Container>
  );
}

export default CausesPage;
