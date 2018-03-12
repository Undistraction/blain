import blainConfig, { keys, data } from '../index'

describe(`blain`, () => {
  describe(`api`, () => {
    // -------------------------------------------------------------------------
    // Include
    // -------------------------------------------------------------------------

    describe(`include()`, () => {
      describe(`with no config obj`, () => {
        it(`returns the supplied values`, () => {
          const blain = blainConfig()
          const result = blain.include(keys.STRINGS)
          expect(result).toEqual(data[keys.STRINGS])
        })
      })

      describe(`with empty config obj`, () => {
        it(`returns the supplied values`, () => {
          const blain = blainConfig({})
          const result = blain.include(keys.STRINGS)
          expect(result).toEqual(data[keys.STRINGS])
        })
      })

      describe(`with no args`, () => {
        it(`returns an empty array`, () => {
          const blain = blainConfig()
          const result = blain.include()
          expect(result).toEqual([])
        })
      })

      describe(`with groups`, () => {
        it(`returns the overriden values`, () => {
          const value1 = `value1`
          const blain = blainConfig({
            groups: {
              [keys.STRINGS]: [value1],
            },
          })
          const result = blain.include(keys.STRINGS)
          expect(result).toEqual([value1])
        })

        describe(`with additional values`, () => {
          it(`returns the expected values`, () => {
            const key1 = `key1`
            const value1 = `value1`
            const blain = blainConfig({
              groups: {
                [key1]: [value1],
              },
            })
            const result = blain.include(keys.STRINGS, key1)
            expect(result).toEqual([...data[keys.STRINGS], value1])
          })
        })
      })

      describe(`with baseGroup`, () => {
        describe(`with no args`, () => {
          it(`returns the expected values`, () => {
            const blain = blainConfig({
              baseGroup: [keys.STRINGS],
            })
            const result = blain.include()
            expect(result).toEqual(data[keys.STRINGS])
          })
        })

        describe(`with args`, () => {
          it(`returns the expected values`, () => {
            const blain = blainConfig({
              baseGroup: [keys.STRINGS],
            })
            const result = blain.include(keys.BOOLEANS)
            expect(result).toEqual([
              ...data[keys.STRINGS],
              ...data[keys.BOOLEANS],
            ])
          })
        })

        describe(`with groups`, () => {
          it(`includes groups in the basegroup`, () => {
            const key1 = `key1`
            const value1 = `value1`

            const blain = blainConfig({
              baseGroup: [keys.STRINGS, key1],
              groups: {
                [key1]: [value1],
              },
            })
            const result = blain.include()
            expect(result).toEqual([...data[keys.STRINGS], value1])
          })
        })
      })

      describe(`with a single key`, () => {
        it(`returns the expected values`, () => {
          const blain = blainConfig()
          const result = blain.include(keys.STRINGS)
          expect(result).toEqual(data[keys.STRINGS])
        })
      })

      describe(`with multiple keys`, () => {
        it(`returns the expected values`, () => {
          const blain = blainConfig()
          const result = blain.include(keys.STRINGS, keys.BOOLEANS, keys.ARRAYS)
          expect(result).toEqual([
            ...data[keys.STRINGS],
            ...data[keys.BOOLEANS],
            ...data[keys.ARRAYS],
          ])
        })
      })

      describe(`with custom values`, () => {
        it(`returns the expected values`, () => {
          const blain = blainConfig()
          const value1 = `value1`
          const value2 = `value2`
          const result = blain.include(keys.STRINGS, value1, value2)
          expect(result).toEqual([...data[keys.STRINGS], value1, value2])
        })
      })
    })

    // -------------------------------------------------------------------------
    // Exclude
    // -------------------------------------------------------------------------

    describe(`exclude()`, () => {
      describe(`with no config obj`, () => {
        it(`returns an empty array`, () => {
          const blain = blainConfig()
          const result = blain.exclude(keys.STRINGS)
          expect(result).toEqual([])
        })
      })

      describe(`with empty config obj`, () => {
        it(`returns an empty array`, () => {
          const blain = blainConfig({})
          const result = blain.exclude(keys.STRINGS)
          expect(result).toEqual([])
        })
      })

      describe(`with no args`, () => {
        it(`returns an empty array`, () => {
          const blain = blainConfig()
          const result = blain.exclude()
          expect(result).toEqual([])
        })
      })

      describe(`with groups`, () => {
        it(`removes the overriden values`, () => {
          const value1 = `value1`
          const blain = blainConfig({
            groups: {
              [keys.STRINGS]: [value1],
            },
          })
          const result = blain.exclude(keys.STRINGS)
          expect(result).toEqual([])
        })
      })

      describe(`with baseGroup`, () => {
        describe(`with no args`, () => {
          it(`returns the entire base group`, () => {
            const blain = blainConfig({
              baseGroup: [keys.STRINGS],
            })
            const result = blain.exclude()
            expect(result).toEqual(data[keys.STRINGS])
          })
        })

        describe(`with args`, () => {
          describe(`with a group key`, () => {
            it(`excludes a group`, () => {
              const blain = blainConfig({
                baseGroup: [keys.STRINGS, keys.BOOLEANS],
              })
              const result = blain.exclude(keys.STRINGS)
              expect(result).toEqual([...data[keys.BOOLEANS]])
            })
          })

          describe(`with a value that isn't present in the baseGroup`, () => {
            it(`returns the entire base group`, () => {
              const blain = blainConfig({
                baseGroup: [keys.STRINGS, keys.BOOLEANS],
              })
              const result = blain.exclude(`c`)
              expect(result).toEqual([
                ...data[keys.STRINGS],
                ...data[keys.BOOLEANS],
              ])
            })
          })

          describe(`with values that are present in the baseGroup`, () => {
            it(`returns the entire base group`, () => {
              const blain = blainConfig({
                baseGroup: [keys.STRINGS, keys.BOOLEANS],
              })
              const result = blain.exclude(``, false)
              expect(result).toEqual([`a`, true])
            })
          })
        })
      })
    })
  })
})
