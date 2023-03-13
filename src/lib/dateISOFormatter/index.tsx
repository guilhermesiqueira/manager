export function dateISOFormatterFromString(date: string) {
  const dateToFormat = date
    .replace(" ", "T")
    .replaceAll("/", "-")
    .split(":00 ")[0];
  return dateToFormat;
}

export function dateISOFormatter(date: Date) {
  const pad = function (num: number) {
    return (num < 10 ? "0" : "") + num;
  };

  const formattedDate = `${date.getFullYear()}-${pad(
    date.getMonth() + 1,
  )}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;

  return formattedDate;
}
