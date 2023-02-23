import dateFormatterWithMinutes from ".";

describe("#dateFormatter", () => {
  // the invisible space below is necessary, otherwise the test fails
  // because this is default form the function returns the date
  it("returns correct date", () => {
    expect(dateFormatterWithMinutes("2022-06-20 17:55:49 UTC")).toBe(
      "6/20/2022, 5:55:49 PM",
    );
  });
});
