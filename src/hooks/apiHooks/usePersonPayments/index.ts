import { useCallback, useState } from "react";
import personPaymentsApi from "services/api/personPaymentsApi";
import { CreateBigDonation } from "types/apiResponses/BigDonation";
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

  async function createBigDonation(data: CreateBigDonation) {
    const bigDonation = personPaymentsApi.createBigDonation(data);

    return bigDonation;
  }

  async function getBigDonorsPayments() {
    const { data: bigDonorsPayments } =
      await personPaymentsApi.getBigDonorsPayments();

    return bigDonorsPayments;
  }

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  return {
    personPayments,
    getPersonPayments,
    getBigDonorsPayments,
    createBigDonation,
    incrementPage,
  };
}

export default usePersonPayments;
