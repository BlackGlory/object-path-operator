import { tryGetProp } from '@src/get-prop'

describe('tryGetProp', () => {
  describe('empty path', () => {
    it('return defaultValue', () => {
      const obj = {
        prop: 'value'
      }

      const result = tryGetProp(obj, [], null)

      expect(result).toBe(null)
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

        const result = tryGetProp(obj, ['deep', 'prop'])

        expect(result).toBe('value')
      })
    })

    describe('isnt an own prop', () => {
      it('returns the property', () => {
        const obj = Object.create({
          deep: {
            prop: 'value'
          }
        })

        const result = tryGetProp(obj, ['deep', 'prop'])

        expect(result).toBe('value')
      })
    })
  })

  describe('path does not exist', () => {
    it('return defaultValue', () => {
      const obj = {}

      const result = tryGetProp(obj, ['deep', 'prop'], null)

      expect(result).toBe(null)
    })
  })
})
