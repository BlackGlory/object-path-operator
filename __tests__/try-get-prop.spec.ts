import { tryGetProp } from '@src/try-get-prop'

describe(`
  tryGetProp(obj: object, path: PropertyKey[], defaultValue?: unknown): unknown
`, () => {
  describe('empty path', () => {
    it('return defaultValue', () => {
      const obj = {
        prop: 'value'
      }

      const result = tryGetProp(obj, [], null)

      expect(result).toBe(null)
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
