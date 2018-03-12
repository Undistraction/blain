import {
  compose,
  merge,
  flip,
  ifElse,
  has,
  prop,
  concat,
  both,
  reduce,
  without,
  of,
} from 'ramda'
import { list, isString, appendFlipped } from 'ramda-adjunct'
import data from './data'

const withoutFlipped = flip(without)

export default ({ groups, baseGroup }) => {
  const patchedData = merge(data, groups)
  const isValidKey = both(isString, flip(has)(patchedData))

  const appendGroup = acc => compose(concat(acc), flip(prop)(patchedData))

  const removeGroup = acc =>
    compose(withoutFlipped(acc), flip(prop)(patchedData))

  const includeReducer = (acc, value) =>
    ifElse(isValidKey, appendGroup(acc), appendFlipped(acc))(value)

  const excludeReducer = (acc, value) =>
    ifElse(isValidKey, removeGroup(acc), compose(withoutFlipped(acc), of))(
      value
    )

  const resolvedBaseGroup = compose(reduce(includeReducer, []))(baseGroup)

  // ---------------------------------------------------------------------------
  // API
  // ---------------------------------------------------------------------------

  const include = compose(reduce(includeReducer, resolvedBaseGroup), list)
  const exclude = compose(reduce(excludeReducer, resolvedBaseGroup), list)

  return {
    include,
    exclude,
  }
}
