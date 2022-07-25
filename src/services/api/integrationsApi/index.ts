import { AxiosResponse } from "axios";
import Integration from "types/entities/integration";
import { apiGet } from "..";

const integrationsApi = {
  getIntegrationsList: (): Promise<AxiosResponse<Integration>> =>
    apiGet("integrations"),
};

export default integrationsApi;
