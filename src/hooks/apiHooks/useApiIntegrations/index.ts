import integrationsApi from "services/api/integrationsApi";
import Integration from "types/entities/Integration";
import { useUploadFile } from "../useUploadFile";

function useApiIntegrations() {
  async function getAllApiIntegrations() {
    const { data: integrations } = await integrationsApi.getIntegrationsList();

    return integrations;
  }

  async function getApiIntegration(id: any) {
    const { data: integration } = await integrationsApi.getIntegration(id);

    return integration;
  }

  async function createApiIntegration(data: any) {
    const upload = useUploadFile(data.logo);

    upload.create((error: Error, blob: any) => {
      if (error) {
        throw error;
      } else {
        integrationsApi.createIntegration({
          ...data.integration,
          logo: blob.signed_id,
        });
      }
    });
  }

  async function updateApiIntegration(id: any, data: Integration) {
    const { data: integration } = await integrationsApi.updateIntegration(
      id,
      data,
    );

    return integration;
  }

  function uploadFile(file: any, integration: Integration) {
    const upload = useUploadFile(file);

    upload.create((error: Error, blob: any) => {
      if (error) {
        throw error;
      } else {
        integrationsApi.updateIntegration(integration.id, {
          ...integration,
          logo: blob.signed_id,
        });
      }
    });
  }

  return {
    createApiIntegration,
    getAllApiIntegrations,
    getApiIntegration,
    updateApiIntegration,
    uploadFile,
  };
}

export default useApiIntegrations;
