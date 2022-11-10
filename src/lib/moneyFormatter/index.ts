function moneyFormatter(money: number): string {
  return money.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
}

export default moneyFormatter;
