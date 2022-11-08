function moneyFormatter(money: number): string {
  return money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default moneyFormatter;
