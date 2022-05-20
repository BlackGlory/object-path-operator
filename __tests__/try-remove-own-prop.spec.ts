import { tryRemoveOwnProp } from '@src/remove-prop'

describe('tryRemoveOwnProp', () => {
  describe('empty path', () => {
    it('return false', () => {
      const obj = {
        prop: 'value'
      }

      const result = tryRemoveOwnProp(obj, [])

      expect(result).toBe(false)
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

        const result = tryRemoveOwnProp(obj, ['deep', 'prop'])

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

        const result = tryRemoveOwnProp(obj, ['deep', 'prop'])

        expect(result).toBe(false)
      })
    })
  })

  describe('path does not exist', () => {
    it('return false', () => {
      const obj = {}

      const result = tryRemoveOwnProp(obj, ['prop'])

      expect(result).toBe(false)
    })
  })
})
