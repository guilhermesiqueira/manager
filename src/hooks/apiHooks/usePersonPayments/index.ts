import { useCallback } from "react";
import personPaymentsApi from "services/api/personPaymentsApi";
import { CreateBigDonation } from "types/apiResponses/BigDonation";

function usePersonPayments() {
  const getPersonPayments = useCallback(async () => {
    const { data: allPersonPayments } =
      await personPaymentsApi.getPersonPaymentsList();

    return allPersonPayments;
  }, []);

  async function createBigDonation(data: CreateBigDonation) {
    const bigDonation = personPaymentsApi.createBigDonation(data);

    return bigDonation;
  }

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

  return {
    getPersonPayments,
    getBigDonorsPayments,
    createBigDonation,
    getBigDonorPersonPayment,
  };
}

export default usePersonPayments;
