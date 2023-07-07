import { AxiosResponse } from "axios";
import { CreateBigDonation } from "types/apiResponses/BigDonation";
import BigDonation from "types/entities/BigDonation";
import PersonPayment from "types/entities/PersonPayment";
import { apiGet, apiGetWithParams, apiPost } from "..";

type PersonPaymentsParams = {
  perPage?: number;
  page?: number;
  searchTerm?: string;
};

const personPaymentsApi = {
  getPersonPaymentsList: ({
    page = 1,
    perPage = 10,
    searchTerm = "" }: PersonPaymentsParams): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGetWithParams("person_payments", { 
      params: { per_page: perPage, page, search_term: searchTerm }, }),

  getBigDonorsPayments: (): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGet("person_payments/big_donors"),

  createBigDonation: (
    data: CreateBigDonation,
  ): Promise<AxiosResponse<BigDonation>> =>
    apiPost("payments/cryptocurrency/big_donation", data),

  getBigDonorPersonPayment: (
    id: string,
  ): Promise<AxiosResponse<PersonPayment>> =>
    apiGet(`person_payments/big_donor_donation/${id}`),
};

export default personPaymentsApi;
