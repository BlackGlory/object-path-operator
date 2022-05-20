export function removeProp(obj: object, path: PropertyKey[]): boolean {
  return _removeProp(obj, path, (obj, prop) => prop in obj)
}

export function tryRemoveProp(obj: object, path: PropertyKey[]): boolean { 
  try {
    return removeProp(obj, path)
  } catch {
    return false
  }
}

export function removeOwnProp(obj: object, path: PropertyKey[]): boolean {
  return _removeProp(obj, path, (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))
}

export function tryRemoveOwnProp(obj: object, path: PropertyKey[]): boolean { 
  try {
    return removeOwnProp(obj, path)
  } catch {
    return false
  }
}

function _removeProp(
  obj: object
, path: PropertyKey[]
, exists: (
    obj: Record<string | symbol | number, unknown>
  , prop: PropertyKey
  ) => boolean
) {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  const lastIndex = path.length - 1
  let temp: any = obj
  for (let i = 0; i < path.length; i++) {
    const prop = path[i]

    if (exists(temp, prop)) {
      if (i === lastIndex) {
        return Reflect.deleteProperty(temp, prop)
      } else {
        temp = temp[prop]
      }
    } else {
      const failedPath = path.slice(0, i + 1)
      throw new Error(`The path .${failedPath.join('.')} does not exist`)
    }
  }
  return false
}
