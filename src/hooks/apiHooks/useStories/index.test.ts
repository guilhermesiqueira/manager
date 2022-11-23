import { renderHook } from "@testing-library/react-hooks";
import storiesApi from "services/api/storiesApi";
import useStories from ".";

describe("useStories", () => {
  let hook: ReturnType<typeof useStories>;

  beforeEach(() => {
    const { result } = renderHook(() => useStories());
    hook = result.current;
  });

  describe("#getStories", () => {
    const id = 1;

    beforeEach(() => {
      storiesApi.getNonProfitStories = jest.fn(() => ({} as any));
    });

    it("calls getStories with correct params", () => {
      hook.getStories(id);

      expect(storiesApi.getNonProfitStories).toHaveBeenCalled();
    });
  });

  describe("#getApiStory", () => {
    const id = 1;

    beforeEach(() => {
      storiesApi.getStory = jest.fn(() => ({} as any));
    });

    it("calls getApiStory with correct params", () => {
      hook.getStory(id);

      expect(storiesApi.getStory).toHaveBeenCalled();
      expect(storiesApi.getStory).toHaveBeenCalledWith(id);
    });
  });

  describe("#createApiStory", () => {
    const data = {
      title: "New Story",
      description: "Story description",
      image: "https://example.com/image.jpg",
      nonProfitId: 1,
    };
    const file = "";

    beforeEach(() => {
      storiesApi.createStory = jest.fn(() => ({} as any));
    });

    it("calls createApiStory with correct params", () => {
      hook.createStory(data, file);

      expect(storiesApi.createStory).toHaveBeenCalled();
      expect(storiesApi.createStory).toHaveBeenCalledWith(data);
    });
  });

  describe("#updateApiStory", () => {
    const id = "1";
    const data = {
      id,
      title: "New Story",
      description: "Story description",
      image: "https://example.com/image.jpg",
      nonProfitId: 1,
    };
    const file = "";

    beforeEach(() => {
      storiesApi.updateStory = jest.fn(() => ({} as any));
    });

    it("calls updateApiStory with correct params", () => {
      hook.updateStory(data, file);

      expect(storiesApi.updateStory).toHaveBeenCalled();
      expect(storiesApi.updateStory).toHaveBeenCalledWith(id, data);
    });
  });
});
