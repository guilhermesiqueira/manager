import { AxiosResponse } from "axios";
import PersonPayment from "types/entities/PersonPayment";
import { apiGet } from "..";

const personPaymentsApi = {
  getPersonPaymentsList: (): Promise<AxiosResponse<PersonPayment[]>> =>
    apiGet("person_payments"),
};

export default personPaymentsApi;
