import ribonConfigApi from ".";
import api from "..";

describe("ribonConfigApi", () => {
  describe("#getConfig", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      ribonConfigApi.getConfig();

      expect(api.get).toHaveBeenCalledWith("/managers/v1/configs/settings");
    });
  });

  describe("#updateIntegration", () => {
    const id = 1;

    const data = {
      id: "1",
      defaultTicketValue: "100.4",
      updatedAt: "",
    };

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      ribonConfigApi.updateConfig(id, data);

      expect(api.put).toHaveBeenCalledWith(
        `/managers/v1/configs/settings/${id}`,
        data,
      );
    });
  });
});
