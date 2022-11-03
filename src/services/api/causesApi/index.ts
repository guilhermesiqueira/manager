import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
import { apiGet, apiPost, apiPut } from "..";

const causesApi = {
  getCausesList: (): Promise<AxiosResponse<Cause>> => apiGet("causes"),
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
