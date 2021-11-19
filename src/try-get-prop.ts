import { getProp } from './get-prop'

export function tryGetProp(obj: object, path: PropertyKey[], defaultValue?: unknown): unknown {
  try {
    return getProp(obj, path)
  } catch {
    return defaultValue
  }
}
