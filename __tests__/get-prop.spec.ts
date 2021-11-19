import { getProp } from '@src/get-prop'
import { getError } from 'return-style'

describe('getProp(obj: object, path: [PropertyKey, ...PropertyKey[]]): unknown', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      // @ts-ignore
      const err = getError(() => getProp(obj, []))

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

      const result = getProp(obj, ['deep', 'prop'])

      expect(result).toBe('value')
    })
  })

  describe('path does not exist', () => {
    it('throws Error', () => {
      const obj = {}

      const err = getError(() => getProp(obj, ['deep', 'prop']))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The path .deep does not exist')
    })
  })
})
