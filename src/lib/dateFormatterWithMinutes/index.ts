function dateFormatterWithMinutes(date: string): string {
  return new Date(date).toLocaleString();
}

export default dateFormatterWithMinutes;
