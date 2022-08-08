import { renderHook } from "@testing-library/react-hooks";
import integrationsApi from "services/api/integrationsApi";
import useIntegrations from ".";

describe("useIntegrations", () => {
  let hook: ReturnType<typeof useIntegrations>;

  beforeEach(() => {
    const { result } = renderHook(() => useIntegrations());
    hook = result.current;
  });

  describe("#getAllIntegrations", () => {
    beforeEach(() => {
      integrationsApi.getIntegrationsList = jest.fn(() => ({} as any));
    });

    it("calls getIntegrationsList with correct params", () => {
      hook.getAllApiIntegrations();

      expect(integrationsApi.getIntegrationsList).toHaveBeenCalled();
    });
  });

  describe("#getApiIntegration", () => {
    const id = 1;
    beforeEach(() => {
      integrationsApi.getIntegration = jest.fn(() => ({} as any));
    });

    it("calls getApiIntegration with correct params", () => {
      hook.getApiIntegration(id);

      expect(integrationsApi.getIntegration).toHaveBeenCalled();
      expect(integrationsApi.getIntegration).toHaveBeenCalledWith(id);
    });
  });

  describe("#createApiIntegration", () => {
    const data = {
      name: "Integration 1",
      status: "active",
    };

    beforeEach(() => {
      integrationsApi.createIntegration = jest.fn(() => ({} as any));
    });

    it("calls createApiIntegration with correct params", () => {
      hook.createApiIntegration(data);

      expect(integrationsApi.createIntegration).toHaveBeenCalled();
      expect(integrationsApi.createIntegration).toHaveBeenCalledWith(data);
    });
  });

  describe("#updateApiIntegration", () => {
    const id = 1;
    const data = {
      id: 1,
      name: "Integration 1",
      integrationWallet: {
        publicKey: "0x1234567890123456789012345678901234567890",
      },
      uniqueAddress: "1234567890123456789012345678901234567890",
      integrationAddress: "https://dapp.ribon.io/integration/uuid",
      status: "active",
      created_at: "2020-01-01T00:00:00.000Z",
      updated_at: "2020-01-01T00:00:00.000Z",
    };
    beforeEach(() => {
      integrationsApi.updateIntegration = jest.fn(() => ({} as any));
    });

    it("calls updateApiIntegration with correct params", () => {
      hook.updateApiIntegration(id, data);

      expect(integrationsApi.updateIntegration).toHaveBeenCalled();
      expect(integrationsApi.updateIntegration).toHaveBeenCalledWith(id, data);
    });
  });
});
