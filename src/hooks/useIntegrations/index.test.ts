import { renderHook } from "@testing-library/react-hooks";
import integrationsApi from "services/api/integrationsApi";
import useIntegrations from ".";

describe("useIntegrations", () => {
  let hook: ReturnType<typeof useIntegrations>;

  beforeEach(() => {
    const { result } = renderHook(() => useIntegrations());
    hook = result.current;
  });

  describe("#findUser", () => {
    beforeEach(() => {
      integrationsApi.getIntegrationsList = jest.fn(() => ({} as any));
    });

    it("calls the usersApi searchUser with correct params", () => {
      hook.getAllIntegrations();

      expect(integrationsApi.getIntegrationsList).toHaveBeenCalled();
    });

    it("returns the data fetched from the api", async () => {
      const findResultResult = await hook.getAllIntegrations();
      expect(findResultResult).toEqual({});
    });
  });
});
