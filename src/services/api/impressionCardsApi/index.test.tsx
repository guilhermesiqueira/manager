import impressionCardsApi from ".";
import api from "..";

describe("impressionCardsApi", () => {
  describe("#getImpressionCardsList", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      impressionCardsApi.getImpressionCardsList();

      expect(api.get).toHaveBeenCalledWith("/managers/v1/impression_cards");
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

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      impressionCardsApi.createImpressionCard(data);

      expect(api.post).toHaveBeenCalledWith(
        "/managers/v1/impression_cards",
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

    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a put request with the correct info: url and params", () => {
      impressionCardsApi.updateImpressionCard(1, data);

      expect(api.put).toHaveBeenCalledWith(
        `/managers/v1/impression_cards/${id}`,
        data,
      );
    });
  });
});
