import { renderHook } from "@testing-library/react-hooks";
import bigDonorsApi from "services/api/bigDonorsApi";
import useBigDonors from ".";

describe("useIntegrations", () => {
  let hook: ReturnType<typeof useBigDonors>;

  beforeEach(() => {
    const { result } = renderHook(() => useBigDonors());
    hook = result.current;
  });

  describe("#getAllIntegrations", () => {
    beforeEach(() => {
      bigDonorsApi.getBigDonorsList = jest.fn(() => ({} as any));
    });

    it("calls getBigDonorsList", () => {
      hook.getAllBigDonors();

      expect(bigDonorsApi.getBigDonorsList).toHaveBeenCalled();
    });
  });
});
