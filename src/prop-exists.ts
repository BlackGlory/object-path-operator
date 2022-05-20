export function propExists(obj: object, path: PropertyKey[]): boolean {
  return _propExists(obj, path, (obj, prop) => prop in obj)
}

export function tryPropExists(obj: object, path: PropertyKey[]): boolean {
  try {
    return propExists(obj, path)
  } catch {
    return false
  }
}

export function ownPropExists(obj: object, path: PropertyKey[]): boolean {
  return _propExists(obj, path, (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))
}

export function tryOwnPropExists(obj: object, path: PropertyKey[]): boolean {
  try {
    return ownPropExists(obj, path)
  } catch {
    return false
  }
}

function _propExists(
  obj: object
, path: PropertyKey[]
, exists: (
    obj: Record<string | symbol | number, unknown>
  , prop: PropertyKey
  ) => boolean
) {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const prop = path[i]

    if (exists(temp, prop)) {
      temp = temp[prop]
    } else {
      return false
    }
  }
  return true
}
