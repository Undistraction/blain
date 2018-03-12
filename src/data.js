import { concat } from 'ramda'
import keys from './keys'

const {
  EMPTY_ARRAYS,
  OBJECTS,
  ARRAYS,
  PLAIN_OBJECTS,
  FUNCTIONS,
  REGEXPS,
  STRINGS,
  NUMBERS,
  BOOLEANS,
  DATES,
  EMPTY,
  EMPTY_STRINGS,
  NON_EMPTY_ARRAYS,
  NON_EMPTY_PLAIN_OBJECTS,
  EMPTY_PLAIN_OBJECTS,
  NON_EMPTY_STRINGS,
  VALID_NUMBERS,
  VALID_DATES,
  INVALID_DATES,
  NAN,
  UNDEFINED,
  NULL,
  NIL,
  POSITIVE_NUMBERS,
  NEGATIVE_NUMBERS,
  NON_NEGATIVE_NUMBERS,
  NON_POSITIVE_NUMBERS,
  ALL,
  POSITIVE_NUMERIC_CONSTS,
  NEGATIVE_NUMERIC_CONSTS,
  NUMERIC_CONSTS,
} = keys

// -----------------------------------------------------------------------------
// Nil
// -----------------------------------------------------------------------------

const nulls = [null]
const undefineds = [undefined]
const nans = [NaN]
const nils = [...nulls, ...undefineds, ...nans]

// -----------------------------------------------------------------------------
// Boolean
// -----------------------------------------------------------------------------

const booleans = [true, false]

// -----------------------------------------------------------------------------
// String
// -----------------------------------------------------------------------------

const emptyStrings = [``]
const nonEmptyStrings = [`a`]
const strings = [...emptyStrings, ...nonEmptyStrings]

// -----------------------------------------------------------------------------
// Number
// -----------------------------------------------------------------------------

const positiveIntegers = [1, 1000]
const negativeIntegers = [-1, -100]
const positiveFloats = [0.1, 100.1]
const negativeFloats = [-0.1, -100.1]
const positiveNumericConsts = [
  Number.EPSILON,
  Number.MAX_SAFE_INTEGER,
  Number.MIN_VALUE,
  Number.MAX_VALUE,
  Number.POSITIVE_INFINITY,
]
const negativeNumericConsts = [Number.NEGATIVE_INFINITY]
const numericConsts = [Number.NEGATIVE_INFINITY, Number.INFINITY, ...nans]
const validNumerics = [0, 1, -1]
const validPositiveNumbers = [
  ...positiveFloats,
  ...positiveIntegers,
  Number.Infinity,
]
const validNegativeNumbers = [
  ...negativeFloats,
  ...negativeIntegers,
  Number.Infinity,
]
const positiveNumbers = [...validPositiveNumbers, Number.Infinity]
const negativeNumbers = [...validNegativeNumbers, Number.Infinity]
const nonNegativeNumbers = [0, ...positiveNumbers]
const nonPositiveNumbers = [0, ...negativeNumbers]
const numbers = [...positiveNumbers, ...negativeNumbers]

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------

const functions = [function() {}]

// -----------------------------------------------------------------------------
// Date
// -----------------------------------------------------------------------------

const validDates = [new Date()]
const invalidDates = [new Date(`x`)]
const dates = [...validDates, ...invalidDates]

// -----------------------------------------------------------------------------
// RegExp
// -----------------------------------------------------------------------------

const regExps = [/a/]

// -----------------------------------------------------------------------------
// Array
// -----------------------------------------------------------------------------

const emptyArrays = [[]]
const nonEmptyArrays = [[1, 2, 3]]
const arrays = [...emptyArrays, ...nonEmptyArrays]

// -----------------------------------------------------------------------------
// Object
// -----------------------------------------------------------------------------

const emptyPlainObjects = [{}]
const nonEmptyPlainObjects = [{ a: 1, b: 2, c: 3 }]
const plainObjects = [...emptyPlainObjects, ...nonEmptyPlainObjects]

const objects = concat(plainObjects, regExps, arrays, dates, functions)

// -----------------------------------------------------------------------------
// Empty
// -----------------------------------------------------------------------------

const emptys = [...emptyArrays, ...emptyPlainObjects, ...emptyStrings]

// -----------------------------------------------------------------------------
// All
// -----------------------------------------------------------------------------

const all = [
  ...arrays,
  ...plainObjects,
  ...functions,
  ...regExps,
  ...strings,
  ...validNumerics,
  ...numbers,
  ...booleans,
  ...dates,
  ...nulls,
  ...undefineds,
]

export default Object.freeze({
  [EMPTY_ARRAYS]: emptyArrays,
  [OBJECTS]: objects,
  [ARRAYS]: arrays,
  [PLAIN_OBJECTS]: plainObjects,
  [FUNCTIONS]: functions,
  [REGEXPS]: regExps,
  [STRINGS]: strings,
  [NUMBERS]: numbers,
  [BOOLEANS]: booleans,
  [DATES]: dates,
  [EMPTY]: emptys,
  [EMPTY_STRINGS]: emptyStrings,
  [NON_EMPTY_ARRAYS]: nonEmptyArrays,
  [EMPTY_PLAIN_OBJECTS]: emptyPlainObjects,
  [NON_EMPTY_PLAIN_OBJECTS]: nonEmptyPlainObjects,
  [NON_EMPTY_STRINGS]: nonEmptyStrings,
  [VALID_NUMBERS]: validNumerics,
  [VALID_DATES]: validDates,
  [INVALID_DATES]: invalidDates,
  [NAN]: nans,
  [UNDEFINED]: undefineds,
  [NULL]: nulls,
  [NIL]: nils,
  [POSITIVE_NUMBERS]: positiveNumbers,
  [NEGATIVE_NUMBERS]: negativeNumbers,
  [NON_NEGATIVE_NUMBERS]: nonNegativeNumbers,
  [NON_POSITIVE_NUMBERS]: nonPositiveNumbers,
  [POSITIVE_NUMERIC_CONSTS]: positiveNumericConsts,
  [NEGATIVE_NUMERIC_CONSTS]: negativeNumericConsts,
  [NUMERIC_CONSTS]: numericConsts,
  [ALL]: all,
})
