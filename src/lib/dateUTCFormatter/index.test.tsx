import dateUTCFormatter from ".";

describe("dateUTCFormatter", () => {
  it("returns correct date", () => {
    expect(dateUTCFormatter("2022-06-20 17:55:49 UTC")).toBe(
      "2022-06-20T17:55",
    );
  });
});
