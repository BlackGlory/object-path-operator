import { setProp } from '@src/set-prop'
import { getError } from 'return-style'

describe('setProp', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => setProp(obj, [], 'value'))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    describe('is an own prop', () => {
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

    describe('isnt an own prop', () => {
      it('set the property', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const result = setProp(obj, ['deep', 'prop'], 'new-value')

        expect(result).toBe(true)
        expect(Object.getPrototypeOf(obj)).toStrictEqual({
          deep: {
            prop: 'new-value'
          }
        })
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
