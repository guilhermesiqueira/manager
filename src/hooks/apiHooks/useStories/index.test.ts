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
});
