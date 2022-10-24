import personPaymentsApi from ".";
import api from "..";

describe("personPaymentsApi", () => {
  describe("#getPersonPaymentsList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      personPaymentsApi.getPersonPaymentsList({ page: 1, perPage: 10 });

      expect(api.get).toHaveBeenCalledWith("/api/v1/person_payments", {
        params: { params: { page: 1, per_page: 10 } },
      });
    });
  });
});
