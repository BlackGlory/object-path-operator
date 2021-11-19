import { getProp } from './get-prop'

export function tryGetProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, defaultValue?: unknown
): unknown {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  try {
    return getProp(obj, path)
  } catch {
    return defaultValue
  }
}
