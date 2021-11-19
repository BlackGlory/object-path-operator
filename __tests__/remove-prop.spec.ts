import { removeProp } from '@src/remove-prop'
import { getError } from 'return-style'

describe('removeProp(obj: object, path: [PropertyKey, ...PropertyKey[]]): boolean', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      // @ts-ignore
      const err = getError(() => removeProp(obj, []))

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

      const result = removeProp(obj, ['deep', 'prop'])

      expect(result).toBe(true)
      expect(obj).toStrictEqual({
        deep: {}
      })
    })
  })

  describe('path does not exist', () => {
    it('throws Error', () => {
      const obj = {}

      const err = getError(() => removeProp(obj, ['prop']))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The path .prop does not exist')
    })
  })
})
