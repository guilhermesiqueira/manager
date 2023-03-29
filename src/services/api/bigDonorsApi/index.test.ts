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

  describe("#createBigDonor", () => {
    const data = {
      name: "bigDonor 1",
      email: "bigdonor1@gmail.com",
    };

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      bigDonorsApi.createBigDonor(data);

      expect(api.post).toHaveBeenCalledWith("/api/v1/big-donors", data);
    });
  });
});
