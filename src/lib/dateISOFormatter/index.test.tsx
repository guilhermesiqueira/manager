import { dateISOFormatter, dateISOFormatterFromString } from ".";

describe("dateUTCFormatter", () => {
  describe("dateISOFormatterFromString", () => {
    it("returns correct date", () => {
      expect(dateISOFormatterFromString("2022-06-20 17:55:00 GMT")).toBe(
        "2022-06-20T17:55",
      );
    });
  });

  describe("dateISOFormatter", () => {
    it("returns correct date", () => {
      const date = new Date("2022-06-20 17:55:00 GMT");
      expect(dateISOFormatter(date)).toBe("2022-06-20T17:55");
    });
  });
});
