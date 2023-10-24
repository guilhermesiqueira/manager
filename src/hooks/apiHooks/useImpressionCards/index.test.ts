import { renderHook } from "@testing-library/react-hooks";
import impressionCardsApi from "services/api/impressionCardsApi";
import useImpressionCards from ".";

describe("useImpressionCards", () => {
  let hook: ReturnType<typeof useImpressionCards>;

  beforeEach(() => {
    const { result } = renderHook(() => useImpressionCards());
    hook = result.current;
  });

  describe("#getAllImpressionCards", () => {
    beforeEach(() => {
      impressionCardsApi.getImpressionCardsList = jest.fn(() => ({} as any));
    });

    it("calls getImpressionCardsList with correct params", () => {
      hook.getAllImpressionCards();

      expect(impressionCardsApi.getImpressionCardsList).toHaveBeenCalled();
    });
  });

  describe("#getImpressionCard", () => {
    const id = 1;
    beforeEach(() => {
      impressionCardsApi.getImpressionCard = jest.fn(() => ({} as any));
    });

    it("calls getImpressionCard with correct params", () => {
      hook.getImpressionCard(id);

      expect(impressionCardsApi.getImpressionCard).toHaveBeenCalled();
      expect(impressionCardsApi.getImpressionCard).toHaveBeenCalledWith(id);
    });
  });

  describe("#createImpressionCard", () => {
    const data = {
      id: 1,
      headline: "MAKE YOUR DONATION",
      title: "Donate $10,00",
      description: "And help us to help others",
      videoUrl: "https://www.youtube.com/watch?v=1",
      ctaText: "Donate now",
      ctaUrl: "https://ribon.io/donate",
      image: "https://ribon.io/donate.jpg",
      active: true,
      client: "web",
    };

    const file = "";

    beforeEach(() => {
      impressionCardsApi.createImpressionCard = jest.fn(() => ({} as any));
    });

    it("calls createImpressionCard with correct params", () => {
      hook.createImpressionCard(data, file);

      expect(impressionCardsApi.createImpressionCard).toHaveBeenCalled();
      expect(impressionCardsApi.createImpressionCard).toHaveBeenCalledWith(
        data,
      );
    });
  });

  describe("#updateImpressionCard", () => {
    const id = 1;
    const data = {
      id: 1,
      headline: "MAKE YOUR DONATION",
      title: "Donate $10,00",
      description: "And help us to help others",
      videoUrl: "https://www.youtube.com/watch?v=1",
      ctaText: "Donate now",
      ctaUrl: "https://ribon.io/donate",
      image: "https://ribon.io/donate.jpg",
      active: true,
      client: "web",
    };

    const file = "";

    beforeEach(() => {
      impressionCardsApi.updateImpressionCard = jest.fn(() => ({} as any));
    });

    it("calls updateImpressionCard with correct params", () => {
      hook.updateImpressionCard(data, file);

      expect(impressionCardsApi.updateImpressionCard).toHaveBeenCalled();
      expect(impressionCardsApi.updateImpressionCard).toHaveBeenCalledWith(
        id,
        data,
      );
    });
  });
});
