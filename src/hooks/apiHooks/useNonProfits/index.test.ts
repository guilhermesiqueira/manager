import { renderHook } from "@testing-library/react-hooks";
import nonProfitsApi from "services/api/nonProfitsApi";
import useNonProfits from ".";

describe("useNonProfits", () => {
  let hook: ReturnType<typeof useNonProfits>;

  beforeEach(() => {
    const { result } = renderHook(() => useNonProfits());
    hook = result.current;
  });

  describe("#getNonProfit", () => {
    beforeEach(() => {
      nonProfitsApi.getNonProfit = jest.fn(() => ({} as any));
    });

    it("calls getNonProfit with correct params", () => {
      const id = "1";
      hook.getNonProfit(id);

      expect(nonProfitsApi.getNonProfit).toHaveBeenCalledWith(id);
    });
  });

  describe("#getAllNonProfits", () => {
    beforeEach(() => {
      nonProfitsApi.getNonProfitsList = jest.fn(() => ({} as any));
    });

    it("calls getNonProfit with correct params", () => {
      hook.getNonProfits();

      expect(nonProfitsApi.getNonProfitsList).toHaveBeenCalled();
    });
  });
});
