import {
  curry,
  compose,
  concat,
  reduce,
  join,
  flip,
  append,
  prop,
  pickBy,
} from 'ramda'
import { isNotUndefined } from 'ramda-adjunct'

export const concatAll = reduce(concat, [])

export const toUID = curry((prefix, name) =>
  compose(join(`.`), flip(append)([prefix]))(name)
)
export const toBlainUID = toUID(`Blain`)

export const propConfig = prop(`config`)

export const propValue = prop(`value`)

export const pickIsNotUndefined = pickBy(isNotUndefined)

export const joinWithSpace = join(` `)
