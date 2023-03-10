function dateUTCFormatter(date: string) {
  const dateToFormat = new Date(date);
  const dateUTC = new Date(
    dateToFormat.getTime() + dateToFormat.getTimezoneOffset() * 60000,
  );
  return dateUTC.toISOString().slice(0, 16);
}

export default dateUTCFormatter;
