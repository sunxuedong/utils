export function getString({ data, defaultValue = "" }) {
  return typeof data === "string" ? data : defaultValue;
}

export function splitString({ data, symbol = ",", defaultValue = [] } = {}) {
  data = getString(data);
  data = data.length ? data.split(symbol) : defaultValue;

  return data;
}
