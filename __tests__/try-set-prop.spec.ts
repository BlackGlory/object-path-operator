import { trySetProp } from '@src/try-set-prop'

describe(`
  trySetProp(obj: object, path: PropertyKey[], value: unknown): boolean
`, () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const result = trySetProp(obj, [], 'value')

      expect(result).toBe(false)
    })
  })

  describe('path exists', () => {
    it('set the property', () => {
      const obj = {
        deep: {
          prop: 'value'
        }
      }

      const result = trySetProp(obj, ['deep', 'prop'], 'new-value')

      expect(result).toBe(true)
      expect(obj).toStrictEqual({
        deep: {
          prop: 'new-value'
        }
      })
    })
  })
  
  describe('path does not exist', () => {
    describe('shallow path', () => {
      it('set the property', () => {
        const obj = {}

        const result = trySetProp(obj, ['prop'], 'new-value')

        expect(result).toBe(true)
        expect(obj).toStrictEqual({
          prop: 'new-value'
        })
      })
    })

    describe('deep path', () => {
      it('return false', () => {
        const obj = {}

        const result = trySetProp(obj, ['deep', 'prop'], 'new-value')

        expect(result).toBe(false)
      })
    })
  })
})
