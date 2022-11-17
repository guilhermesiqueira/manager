import { AxiosResponse } from "axios";
import { EditCause } from "types/apiResponses/cause";
import Cause from "types/entities/Cause";
import { apiPost, apiPut, apiGetWithParams, apiGet } from "..";

type CausesParams = {
  perPage?: number;
  page?: number;
};

const causesApi = {
  getCausesList: ({
    perPage = 10,
    page = 3,
  }: CausesParams): Promise<AxiosResponse<Cause[]>> =>
    apiGetWithParams("causes", {
      per_page: perPage,
      page,
    }),
  getCause: (id: any): Promise<AxiosResponse<Cause>> => apiGet(`causes/${id}`),
  createCause: (data: any): Promise<AxiosResponse<Cause>> =>
    apiPost("causes", data),
  updateCause: (id: any, data: EditCause): Promise<AxiosResponse<Cause>> =>
    apiPut(`causes/${id}`, data),
};

export default causesApi;
