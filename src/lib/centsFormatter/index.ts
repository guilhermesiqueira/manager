function centsFormatter(cents: number) {
  return (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
}

export default centsFormatter;
