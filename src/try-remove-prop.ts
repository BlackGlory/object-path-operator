import { removeProp } from './remove-prop'

export function tryRemoveProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
): boolean { 
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  try {
    return removeProp(obj, path)
  } catch {
    return false
  }
}
