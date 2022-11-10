import { renderHook } from "@testing-library/react-hooks";
import offersApi from "services/api/offersApi";

import useOffers from ".";

describe("useOffers", () => {
  let hook: ReturnType<typeof useOffers>;

  beforeEach(() => {
    const { result } = renderHook(() => useOffers());
    hook = result.current;
  });

  describe("#getAllCauses", () => {
    beforeEach(() => {
      offersApi.getOffersList = jest.fn(() => ({} as any));
    });

    it("calls getCause with correct params", () => {
      hook.getOffers();

      expect(offersApi.getOffersList).toHaveBeenCalled();
    });
  });
});
