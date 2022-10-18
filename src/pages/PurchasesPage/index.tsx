import { useTranslation } from "react-i18next";
import PurchasesListSection from "./PurchasesListSection";
import * as S from "./styles";

function PurchasesPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "purchasesPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <PurchasesListSection />
    </S.Container>
  );
}

export default PurchasesPage;
