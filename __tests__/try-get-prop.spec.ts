import { tryGetProp } from '@src/try-get-prop'
import { getError } from 'return-style'

describe(`
  tryGetProp(
    obj: object
  , path: [PropertyKey, ...PropertyKey[]]
  , defaultValue?: unknown
  ): unknown
`, () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      // @ts-ignore
      const err = getError(() => tryGetProp(obj, []))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    it('returns the property', () => {
      const obj = {
        deep: {
          prop: 'value'
        }
      }

      const result = tryGetProp(obj, ['deep', 'prop'])

      expect(result).toBe('value')
    })
  })

  describe('path does not exist', () => {
    it('return defaultValue', () => {
      const obj = {}

      const result = tryGetProp(obj, ['deep', 'prop'], null)

      expect(result).toBe(null)
    })
  })
})
