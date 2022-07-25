import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet } from "..";

const integrationsApi = {
  getIntegrationsList: (): Promise<AxiosResponse<Integration>> =>
    apiGet("integrations"),
  getIntegration: (id: any): Promise<AxiosResponse<Integration>> =>
    apiGet(`integrations/${id}`)
};

export default integrationsApi;
