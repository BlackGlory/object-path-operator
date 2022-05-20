export function getProp(obj: object, path: PropertyKey[]): unknown {
  return _getProp(obj, path, (obj, prop) => prop in obj)
}

export function tryGetProp(obj: object, path: PropertyKey[], defaultValue?: unknown): unknown {
  try {
    return getProp(obj, path)
  } catch {
    return defaultValue
  }
}

export function getOwnProp(obj: object, path: PropertyKey[]): unknown {
  return _getProp(obj, path, (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))
}

export function tryGetOwnProp(obj: object, path: PropertyKey[], defaultValue?: unknown): unknown {
  try {
    return getOwnProp(obj, path)
  } catch {
    return defaultValue
  }
}

function _getProp(
  obj: object
, path: PropertyKey[]
, exists: (
    obj: Record<string | symbol | number, unknown>
  , prop: PropertyKey
  ) => boolean
) {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  let temp: Record<string | symbol | number, any> = obj
  for (let i = 0; i < path.length; i++) {
    const prop = path[i]

    if (exists(temp, prop)) {
      temp = temp[prop]
    } else {
      const failedPath = path.slice(0, i + 1)
      throw new Error(`The path .${failedPath.join('.')} does not exist`)
    }
  }
  return temp
}
