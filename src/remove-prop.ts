export function removeProp(obj: object, path: PropertyKey[]): boolean {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  const lastIndex = path.length - 1
  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    if (key in temp) {
      if (i === lastIndex) {
        return Reflect.deleteProperty(temp, key)
      } else {
        temp = temp[key]
      }
    } else {
      const failedPath = path.slice(0, i + 1)
      throw new Error(`The path .${failedPath.join('.')} does not exist`)
    }
  }
  return false
}
