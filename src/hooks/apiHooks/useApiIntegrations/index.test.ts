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

    it("calls the usersApi searchUser with correct params", () => {
      hook.getAllApiIntegrations();

      expect(integrationsApi.getIntegrationsList).toHaveBeenCalled();
    });
  });
});
