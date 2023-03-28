import bigDonorsApi from ".";
import api from "..";

describe("bigDonorsApi", () => {
  describe("#getBigDonorsApiList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      bigDonorsApi.getBigDonorsList();

      expect(api.get).toHaveBeenCalledWith("/api/v1/big_donors");
    });
  });
});
