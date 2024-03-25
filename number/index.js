export function getNumber(data, defaultValue = 0) {
  return typeof data === "number" && !isNaN(data) ? data : defaultValue;
}
