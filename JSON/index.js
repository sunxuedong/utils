export function tryParse({ data: jsonString, defaultValue = {} }) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error(err);
    return defaultValue;
  }
}
