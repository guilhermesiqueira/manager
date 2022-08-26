import integrationsApi from "services/apiTheGraph/integrationsApi";

function useIntegrations() {
  async function getAllIntegrations() {
    const { data: integrations } = await integrationsApi.fetchAllIntegrations();
    return integrations;
  }
  async function getIntegration(id: string) {
    const { data: integration } = await integrationsApi.fetchIntegration(id);
    return integration;
  }

  return { getAllIntegrations, getIntegration };
}

export default useIntegrations;
