import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet } from "..";

const integrationsApi = {
  getIntegrationsList: (): Promise<AxiosResponse<Integration>> =>
    apiGet("integrations"),
};

export default integrationsApi;
