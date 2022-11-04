import causesApi from ".";
import api from "..";

describe("causesApi", () => {
  describe("#getCausesList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getCausesList({});

      expect(api.get).toHaveBeenCalledWith("/api/v1/Causes");
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

      expect(api.post).toHaveBeenCalledWith("/api/v1/Causes", data, {
        headers: { Language: "en" },
      });
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

      expect(api.put).toHaveBeenCalledWith(`/api/v1/Causes/${id}`, data, {
        headers: { Language: "en" },
      });
    });
  });
});
