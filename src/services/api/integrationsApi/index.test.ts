import integrationsApi from ".";
import api from "..";

describe("integrationsApi", () => {
  describe("#getIntegrationsList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      integrationsApi.getIntegrationsList();

      expect(api.get).toHaveBeenCalledWith("/api/v1/integrations");
    });
  });

  describe("#updateIntegration", () => {
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
    }

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      integrationsApi.updateIntegration(1, data);

      expect(api.put).toHaveBeenCalledWith(`/api/v1/integrations/${id}`, data );
    });
  });
});
