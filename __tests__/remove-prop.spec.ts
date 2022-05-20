import { removeProp } from '@src/remove-prop'
import { getError } from 'return-style'

describe('removeProp', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => removeProp(obj, []))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    describe('is an own prop', () => {
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

    describe('isnt an own prop', () => {
      it('remove the property', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const result = removeProp(obj, ['deep', 'prop'])

        expect(result).toBe(true)
        expect(Object.getPrototypeOf(obj)).toStrictEqual({
          deep: {}
        })
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
