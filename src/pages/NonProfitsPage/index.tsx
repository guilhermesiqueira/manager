import { useTranslation } from "react-i18next";
import NonProfitsListSection from "./NonProfitsListSection";
import * as S from "./styles";

function NonProfitsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfitsPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <NonProfitsListSection />
    </S.Container>
  );
}

export default NonProfitsPage;
