import { renderHook } from "@testing-library/react-hooks";
import bigDonorsApi from "services/api/bigDonorsApi";
import useBigDonors from ".";

describe("useBigDonors", () => {
  let hook: ReturnType<typeof useBigDonors>;

  beforeEach(() => {
    const { result } = renderHook(() => useBigDonors());
    hook = result.current;
  });

  describe("#getBigDonors", () => {
    beforeEach(() => {
      bigDonorsApi.getBigDonorsList = jest.fn(() => ({} as any));
    });

    it("calls getBigDonorsList", () => {
      hook.getBigDonors();

      expect(bigDonorsApi.getBigDonorsList).toHaveBeenCalled();
    });
  });

  describe("#getBigDonor", () => {
    beforeEach(() => {
      bigDonorsApi.getBigDonor = jest.fn(() => ({} as any));
    });

    it("calls getBigDonor with correct params", () => {
      hook.getBigDonor("1");

      expect(bigDonorsApi.getBigDonor).toHaveBeenCalled();
      expect(bigDonorsApi.getBigDonor).toHaveBeenCalledWith("1");
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

  describe("#updateBigDonor", () => {
    const data = {
      id: "1",
      name: "BigDonor 1",
      email: "email",
    };

    beforeEach(() => {
      bigDonorsApi.updateBigDonor = jest.fn(() => ({} as any));
    });

    it("calls updateBigDonor with correct params", () => {
      hook.updateBigDonor(data);

      expect(bigDonorsApi.updateBigDonor).toHaveBeenCalled();
      expect(bigDonorsApi.updateBigDonor).toHaveBeenCalledWith(data);
    });
  });
});
