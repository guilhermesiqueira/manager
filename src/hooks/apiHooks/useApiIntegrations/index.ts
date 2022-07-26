import integrationsApi from "services/api/integrationsApi";

function useApiIntegrations() {
  async function getAllApiIntegrations() {
    const { data: integrations } = await integrationsApi.getIntegrationsList();

    return integrations;
  }

  return {
    getAllApiIntegrations,
  };
}

export default useApiIntegrations;
