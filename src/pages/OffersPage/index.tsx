import { useTranslation } from "react-i18next";

import OffersListSection from "./OffersListSection";
import * as S from "./styles";

function OffersPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "offersPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <OffersListSection />
    </S.Container>
  );
}

export default OffersPage;
