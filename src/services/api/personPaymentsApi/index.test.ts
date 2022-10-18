import personPaymentsApi from ".";
import api from "..";

describe("personPaymentsApi", () => {
  describe("#getPersonPaymentsList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      personPaymentsApi.getPersonPaymentsList();

      expect(api.get).toHaveBeenCalledWith("/api/v1/person_payments");
    });
  });
});
