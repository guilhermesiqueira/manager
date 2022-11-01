import { useCallback, useState } from "react";
import causesApi from "services/api/causesApi";
import Cause from "types/entities/Cause";

function useCauses() {
  const [causes, setCauses] = useState<Cause[]>([]);
  const [page, setPage] = useState(1);

  const getCauses = useCallback(async () => {
    const { data: allCauses } = await causesApi.getCausesList({
      page,
      perPage: 15,
    });

    setCauses((oldCauses) => [...oldCauses, ...allCauses]);

    return allCauses;
  }, [page]);

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  return {
    causes,
    getCauses,
    incrementPage,
  };
}

export default useCauses;
