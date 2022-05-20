import { propExists } from './prop-exists'

export function tryPropExists(obj: object, path: PropertyKey[]): boolean {
  try {
    return propExists(obj, path)
  } catch {
    return false
  }
}
