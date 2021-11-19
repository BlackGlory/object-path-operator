import { setProp } from '@src/set-prop'
import { getError } from 'return-style'

describe('setProp(obj: object, path: [PropertyKey, PropertyKey[]], value: any): boolean', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      // @ts-ignore
      const err = getError(() => setProp(obj, [], 'value'))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    it('set the property', () => {
      const obj = {
        deep: {
          prop: 'value'
        }
      }

      const result = setProp(obj, ['deep', 'prop'], 'new-value')

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

        const result = setProp(obj, ['prop'], 'new-value')

        expect(result).toBe(true)
        expect(obj).toStrictEqual({
          prop: 'new-value'
        })
      })
    })

    describe('deep path', () => {
      it('throws Error', () => {
        const obj = {}

        const err = getError(() => setProp(obj, ['deep', 'prop'], 'new-value'))

        expect(err).toBeInstanceOf(Error)
      })
    })
  })
})
