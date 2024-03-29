import { propExists } from '@src/prop-exists'
import { getError } from 'return-style'

describe('propExists', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => propExists(obj, []))

      expect(err).toBeInstanceOf(Error)
      expect(err!.message).toBe('The parameter path cannot be empty')
    })
  })

  describe('path exists', () => {
    describe('is an own prop', () => {
      it('returns true', () => {
        const obj = {
          deep: {
            prop: 'value'
          }
        }

        const result = propExists(obj, ['deep', 'prop'])

        expect(result).toBe(true)
      })
    })

    describe('isnt an own prop', () => {
      it('returns true', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const result = propExists(obj, ['deep', 'prop'])

        expect(result).toBe(true)
      })
    })
  })

  describe('path does not exist', () => {
    it('returns false', () => {
      const obj = {}

      const result = propExists(obj, ['deep', 'prop'])

      expect(result).toBe(false)
    })
  })
})
