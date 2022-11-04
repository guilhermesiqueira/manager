import causesApi from "services/api/causesApi";
import Cause from "types/entities/Cause";

function useApiCauses() {
  async function getApiCause(id: any, language?: string) {
    const { data: cause } = await causesApi.getCause(id, language);

    return cause;
  }

  async function createApiCause(data: Cause, language?: string) {
    const cause = causesApi.createCause(data, language);
    return cause;
  }

  async function updateApiCause(data: Cause, language?: string) {
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
