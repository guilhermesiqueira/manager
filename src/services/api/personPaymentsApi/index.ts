import { AxiosResponse } from "axios";
import { CreateBigDonation } from "types/apiResponses/BigDonation";
import BigDonation from "types/entities/BigDonation";
import PersonPayment from "types/entities/PersonPayment";
import { apiGet, apiGetWithParams, apiPost } from "..";

const personPaymentsApi = {
  getPersonPaymentsList: (): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGetWithParams("person_payments", {}),

  getBigDonorsPayments: (): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGet("person_payments/big_donors"),

  createBigDonation: (
    data: CreateBigDonation,
  ): Promise<AxiosResponse<BigDonation>> =>
    apiPost("manager/payments/cryptocurrency/big_donation", data),

  getBigDonorPersonPayment: (
    id: string,
  ): Promise<AxiosResponse<PersonPayment>> =>
    apiGet(`person_payments/big_donor_donation/${id}`),
};

export default personPaymentsApi;
