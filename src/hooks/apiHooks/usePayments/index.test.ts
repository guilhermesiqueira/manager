import { renderHook } from "@testing-library/react-hooks";
import paymentsApi from "services/api/paymentsApi";
import usePayments from ".";

describe("usePayments", () => {
  let hook: ReturnType<typeof usePayments>;

  beforeEach(() => {
    const { result } = renderHook(() => usePayments());
    hook = result.current;
  });

  describe("#getAllPayments", () => {
    beforeEach(() => {
      paymentsApi.postCreditCardRefund = jest.fn(() => ({} as any));
    });

    it("calls getPersonPayments with correct params", () => {
      const externalId = "pi_123";
      hook.creditCardRefund(externalId);

      expect(paymentsApi.postCreditCardRefund).toHaveBeenCalled();
    });
  });
});
