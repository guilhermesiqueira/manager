import { renderHook } from "@testing-library/react-hooks";
import causesApi from "services/api/causesApi";
import useCauses from ".";

describe("useCauses", () => {
  let hook: ReturnType<typeof useCauses>;

  beforeEach(() => {
    const { result } = renderHook(() => useCauses());
    hook = result.current;
  });

  describe("#getCause", () => {
    beforeEach(() => {
      causesApi.getCause = jest.fn(() => ({} as any));
    });

    it("calls getCause with correct params", () => {
      const id = "1";
      hook.getCause(id);

      expect(causesApi.getCause).toHaveBeenCalledWith(id);
    });
  });

  describe("#getAllCauses", () => {
    beforeEach(() => {
      causesApi.getCausesList = jest.fn(() => ({} as any));
    });

    it("calls getCause with correct params", () => {
      hook.getCauses();

      expect(causesApi.getCausesList).toHaveBeenCalled();
    });
  });
});
