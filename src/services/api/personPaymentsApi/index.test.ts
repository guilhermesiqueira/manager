import personPaymentsApi from ".";
import api from "..";

describe("personPaymentsApi", () => {
  describe("#getPersonPaymentsList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      const page = 1;
      personPaymentsApi.getPersonPaymentsList({ page });

      expect(api.get).toHaveBeenCalledWith("/managers/v1/person_payments", {
        params: {},
      });
    });
  });

  describe("#getBigDonorsPayments", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url", () => {
      personPaymentsApi.getBigDonorsPayments();

      expect(api.get).toHaveBeenCalledWith(
        "/managers/v1/person_payments/big_donors",
      );
    });
  });
});
