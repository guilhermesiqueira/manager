import paymentsApi from "services/api/paymentsApi";

function usePayments() {
  async function creditCardRefund(externalId: string) {
    const { data: user } = await paymentsApi.postCreditCardRefund(externalId);

    return user;
  }

  return {
    creditCardRefund,
  };
}

export default usePayments;
