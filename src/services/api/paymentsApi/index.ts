import { AxiosResponse } from "axios";
import Refund from "types/entities/PersonPayment";
import { apiPost } from "..";

const paymentsApi = {
  postCreditCardRefund: (externalId: string): Promise<AxiosResponse<Refund>> =>
    apiPost("payments/credit_cards_refund", {
      external_id: externalId,
    }),
};

export default paymentsApi;
