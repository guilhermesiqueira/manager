import { renderHook } from "@testing-library/react-hooks";
import ribonConfigApi from "services/api/ribonConfigApi";
import useRibonConfig from ".";

describe("useRibonConfig", () => {
  let hook: ReturnType<typeof useRibonConfig>;

  beforeEach(() => {
    const { result } = renderHook(() => useRibonConfig());
    hook = result.current;
  });

  describe("#getConfig", () => {
    beforeEach(() => {
      ribonConfigApi.getConfig = jest.fn(() => ({} as any));
    });

    it("calls getConfig with correct params", () => {
      hook.getConfig();

      expect(ribonConfigApi.getConfig).toHaveBeenCalled();
    });
  });

  describe("#updateRibonConfig", () => {
    const data = {
      id: "1",
      defaultTicketValue: "100.4",
      updatedAt: "",
    };

    beforeEach(() => {
      ribonConfigApi.updateConfig = jest.fn(() => ({} as any));
    });

    it("calls updateConfig with correct params", () => {
      hook.updateConfig(data);

      expect(ribonConfigApi.updateConfig).toHaveBeenCalledWith(data.id, data);
    });
  });
});
