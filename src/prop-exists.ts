export function propExists(obj: object, path: PropertyKey[]): boolean {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    if (key in temp) {
      temp = temp[key]
    } else {
      return false
    }
  }
  return true
}
