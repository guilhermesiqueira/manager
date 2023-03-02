import { renderHook } from "@testing-library/react-hooks";
import articlesApi from "services/api/articlesApi";
import useArticles from ".";

describe("useArticles", () => {
  let hook: ReturnType<typeof useArticles>;

  beforeEach(() => {
    const { result } = renderHook(() => useArticles());
    hook = result.current;
  });

  describe("#getArticles", () => {
    beforeEach(() => {
      articlesApi.getArticlesList = jest.fn(() => ({} as any));
    });

    it("calls getArticlesList with correct params", () => {
      hook.getArticles();
      expect(articlesApi.getArticlesList).toHaveBeenCalled();
    });
  });

  describe("#getArticle", () => {
    beforeEach(() => {
      articlesApi.getArticle = jest.fn(() => ({} as any));
    });

    it("calls getArticle with correct params", () => {
      const id = "1";
      hook.getArticle(id);
      expect(articlesApi.getArticle).toHaveBeenCalledWith(id);
    });
  });

  describe("#createArticle", () => {
    const data = {
      title: "Article 1",
      image: "image.jpg",
      visible: true,
      link: "https://ribon.io",
      publishedAt: "2020-01-01",
    };

    beforeEach(() => {
      articlesApi.createArticle = jest.fn(() => ({} as any));
    });

    it("calls createArticle with correct params", () => {
      hook.createArticle(data);
      expect(articlesApi.createArticle).toHaveBeenCalled();
      expect(articlesApi.createArticle).toHaveBeenCalledWith(data);
    });
  });

  describe("#updateArticle", () => {
    const data = {
      id: 1,
      title: "Article 1",
      image: "image.jpg",
      visible: true,
      link: "https://ribon.io",
      publishedAt: "2020-01-01",
    };

    beforeEach(() => {
      articlesApi.updateArticle = jest.fn(() => ({} as any));
    });

    it("calls updateArticle with correct params", () => {
      hook.updateArticle(data);
      expect(articlesApi.updateArticle).toHaveBeenCalled();
      expect(articlesApi.updateArticle).toHaveBeenCalledWith(data.id, data);
    });
  });
});
