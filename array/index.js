export function getArray({ data, defaultValue = [] }) {
  return Array.isArray(data) ? data : defaultValue;
}

export function joinArray({ data, symbol = ",", filterEmpty = false } = {}) {
  data = getArray(data);

  if (filterEmpty) {
    data = data.filter((item) => item !== "" && item != null);
  }

  return data.join(symbol);
}
