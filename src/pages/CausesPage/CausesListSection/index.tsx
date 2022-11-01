import useCauses from "hooks/apiHooks/useCauses";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logError } from "services/crashReport";
import Cause from "types/entities/Cause";
import CauseItems from "../CausesItems";
import * as S from "./styles";

function CausesListSection(): JSX.Element {
  const [causes, setCauses] = useState<Cause[]>([]);
  const { getCauses } = useCauses();
  const { t } = useTranslation("translation", {
    keyPrefix: "causesPage.causesListSection",
  });
  const [currentCauses, setCurrentCauses] = useState<Cause[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCauses = useCallback(async () => {
    try {
      const allCauses = await getCauses();
      setCauses(allCauses);
    } catch (e) {
      logError(e);
    }
  }, [setCauses]);

  useEffect(() => {
    fetchCauses();
  }, [fetchCauses]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const allItems = causes.slice(itemOffset, endOffset);

    setCurrentCauses(allItems);

    setPageCount(Math.ceil(causes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, causes]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % causes.length;

    setItemOffset(newOffset);
  };

  return (
    <S.Container>
      <S.SearchBar
        placeholder={t("search")}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <S.Table>
        <thead>
          <tr>
            <th>{t("listColumns.name")}</th>
            <th>{t("listColumns.token")}</th>
            <th>{t("listColumns.availableToDonation")}</th>
            <th>{t("listColumns.poolAddress")}</th>
          </tr>
        </thead>
        <CauseItems searchTerm={searchTerm} causes={currentCauses} />
      </S.Table>

      <S.Pagination
        breakLabel="..."
        previousLabel={t("previous")}
        nextLabel={t("next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
      />
    </S.Container>
  );
}

export default CausesListSection;
