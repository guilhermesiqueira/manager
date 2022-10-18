import numberFormatter from ".";

describe("#dateFormatter", () => {
  it("returns correct date", () => {
    expect(numberFormatter(5)).toBe("5.00");
  });
});
