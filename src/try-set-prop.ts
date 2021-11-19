import { setProp } from './set-prop'

export function trySetProp(obj: object, path: PropertyKey[], value: unknown): boolean {
  try {
    return setProp(obj, path, value)
  } catch {
    return false
  }
}
