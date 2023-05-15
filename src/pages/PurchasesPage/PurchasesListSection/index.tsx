import usePersonPayments from "hooks/apiHooks/usePersonPayments";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logError } from "services/crashReport";
import PersonPayment from "types/entities/PersonPayment";
import PurchaseItems from "../PurchaseItems";
import * as S from "./styles";

interface StatusObject {
  [key: string]: boolean;
}

function PurchasesListSection(): JSX.Element {
  const [purchases, setPurchases] = useState<PersonPayment[]>([]);
  const defaultStatusSelection = {
    processing: true,
    refunded: true,
    paid: true,
    failed: true,
  };
  const [selectedStatus, setSelectedStatus] = useState<StatusObject>(
    defaultStatusSelection,
  );
  const { getPersonPayments } = usePersonPayments();
  const { t } = useTranslation("translation", {
    keyPrefix: "purchases",
  });
  const [currentPurchases, setCurrentPurchases] = useState<PersonPayment[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedStatus({ ...selectedStatus, [value]: !selectedStatus[value] });
  };

  const filterPurchases = (nonFilteredPurchases: PersonPayment[]) =>
    nonFilteredPurchases.filter((purchaseData: PersonPayment) => {
      if (searchTerm === "" && selectedStatus[purchaseData.status]) {
        return true;
      } else if (
        purchaseData.payerIdentification
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        selectedStatus[purchaseData.status]
      ) {
        return true;
      }
      return false;
    });

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
  }, [fetchPurchases]);

  useEffect(() => {
    const filteredPurchases = filterPurchases(purchases);

    setCurrentPurchases(filteredPurchases);
    setPageCount(Math.ceil(filteredPurchases.length / itemsPerPage));
    setItemOffset(pageCount - 1);
  }, [purchases, itemsPerPage, selectedStatus, searchTerm]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % currentPurchases.length;

    setItemOffset(newOffset);
  };

  const displayedPurchases = currentPurchases.slice(
    itemOffset,
    itemOffset + itemsPerPage,
  );

  return (
    <S.Container>
      <S.CheckboxContainer>
        {Object.keys(defaultStatusSelection).map((status: any) => (
          <div key={status}>
            <S.Checkbox
              name="status"
              type="checkbox"
              value={status}
              onChange={handleStatusChange}
              checked={selectedStatus[status]}
            />
            <S.Span>{t(`attributes.${status}`)}</S.Span>
          </div>
        ))}
      </S.CheckboxContainer>
      <S.SearchBar
        placeholder={t("list.search")}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <S.Table>
        <thead>
          <tr>
            <th>{t("attributes.date")}</th>
            <th>{t("attributes.stripeId")}</th>
            <th>{t("attributes.type")}</th>
            <th>{t("attributes.userIdentification")}</th>
            <th>{t("attributes.value")}</th>
            <th>{t("attributes.usdc")}</th>
            <th>{t("attributes.status")}</th>
          </tr>
        </thead>
        <PurchaseItems
          purchases={displayedPurchases}
          fetchPurchases={fetchPurchases}
        />
      </S.Table>

      <S.Pagination
        key={currentPurchases.length}
        breakLabel="..."
        previousLabel={t("list.previous")}
        nextLabel={t("list.next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
      />
    </S.Container>
  );
}

export default PurchasesListSection;
