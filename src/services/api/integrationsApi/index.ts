import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet, apiPost, apiPut } from "..";

const integrationsApi = {
  getIntegrationsList: (): Promise<AxiosResponse<Integration>> =>
    apiGet("integrations"),
  getMobilityAttributes: (): Promise<AxiosResponse<string[]>> =>
    apiGet("integrations_mobility_attributes"),
  getIntegration: (
    id: any,
    language?: string,
  ): Promise<AxiosResponse<Integration>> =>
    apiGet(`integrations/${id}`, { headers: { Language: language ?? "en" } }),
  createIntegration: (
    data: any,
    language?: string,
  ): Promise<AxiosResponse<Integration>> =>
    apiPost("integrations", data, { headers: { Language: language ?? "en" } }),
  updateIntegration: (
    id: any,
    data: Integration,
    language?: string,
  ): Promise<AxiosResponse<Integration>> =>
    apiPut(`integrations/${id}`, data, {
      headers: { Language: language ?? "en" },
    }),
};

export default integrationsApi;
