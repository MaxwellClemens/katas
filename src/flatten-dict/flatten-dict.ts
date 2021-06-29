export function flattenDictionary(dict: { [key: string]: any }): {
  [key: string]: any
} {
  const keys = Object.keys(dict)
  let result = {}

  for (const key of keys) {
    const value = dict[key]
    if (typeof value === 'object') {
      const nested = flattenDictionary(value)
      const nestedKeys = Object.keys(nested)

      for (const nestedKey of nestedKeys) {
        result[key + '.' + nestedKey] = nested[nestedKey]
      }
    } else {
      result[key] = value
    }
  }

  return result
}
