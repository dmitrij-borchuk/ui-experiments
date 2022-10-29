export function getObjByKey<T, K extends keyof T>(key: K, arr: T[]) {
  return arr.reduce((acc, cur) => {
    const keyValue = cur[key]
    if (typeof keyValue !== 'string') {
      throw new Error(`'${key}' should be a string`)
    }
    acc[keyValue] = cur
    return acc
  }, {} as Record<string, T>)
}

export function getNumbersArray(value: number) {
  return value.toString().split('')
}
