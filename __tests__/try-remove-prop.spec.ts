import { tryRemoveProp } from '@src/try-remove-prop'

describe(`
  tryRemoveProp(obj: object, path: PropertyKey[]): boolean
`, () => {
  describe('empty path', () => {
    it('return false', () => {
      const obj = {
        prop: 'value'
      }

      const result = tryRemoveProp(obj, [])

      expect(result).toBe(false)
    })
  })

  describe('path exists', () => {
    it('remove the property', () => {
      const obj = {
        deep: {
          prop: 'value'
        }
      }

      const result = tryRemoveProp(obj, ['deep', 'prop'])

      expect(result).toBe(true)
      expect(obj).toStrictEqual({
        deep: {}
      })
    })
  })

  describe('path does not exist', () => {
    it('return false', () => {
      const obj = {}

      const result = tryRemoveProp(obj, ['prop'])

      expect(result).toBe(false)
    })
  })
})
