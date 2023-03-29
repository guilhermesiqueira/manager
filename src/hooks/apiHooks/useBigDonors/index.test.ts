import { renderHook } from "@testing-library/react-hooks";
import bigDonorsApi from "services/api/bigDonorsApi";
import useBigDonors from ".";

describe("useBigDonors", () => {
  let hook: ReturnType<typeof useBigDonors>;

  beforeEach(() => {
    const { result } = renderHook(() => useBigDonors());
    hook = result.current;
  });

  describe("#getAllBigDonors", () => {
    beforeEach(() => {
      bigDonorsApi.getBigDonorsList = jest.fn(() => ({} as any));
    });

    it("calls getBigDonorsList", () => {
      hook.getAllBigDonors();

      expect(bigDonorsApi.getBigDonorsList).toHaveBeenCalled();
    });
  });

  describe("#createBigDonor", () => {
    const data = {
      name: "BigDonor 1",
      email: "bigdonor1@gmail.com",
    };

    beforeEach(() => {
      bigDonorsApi.createBigDonor = jest.fn(() => ({} as any));
    });

    it("calls createBigDonor with correct params", () => {
      hook.createBigDonor(data);

      expect(bigDonorsApi.createBigDonor).toHaveBeenCalled();
      expect(bigDonorsApi.createBigDonor).toHaveBeenCalledWith(data);
    });
  });
});
