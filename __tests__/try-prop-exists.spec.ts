import { tryPropExists } from '@src/prop-exists'

describe('tryPropExists', () => {
  describe('empty path', () => {
    it('returns false', () => {
      const obj = {
        prop: 'value'
      }

      const result = tryPropExists(obj, [])

      expect(result).toBe(false)
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

        const result = tryPropExists(obj, ['deep', 'prop'])

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

        const result = tryPropExists(obj, ['deep', 'prop'])

        expect(result).toBe(true)
      })
    })
  })

  describe('path does not exist', () => {
    it('returns false', () => {
      const obj = {}

      const result = tryPropExists(obj, ['deep', 'prop'])

      expect(result).toBe(false)
    })
  })
})
