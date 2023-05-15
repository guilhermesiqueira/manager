import usersApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postCreateUser", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postCreateUser("user@ribon.io");

      expect(api.post).toHaveBeenCalledWith("/managers/v1/users", {
        email: "user@ribon.io",
      });
    });
  });

  describe("#postSearchUser", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postSearchUser("user@ribon.io");

      expect(api.post).toHaveBeenCalledWith("/managers/v1/users/search", {
        email: "user@ribon.io",
      });
    });
  });
});
