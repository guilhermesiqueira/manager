import { AxiosResponse } from "axios";
import PersonPayment from "types/entities/PersonPayment";
import { apiGet, apiGetWithParams } from "..";

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
};

export default personPaymentsApi;
