import { AxiosResponse } from "axios";
import { CreateBigDonation } from "types/apiResponses/BigDonation";
import BigDonation from "types/entities/BigDonation";
import PersonPayment from "types/entities/PersonPayment";
import { apiGet, apiGetWithParams, apiPost } from "..";

type PersonPaymentsParams = {
  perPage?: number;
  page?: number;
};

const personPaymentsApi = {
  getPersonPaymentsList: ({
    perPage = 10,
    page = 3,
  }: PersonPaymentsParams): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGetWithParams("person_payments", {
      params: {
        per_page: perPage,
        page,
      },
    }),

  getBigDonorsPayments: (): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGet("person_payments/big_donors"),

  createBigDonation: (
    data: CreateBigDonation,
  ): Promise<AxiosResponse<BigDonation>> =>
    apiPost("payments/crypto_currency/big_donation", data),
};

export default personPaymentsApi;
