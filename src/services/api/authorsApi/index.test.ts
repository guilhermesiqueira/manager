import authorsApi from ".";
import api from "..";

describe("authorsApi", () => {
  describe("#getAuthorsList", () => {
    const params = { page: 1, per: 1000 };

    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      authorsApi.getAuthorsList({});

      expect(api.get).toHaveBeenCalledWith("/managers/v1/news/authors", {
        params,
      });
    });
  });

  describe("#createAuthor", () => {
    const data = {
      name: "Author 1",
    };

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      authorsApi.createAuthor(data);

      expect(api.post).toHaveBeenCalledWith("/managers/v1/news/authors", data);
    });
  });

  describe("#updateAuthor", () => {
    const id = 1;

    const data = {
      id: 1,
      name: "Author 1",
    };

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      authorsApi.updateAuthor(1, data);

      expect(api.put).toHaveBeenCalledWith(
        `/managers/v1/news/authors/${id}`,
        data,
      );
    });
  });
});
