import moneyFormatter from "lib/moneyFormatter";
import Card from "components/moleculars/cards/Card";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function WalletCard(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.walletDashboard",
  });

  return (
    <Card title={t("title")}>
      <S.Title>{t("donationLimit")}</S.Title>
      <S.Value>{moneyFormatter(35189512)}</S.Value>
      <S.Title>{t("matic")}</S.Title>
      <S.Value>{moneyFormatter(189505)}</S.Value>
    </Card>
  );
}

export default WalletCard;
