import { renderHook } from "@testing-library/react-hooks";
import personPaymentsApi from "services/api/personPaymentsApi";
import useIntegrations from ".";

describe("useIntegrations", () => {
  let hook: ReturnType<typeof useIntegrations>;

  beforeEach(() => {
    const { result } = renderHook(() => useIntegrations());
    hook = result.current;
  });

  describe("#getAllIntegrations", () => {
    beforeEach(() => {
      personPaymentsApi.getPersonPaymentsList = jest.fn(() => ({} as any));
    });

    it("calls getPersonPayments with correct params", () => {
      hook.getPersonPayments();

      expect(personPaymentsApi.getPersonPaymentsList).toHaveBeenCalled();
    });
  });
});
