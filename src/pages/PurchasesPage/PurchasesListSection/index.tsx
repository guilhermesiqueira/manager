import usePersonPayments from "hooks/apiHooks/usePersonPayments";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logError } from "services/crashReport";
import PersonPayment from "types/entities/PersonPayment";
import PurchaseItems from "../PurchaseItems";
import * as S from "./styles";

function PurchasesListSection(): JSX.Element {
  const [purchases, setPurchases] = useState<PersonPayment[]>([]);
  const { getPersonPayments } = usePersonPayments();
  const { t } = useTranslation("translation", {
    keyPrefix: "purchasesPage.purchasesListSection.listColumns",
  });
  const [currentItems, setCurrentItems] = useState<PersonPayment[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const fetchPurchases = useCallback(async () => {
    try {
      const allPurchases = await getPersonPayments();
      setPurchases(allPurchases);
    } catch (e) {
      logError(e);
    }
  }, [setPurchases]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const allItems = purchases.slice(itemOffset, endOffset);

    setCurrentItems(allItems);

    setPageCount(Math.ceil(purchases.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, purchases]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % purchases.length;

    setItemOffset(newOffset);
  };

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
        <PurchaseItems purchases={currentItems} />
      </S.Table>

      <S.Pagination
        breakLabel="..."
        previousLabel="< previous"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
      />
    </S.Container>
  );
}

export default PurchasesListSection;
