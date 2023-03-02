import articlesApi from ".";
import api from "..";

describe("articlesApi", () => {
  describe("#getArticlesList", () => {
    const params = { page: 1, per: 10 };

    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      articlesApi.getArticlesList({});

      expect(api.get).toHaveBeenCalledWith("/api/v1/news/articles", {
        params,
      });
    });
  });

  describe("#createArticle", () => {
    const data = {
      title: "Article 1",
      image: "image.jpg",
      visible: true,
      publishedAt: "2020-01-01",
      link: "https://ribon.io",
    };

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      articlesApi.createArticle(data);

      expect(api.post).toHaveBeenCalledWith("/api/v1/news/articles", data);
    });
  });

  describe("#updateArticle", () => {
    const id = 1;

    const data = {
      id: 1,
      title: "Article 1",
      image: "image.jpg",
      visible: true,
      publishedAt: "2020-01-01",
      link: "https://ribon.io",
    };

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      articlesApi.updateArticle(1, data);

      expect(api.put).toHaveBeenCalledWith(`/api/v1/news/articles/${id}`, data);
    });
  });
});
