import personPaymentsApi from "services/api/personPaymentsApi";

function usePersonPayments() {
  async function getPersonPayments() {
    const { data: personPayments } =
      await personPaymentsApi.getPersonPaymentsList();

    return personPayments;
  }

  return {
    getPersonPayments,
  };
}

export default usePersonPayments;
