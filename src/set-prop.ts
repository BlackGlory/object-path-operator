export function setProp(obj: object, path: PropertyKey[], value: unknown): boolean {
  return _setProp(obj, path, value, (obj, prop) => prop in obj)
}

export function trySetProp(obj: object, path: PropertyKey[], value: unknown): boolean {
  try {
    return setProp(obj, path, value)
  } catch {
    return false
  }
}

export function setOwnProp(obj: object, path: PropertyKey[], value: unknown): boolean {
  return _setProp(obj, path, value, (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))
}

export function trySetOwnProp(obj: object, path: PropertyKey[], value: unknown): boolean {
  try {
    return setOwnProp(obj, path, value)
  } catch {
    return false
  }
}

function _setProp(
  obj: object
, path: PropertyKey[]
, value: unknown
, exists: (
    obj: Record<string | symbol | number, unknown>
  , prop: PropertyKey
  ) => boolean
) {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  const lastIndex = path.length - 1
  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    if (i === lastIndex) {
      return Reflect.set(temp, key, value)
    } else {
      if (exists(temp, key)) {
        temp = temp[key]
      } else {
        const failedPath = path.slice(0, i + 1)
        throw new Error(`The path .${failedPath.join('.')} does not exist`)
      }
    }
  }
  return false
}
