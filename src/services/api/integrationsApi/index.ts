import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet, apiPost, apiPut } from "..";

const integrationsApi = {
  getIntegrationsList: (): Promise<AxiosResponse<Integration>> =>
    apiGet("integrations"),
  getIntegration: (
    id: any,
    language?: string,
  ): Promise<AxiosResponse<Integration>> =>
    apiGet(`integrations/${id}`, { headers: { Language: language ?? "en" } }),
  createIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiPost("integrations", data),
  updateIntegration: (
    id: any,
    data: Integration,
  ): Promise<AxiosResponse<Integration>> => apiPut(`integrations/${id}`, data),
};

export default integrationsApi;
