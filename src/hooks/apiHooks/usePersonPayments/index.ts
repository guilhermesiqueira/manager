import { useCallback, useState } from "react";
import personPaymentsApi from "services/api/personPaymentsApi";
import PersonPayment from "types/entities/PersonPayment";

function usePersonPayments() {
  const [personPayments, setPersonPayments] = useState<PersonPayment[]>([]);
  const [page, setPage] = useState(1);

  const getPersonPayments = useCallback(async () => {
    const { data: allPersonPayments } =
      await personPaymentsApi.getPersonPaymentsList({
        page,
        perPage: 15,
      });

    setPersonPayments((oldPersonPayments) => [
      ...oldPersonPayments,
      ...allPersonPayments,
    ]);

    return allPersonPayments;
  }, [page]);

  async function getBigDonorsPayments() {
    const { data: bigDonorsPayments } =
      await personPaymentsApi.getBigDonorsPayments();

    return bigDonorsPayments;
  }

  async function getBigDonorPersonPayment(id: string) {
    const { data: bigDonorPersonPayment } =
      await personPaymentsApi.getBigDonorPersonPayment(id);

    return bigDonorPersonPayment;
  }

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  return {
    personPayments,
    getPersonPayments,
    getBigDonorsPayments,
    getBigDonorPersonPayment,
    incrementPage,
  };
}

export default usePersonPayments;
