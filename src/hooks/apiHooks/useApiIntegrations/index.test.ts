import { renderHook } from "@testing-library/react-hooks";
import integrationsApi from "services/api/integrationsApi";
import IntegrationWallet from "types/entities/IntegrationWallet";
import useApiIntegrations from ".";

describe("useIntegrations", () => {
  let hook: ReturnType<typeof useApiIntegrations>;

  beforeEach(() => {
    const { result } = renderHook(() => useApiIntegrations());
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
    const currentLang = "en";
    beforeEach(() => {
      integrationsApi.getIntegration = jest.fn(() => ({} as any));
    });

    it("calls getApiIntegration with correct params", () => {
      hook.getApiIntegration(id, currentLang);

      expect(integrationsApi.getIntegration).toHaveBeenCalled();
      expect(integrationsApi.getIntegration).toHaveBeenCalledWith(
        id,
        currentLang,
      );
    });
  });

  describe("#createApiIntegration", () => {
    const data = {
      name: "Integration 1",
      status: "active",
      ticketAvailabilityInMinutes: null,
      integrationTask: {
        description: "Faça uma compra",
        link: "Comprar",
        linkAddress: "https://renner.com",
      },
    };
    const file = "";
    const currentLang = "en";

    beforeEach(() => {
      integrationsApi.createIntegration = jest.fn(() => ({} as any));
    });

    it("calls createApiIntegration with correct params", () => {
      hook.createApiIntegration(data, file, currentLang);

      expect(integrationsApi.createIntegration).toHaveBeenCalled();
      expect(integrationsApi.createIntegration).toHaveBeenCalledWith(
        data,
        currentLang,
      );
    });
  });

  describe("#updateApiIntegration", () => {
    const id = 1;
    const wallet: IntegrationWallet = {
      publicKey: "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    };
    const data = {
      id: 1,
      name: "Integration 1",
      integrationWallet: wallet,
      uniqueAddress: "1234567890123456789012345678901234567890",
      integrationAddress: "https://dapp.ribon.io/integration/uuid",
      ticketAvailabilityInMinutes: 60,
      status: "active",
      created_at: "2020-01-01T00:00:00.000Z",
      updated_at: "2020-01-01T00:00:00.000Z",
      integrationTask: {
        description: "Faça uma compra",
        link: "Comprar",
        linkAddress: "https://renner.com",
      },
    };
    const file = "";
    const currentLang = "en";

    beforeEach(() => {
      integrationsApi.updateIntegration = jest.fn(() => ({} as any));
    });

    it("calls updateApiIntegration with correct params", () => {
      hook.updateApiIntegration(data, file, currentLang);

      expect(integrationsApi.updateIntegration).toHaveBeenCalled();
      expect(integrationsApi.updateIntegration).toHaveBeenCalledWith(
        id,
        data,
        currentLang,
      );
    });
  });

  describe("#fetchWalletFromIntegration", () => {
    const id = 1;
    beforeEach(() => {
      integrationsApi.getIntegration = jest.fn(() => ({} as any));
    });

    it("calls fetchWalletFromIntegration with correct params", () => {
      hook.fetchWalletFromIntegration(id);

      expect(integrationsApi.getIntegration).toHaveBeenCalled();
      expect(integrationsApi.getIntegration).toHaveBeenCalledWith(
        id,
        undefined,
      );
    });
  });
});
