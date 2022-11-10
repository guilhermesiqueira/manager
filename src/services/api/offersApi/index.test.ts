import offersApi from ".";
import api from "..";

describe("offersApi", () => {
  describe("#getOffersList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      offersApi.getOffersList({ perPage: 15, page: 0 });

      expect(api.get).toHaveBeenCalledWith("/api/v1/givings/offers_manager", {
        params: { params: { page: 0, per_page: 15 } },
      });
    });
  });
});
