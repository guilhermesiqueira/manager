import { renderHook } from "@testing-library/react-hooks";
import causesApi from "services/api/causesApi";
import useCauses from ".";

describe("useCauses", () => {
  let hook: ReturnType<typeof useCauses>;

  beforeEach(() => {
    const { result } = renderHook(() => useCauses());
    hook = result.current;
  });

  describe("#getAllCauses", () => {
    beforeEach(() => {
      causesApi.getCausesList = jest.fn(() => ({} as any));
    });

    it("calls getCausesList with correct params", () => {
      hook.getAllApiCauses();

      expect(causesApi.getCausesList).toHaveBeenCalled();
    });
  });

  describe("#getApiCause", () => {
    const id = 1;
    const currentLang = "en";
    beforeEach(() => {
      causesApi.getCause = jest.fn(() => ({} as any));
    });

    it("calls getApiCause with correct params", () => {
      hook.getApiCause(id, currentLang);

      expect(causesApi.getCause).toHaveBeenCalled();
      expect(causesApi.getCause).toHaveBeenCalledWith(id, currentLang);
    });
  });

  describe("#createApiCause", () => {
    const data = {
      name: "Cause 1",
    };
    const currentLang = "en";

    beforeEach(() => {
      causesApi.createCause = jest.fn(() => ({} as any));
    });

    it("calls createApiCause with correct params", () => {
      hook.createApiCause(data, currentLang);

      expect(causesApi.createCause).toHaveBeenCalled();
      expect(causesApi.createCause).toHaveBeenCalledWith(data, currentLang);
    });
  });

  describe("#updateApiCause", () => {
    const data = {
      id: 1,
      name: "Cause 1",
    };
    const currentLang = "en";

    beforeEach(() => {
      causesApi.updateCause = jest.fn(() => ({} as any));
    });

    it("calls updateApiCause with correct params", () => {
      hook.updateApiCause(data, currentLang);

      expect(causesApi.updateCause).toHaveBeenCalled();
      expect(causesApi.updateCause).toHaveBeenCalledWith(data, currentLang);
    });
  });
});
