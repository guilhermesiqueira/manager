import integrationsApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postCreateUser", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      integrationsApi.getIntegrationsList();

      expect(api.get).toHaveBeenCalledWith("/api/v1/integrations");
    });
  });
});
