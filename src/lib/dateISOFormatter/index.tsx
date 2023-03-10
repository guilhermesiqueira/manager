function dateISOFormatter(date: string) {
  const dateToFormat = date.replace(" ", "T").split(":00 ")[0];

  return dateToFormat;
}

export default dateISOFormatter;
