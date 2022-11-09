import { useLanguage } from "hooks/useLanguage";
import { useCallback, useState } from "react";
import causesApi from "services/api/causesApi";
import { Cause, CreateCause, EditCause } from "types/entities/Cause";

function useCauses() {
  const [causes, setCauses] = useState<Cause[]>([]);
  const [page, setPage] = useState(1);
  const { currentLang } = useLanguage();

  const getCauses = useCallback(async () => {
    const { data: allCauses } = await causesApi.getCausesList({
      page,
      perPage: 15,
      language: currentLang,
    });

    setCauses((oldCauses) => [...oldCauses, ...allCauses]);

    return allCauses;
  }, [page]);

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  async function getCause(id: any) {
    const { data: cause } = await causesApi.getCause(id, currentLang);

    return cause;
  }

  async function createCause(data: CreateCause) {
    const cause = causesApi.createCause(data, currentLang);
    return cause;
  }

  async function updateCause(data: EditCause) {
    const cause = causesApi.updateCause(data.id, data, currentLang);
    return cause;
  }

  return {
    causes,
    getCauses,
    incrementPage,
    getCause,
    createCause,
    updateCause,
  };
}

export default useCauses;
