import { removeOwnProp } from '@src/remove-prop'
import { getError } from 'return-style'

describe('removeOwnProp', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => removeOwnProp(obj, []))

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

        const result = removeOwnProp(obj, ['deep', 'prop'])

        expect(result).toBe(true)
        expect(obj).toStrictEqual({
          deep: {}
        })
      })
    })

    describe('isnt an own prop', () => {
      it('throws Error', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const err = getError(() => removeOwnProp(obj, ['deep', 'prop']))

        expect(err).toBeInstanceOf(Error)
        expect(err!.message).toBe('The path .deep does not exist')
      })
    })
  })

  describe('path does not exist', () => {
    it('throws Error', () => {
      const obj = {}

      const err = getError(() => removeOwnProp(obj, ['prop']))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The path .prop does not exist')
    })
  })
})
