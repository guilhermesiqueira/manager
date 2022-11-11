import causesApi from ".";
import api from "..";

describe("causesApi", () => {
  const config = { headers: { Language: "en" } };

  describe("#getCausesList", () => {
    const headers = { Language: "en" };
    const params = { page: 3, per_page: 10 };

    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getCausesList({});

      expect(api.get).toHaveBeenCalledWith("/api/v1/causes", {
        headers,
        params,
      });
    });
  });

  describe("#createCause", () => {
    const data = {
      name: "Cause 1",
    };

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      causesApi.createCause(data);

      expect(api.post).toHaveBeenCalledWith("/api/v1/causes", data, config);
    });
  });

  describe("#updateCause", () => {
    const id = 1;

    const data = {
      id: 1,
      name: "Cause 1",
    };

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      causesApi.updateCause(1, data);

      expect(api.put).toHaveBeenCalledWith(
        `/api/v1/causes/${id}`,
        data,
        config,
      );
    });
  });
});
