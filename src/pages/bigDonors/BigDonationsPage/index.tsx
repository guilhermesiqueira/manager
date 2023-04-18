import { useTranslation } from "react-i18next";
import BigDonationsListSection from "./BigDonationsListSection";
import * as S from "./styles";

function BigDonationsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <BigDonationsListSection />
    </S.Container>
  );
}
export default BigDonationsPage;
