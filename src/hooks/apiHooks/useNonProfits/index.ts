import { useCallback, useState } from "react";
import nonProfitsApi from "services/api/nonProfitsApi";
import { CreateNonProfit, EditNonProfit } from "types/apiResponses/nonProfit";
import NonProfit from "types/entities/NonProfit";
import { useUploadFile } from "../useUploadFile";

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
    const { data: nonProfit } = await nonProfitsApi.getNonProfit(id);

    return nonProfit;
  }

  async function createNonProfit(data: CreateNonProfit, file: string) {
    const upload = useUploadFile(data.logo);

    let nonProfit;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          nonProfit = nonProfitsApi.createNonProfit({
            ...data,
            logo: blob.signed_id,
          });
        }
      });
    } else {
      nonProfit = nonProfitsApi.createNonProfit(data);
    }
    return nonProfit;
  }

  async function updateNonProfit(data: EditNonProfit, file: string) {
    const upload = useUploadFile(data.logo);
    let nonProfit;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          nonProfit = nonProfitsApi.updateNonProfit(data.id, {
            ...data,
            logo: blob.signed_id,
          });
        }
      });
    } else {
      const currentNonProfit = data;
      delete currentNonProfit.logo;
      nonProfit = nonProfitsApi.updateNonProfit(data.id, currentNonProfit);
    }
    return nonProfit;
  }

  return {
    nonProfits,
    getNonProfits,
    incrementPage,
    getNonProfit,
    createNonProfit,
    updateNonProfit,
  };
}

export default useNonProfits;
