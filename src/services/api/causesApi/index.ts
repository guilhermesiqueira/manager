import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
import { apiPost, apiPut, apiGetWithParams, apiGet } from "..";

type CausesParams = {
  perPage?: number;
  page?: number;
  language?: string;
};

const causesApi = {
  getCausesList: ({
    perPage = 10,
    page = 3,
    language,
  }: CausesParams): Promise<AxiosResponse<Cause[]>> =>
    apiGetWithParams(
      "causes",
      {
        per_page: perPage,
        page,
      },
      { headers: { Language: language ?? "en" } },
    ),
  getCause: (id: any, language?: string): Promise<AxiosResponse<Cause>> =>
    apiGet(`causes/${id}`, { headers: { Language: language ?? "en" } }),
  createCause: (data: any, language?: string): Promise<AxiosResponse<Cause>> =>
    apiPost("causes", data, { headers: { Language: language ?? "en" } }),
  updateCause: (
    id: any,
    data: Cause,
    language?: string,
  ): Promise<AxiosResponse<Cause>> =>
    apiPut(`causes/${id}`, data, {
      headers: { Language: language ?? "en" },
    }),
};

export default causesApi;
