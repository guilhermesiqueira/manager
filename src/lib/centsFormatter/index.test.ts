import centsFormatter from ".";

describe("#centsFormatter", () => {
  it("returns in dollar", () => {
    expect(centsFormatter(100)).toBe("1.000");
  });
});
