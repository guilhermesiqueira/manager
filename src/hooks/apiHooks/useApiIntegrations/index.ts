import integrationsApi from "services/api/integrationsApi";

function useApiIntegrations() {
  async function getAllApiIntegrations() {
    const { data: integrations } = await integrationsApi.getIntegrationsList();

    return integrations;
  }

  async function getApiIntegration(id: any) {
    const { data: integration } = await integrationsApi.getIntegration(id);

    return integration;
  }

  return {
    getAllApiIntegrations,
    getApiIntegration
  };
}

export default useApiIntegrations;
