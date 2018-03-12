import blain, { keys } from '../index'

describe(`README`, () => {
  describe(`Example 1`, () => {
    it(`behaves as expected`, () => {
      const f = s => {
        if (typeof s === `string`) {
          return `Its a String`
        }

        if (Array.isArray(s)) {
          return `Its an Array`
        }

        throw new Error(`Supplied value was invalid`)
      }

      const values = blain({ baseGroup: [keys.ALL] }).exclude(
        keys.STRINGS,
        keys.ARRAYS
      )

      for (const value of values) {
        expect(() => f(value)).toThrow(`Supplied value was invalid`)
      }
    })
  })
})
