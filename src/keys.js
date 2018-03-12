import { toBlainUID } from './utils'

// -----------------------------------------------------------------------------
// Nil
// -----------------------------------------------------------------------------

const UNDEFINED = toBlainUID(`undefined`)
const NULL = toBlainUID(`null`)
const NAN = toBlainUID(`nan`)
const NIL = toBlainUID(`nil`)

// -----------------------------------------------------------------------------
// BOOLEAN
// -----------------------------------------------------------------------------

const BOOLEANS = toBlainUID(`boolean`)

// -----------------------------------------------------------------------------
// STRING
// -----------------------------------------------------------------------------

const STRINGS = toBlainUID(`string`)
const EMPTY_STRINGS = toBlainUID(`emptyString`)
const NON_EMPTY_STRINGS = toBlainUID(`nonEmptyString`)

// -----------------------------------------------------------------------------
// NUMBER
// -----------------------------------------------------------------------------

const POSITIVE_NUMERIC_CONSTS = toBlainUID(`positiveNumericConsts`)
const NEGATIVE_NUMERIC_CONSTS = toBlainUID(`negativeNumericConsts`)
const NUMERIC_CONSTS = toBlainUID(`numericConsts`)
const POSITIVE_NUMBERS = toBlainUID(`positiveNumbers`)
const NEGATIVE_NUMBERS = toBlainUID(`negativeNumbers`)
const NON_NEGATIVE_NUMBERS = toBlainUID(`nonNegativeNumbers`)
const NON_POSITIVE_NUMBERS = toBlainUID(`nonPositiveNumbers`)
const NUMBERS = toBlainUID(`numbers`)
const VALID_NUMBERS = toBlainUID(`validNumeric`)

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------

const FUNCTIONS = toBlainUID(`function`)

// -----------------------------------------------------------------------------
// Date
// -----------------------------------------------------------------------------

const VALID_DATES = toBlainUID(`validDate`)
const INVALID_DATES = toBlainUID(`invalidDate`)
const DATES = toBlainUID(`date`)

// -----------------------------------------------------------------------------
// RegExp
// -----------------------------------------------------------------------------

const REGEXPS = toBlainUID(`regExp`)

// -----------------------------------------------------------------------------
// Array
// -----------------------------------------------------------------------------

const ARRAYS = toBlainUID(`array`)
const EMPTY_ARRAYS = toBlainUID(`emptyArray`)

// -----------------------------------------------------------------------------
// Object
// -----------------------------------------------------------------------------

const PLAIN_OBJECTS = toBlainUID(`plainObject`)
const NON_EMPTY_PLAIN_OBJECTS = toBlainUID(`nonEmptyPlainObj`)
const EMPTY_PLAIN_OBJECTS = toBlainUID(`emptyPlainObj`)
const OBJECTS = toBlainUID(`object`)

// -----------------------------------------------------------------------------
// Empty
// -----------------------------------------------------------------------------

const NON_EMPTY_ARRAYS = toBlainUID(`nonEmptyArray`)
const EMPTY = toBlainUID(`empty`)

// -----------------------------------------------------------------------------
// All
// -----------------------------------------------------------------------------

const ALL = toBlainUID(`all`)

export default Object.freeze({
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
})
