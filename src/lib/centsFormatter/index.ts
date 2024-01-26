function centsFormatter(cents: number) {
  return (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 3,
  });
}

export default centsFormatter;
