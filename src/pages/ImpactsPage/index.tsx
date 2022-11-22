import { useTranslation } from "react-i18next";
import ImpactsListSection from "./ImpactsListSection";

import * as S from "./styles";

function ImpactsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "impactsPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <ImpactsListSection />
    </S.Container>
  );
}

export default ImpactsPage;
