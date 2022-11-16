import integrationsApi from "services/api/integrationsApi";
import Integration from "types/entities/Integration";
import { useUploadFile } from "../useUploadFile";

function useApiIntegrations() {
  async function getAllApiIntegrations() {
    const { data: integrations } = await integrationsApi.getIntegrationsList();

    return integrations;
  }

  async function getMobilityAttributes() {
    const { data } = await integrationsApi.getMobilityAttributes();

    return data;
  }

  async function getApiIntegration(id: any, language?: string) {
    const { data: integration } = await integrationsApi.getIntegration(
      id,
      language,
    );

    return integration;
  }

  async function createApiIntegration(
    data: Integration,
    file: string,
    language?: string,
  ) {
    const upload = useUploadFile(data.logo);

    let integration;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          integration = integrationsApi.createIntegration(
            {
              ...data,
              logo: blob.signed_id,
            },
            language,
          );
        }
      });
    } else {
      integration = integrationsApi.createIntegration(data, language);
    }
    return integration;
  }

  async function updateApiIntegration(
    data: Integration,
    file: string,
    language?: string,
  ) {
    const upload = useUploadFile(data.logo);
    let integration;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          integration = integrationsApi.updateIntegration(
            data.id,
            {
              ...data,
              logo: blob.signed_id,
            },
            language,
          );
        }
      });
    } else {
      const currentIntegration = data;
      delete currentIntegration.logo;
      integration = integrationsApi.updateIntegration(
        data.id,
        currentIntegration,
        language,
      );
    }
    return integration;
  }

  async function fetchWalletFromIntegration(id: number) {
    const { integrationWallet } = await getApiIntegration(id);
    return integrationWallet?.publicKey.toLowerCase();
  }

  return {
    createApiIntegration,
    getAllApiIntegrations,
    getMobilityAttributes,
    getApiIntegration,
    updateApiIntegration,
    fetchWalletFromIntegration,
  };
}

export default useApiIntegrations;
