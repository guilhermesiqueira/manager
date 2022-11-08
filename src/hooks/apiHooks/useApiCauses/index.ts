import causesApi from "services/api/causesApi";
import { CreateCause, EditCause } from "types/entities/Cause";

function useApiCauses() {
  async function getApiCause(id: any, language?: string) {
    const { data: cause } = await causesApi.getCause(id, language);

    return cause;
  }

  async function createApiCause(data: CreateCause, language?: string) {
    const cause = causesApi.createCause(data, language);
    return cause;
  }

  async function updateApiCause(data: EditCause, language?: string) {
    const cause = causesApi.updateCause(data.id, data, language);
    return cause;
  }

  return {
    createApiCause,
    getApiCause,
    updateApiCause,
  };
}

export default useApiCauses;
