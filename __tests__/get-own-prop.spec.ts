import { getOwnProp } from '@src/get-prop'
import { getError } from 'return-style'

describe('getOwnProp', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => getOwnProp(obj, []))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    describe('is an own prop', () => {
      it('returns the property', () => {
        const obj = {
          deep: {
            prop: 'value'
          }
        }

        const result = getOwnProp(obj, ['deep', 'prop'])

        expect(result).toBe('value')
      })
    })

    describe('isnt an own prop', () => {
      it('throws Error', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const err = getError(() => getOwnProp(obj, ['deep', 'prop']))

        expect(err!.message).toBe('The path .deep does not exist')
      })
    })
  })

  describe('path does not exist', () => {
    it('throws Error', () => {
      const obj = {}

      const err = getError(() => getOwnProp(obj, ['deep', 'prop']))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The path .deep does not exist')
    })
  })
})
