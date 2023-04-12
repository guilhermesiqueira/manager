import { useTranslation } from "react-i18next";
import * as S from "./styles";
import BigDonorsListSection from "./BigDonorsListSection";

function BigDonorsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonors",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <BigDonorsListSection />
    </S.Container>
  );
}
export default BigDonorsPage;
