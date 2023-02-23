import dateFormatterWithMinutes from ".";

describe("#dateFormatter", () => {
  it("returns correct date", () => {
    expect(dateFormatterWithMinutes("2022-06-20 17:55:49 UTC")).toBe(
      "6/20/2022, 5:55:49 PM",
    );
  });
});
