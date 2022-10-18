// import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function PurchasesListSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "purchasesPage.purchasesListSection.listColumns",
  });

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>{t("date")}</th>
            <th>{t("stripeId")}</th>
            <th>{t("type")}</th>
            <th>{t("email")}</th>
            <th>{t("value")}</th>
            <th>{t("status")}</th>
          </tr>
        </thead>
        {/* <tbody>{renderTableRowsForPurchases()}</tbody> */}
      </S.Table>
    </S.Container>
  );
}

export default PurchasesListSection;
