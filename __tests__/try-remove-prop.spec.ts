import { tryRemoveProp } from '@src/try-remove-prop'
import { getError } from 'return-style'

describe(`
  tryRemoveProp(
    obj: object
  , path: [PropertyKey, ...PropertyKey[]]
  ): boolean
`, () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      // @ts-ignore
      const err = getError(() => tryRemoveProp(obj, []))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
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
