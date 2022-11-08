import moneyFormatter from ".";

describe("#dateFormatter", () => {
  it("returns correct date", () => {
    expect(moneyFormatter(5)).toBe("5.00");
  });
});
