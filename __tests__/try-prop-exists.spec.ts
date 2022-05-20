import { tryPropExists } from '@src/try-prop-exists'

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

  describe('path does not exist', () => {
    it('returns false', () => {
      const obj = {}

      const result = tryPropExists(obj, ['deep', 'prop'])

      expect(result).toBe(false)
    })
  })
})
