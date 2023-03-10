import dateISOFormatter from ".";

describe("dateUTCFormatter", () => {
  it("returns correct date", () => {
    expect(dateISOFormatter("2022-06-20 17:55:00 UTC")).toBe(
      "2022-06-20T17:55",
    );
  });
});
