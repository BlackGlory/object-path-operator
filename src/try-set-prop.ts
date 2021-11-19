import { setProp } from './set-prop'

export function trySetProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, value: unknown
): boolean {
  if (path.length === 0) throw new Error('The parameter path cannot be empty')

  try {
    return setProp(obj, path, value)
  } catch {
    return false
  }
}
