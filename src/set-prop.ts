export function setProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, value: unknown
): boolean {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  const lastIndex = path.length - 1
  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    if (i === lastIndex) {
      return Reflect.set(temp, key, value)
    } else {
      if (key in temp) {
        temp = temp[key]
      } else {
        const failedPath = path.slice(0, i + 1)
        throw new Error(`The path .${failedPath.join('.')} does not exist`)
      }
    }
  }
  return false
}
