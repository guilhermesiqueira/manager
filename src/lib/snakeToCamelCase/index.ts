function snakeToCamelCase(string: string) {
  return string.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", ""),
  );
}
export default snakeToCamelCase;
