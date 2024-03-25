export function isObject(data) {
  return Object.prototype.toString.call(data) === "[object Object]";
}

export function getObject({ data, defaultValue = {} }) {
  return isObject(data) ? data : defaultValue;
}
