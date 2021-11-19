import { removeProp } from './remove-prop'

export function tryRemoveProp(obj: object, path: PropertyKey[]): boolean { 
  try {
    return removeProp(obj, path)
  } catch {
    return false
  }
}
