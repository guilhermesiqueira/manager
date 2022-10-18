import usePersonPayments from "hooks/apiHooks/usePersonPayments";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logError } from "services/crashReport";
import PersonPayment from "types/entities/PersonPayment";
import theme from "styles/theme";
import * as S from "./styles";

function PurchasesListSection(): JSX.Element {
  const [purchases, setPurchases] = useState<PersonPayment[]>([]);
  const { getPersonPayments } = usePersonPayments();
  const { green30, red30 } = theme.colors;
  const { t } = useTranslation("translation", {
    keyPrefix: "purchasesPage.purchasesListSection.listColumns",
  });

  const fetchPurchases = useCallback(async () => {
    try {
      const allPurchases = await getPersonPayments();
      setPurchases(allPurchases);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const statusColors: { [key: string]: string } = {
    active: green30,
    inactive: red30,
  };

  function renderTableRowsForPurchases() {
    return purchases?.map((purchase: any) => (
      <tr key={purchase.id}>
        <th>{purchase.paidDate}</th>
        {/* Mudar quando for adicionado o stripe ID */}
        <th>{purchase.id}</th>
        <th>{purchase.paymentMethod}</th>
        <th>{purchase.person.customer.email}</th>
        <th>{purchase.offer.priceValue}</th>
        <th>
          <S.StatusTableCell style={{ color: statusColors[purchase.status] }}>
            {purchase.status}
          </S.StatusTableCell>
        </th>
      </tr>
    ));
  }

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
        <tbody>{renderTableRowsForPurchases()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default PurchasesListSection;
