import dateFormatter from ".";

describe("#dateFormatter", () => {
  const acceptableDates = ["20/06/2022", "6/20/2022"]
  it("returns correct date", () => {
    expect(dateFormatter("2022-06-20 17:55:49 UTC")).toBe(acceptableDates[0] || acceptableDates[1]); 
  });
});