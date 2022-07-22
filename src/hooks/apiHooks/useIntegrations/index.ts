import integrationsApi from "services/api/integrationsApi";

function useIntegrations() {
  async function getAllIntegrations() {
    const { data: integrations } = await integrationsApi.getIntegrationsList();

    return integrations;
  }

  return {
    getAllIntegrations,
  };
}

export default useIntegrations;
