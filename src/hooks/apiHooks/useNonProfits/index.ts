import { useCallback, useState } from "react";
import nonProfitsApi from "services/api/nonProfitsApi";
import NonProfit from "types/entities/NonProfit";

function useNonProfits() {
  const [nonProfits, setNonProfits] = useState<NonProfit[]>([]);
  const [page, setPage] = useState(1);

  const getNonProfits = useCallback(async () => {
    const { data: allNonProfits } = await nonProfitsApi.getNonProfitsList({
      page,
      perPage: 15,
    });

    setNonProfits((oldNonProfits) => [...oldNonProfits, ...allNonProfits]);

    return allNonProfits;
  }, [page]);

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  async function getNonProfit(id: any) {
    const { data: integration } = await nonProfitsApi.getNonProfit(id);

    return integration;
  }

  return {
    nonProfits,
    getNonProfits,
    incrementPage,
    getNonProfit,
  };
}

export default useNonProfits;
