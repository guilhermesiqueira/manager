import bigDonorsApi from ".";
import api from "..";

describe("bigDonorsApi", () => {
  describe("#getBigDonorsApiList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      bigDonorsApi.getBigDonorsList();

      expect(api.get).toHaveBeenCalledWith("/managers/v1/big_donors");
    });
  });

  describe("#getBigDonor", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      bigDonorsApi.getBigDonor("1");

      expect(api.get).toHaveBeenCalledWith("/managers/v1/big_donors/1");
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

      expect(api.post).toHaveBeenCalledWith("/managers/v1/big_donors", data);
    });
  });

  describe("#updateBigDonor", () => {
    const data = {
      id: "1",
      name: "bigDonor 1",
      email: "",
    };

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      bigDonorsApi.updateBigDonor(data);

      expect(api.put).toHaveBeenCalledWith("/managers/v1/big_donors/1", data);
    });
  });
});
