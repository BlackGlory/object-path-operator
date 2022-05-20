import { setOwnProp } from '@src/set-prop'
import { getError } from 'return-style'

describe('setOwnProp', () => {
  describe('empty path', () => {
    it('throws Error', () => {
      const obj = {
        prop: 'value'
      }

      const err = getError(() => setOwnProp(obj, [], 'value'))

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

        const result = setOwnProp(obj, ['deep', 'prop'], 'new-value')

        expect(result).toBe(true)
        expect(obj).toStrictEqual({
          deep: {
            prop: 'new-value'
          }
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

        const err = getError(() => setOwnProp(obj, ['deep', 'prop'], 'new-value'))

        expect(err).toBeInstanceOf(Error)
        expect(err!.message).toBe('The path .deep does not exist')
      })
    })
  })
  
  describe('path does not exist', () => {
    describe('shallow path', () => {
      it('set the property', () => {
        const obj = {}

        const result = setOwnProp(obj, ['prop'], 'new-value')

        expect(result).toBe(true)
        expect(obj).toStrictEqual({
          prop: 'new-value'
        })
      })
    })

    describe('deep path', () => {
      it('throws Error', () => {
        const obj = {}

        const err = getError(() => setOwnProp(obj, ['deep', 'prop'], 'new-value'))

        expect(err).toBeInstanceOf(Error)
      })
    })
  })
})
