import { compose, construct } from 'ramda'
import { defaultRenderers } from 'folktale-validations'
import { appendFlipped } from 'ramda-adjunct'
import { joinWithSpace } from './utils'
import {
  ERROR_PREFIX,
  CONFIGURE_PREFIX,
  API_INCLUDE_PREFIX,
  API_EXCLUDE_PREFIX,
} from './const'

const { argumentsFailureRenderer } = defaultRenderers

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

const constructError = construct(Error)

const throwError = error => {
  throw error
}

const throwNewError = compose(throwError, constructError)

const throwErrorWithMessage = compose(
  throwNewError,
  joinWithSpace,
  appendFlipped([ERROR_PREFIX])
)

const throwErrorWithPrefixedMessage = prefix =>
  compose(throwErrorWithMessage, joinWithSpace, appendFlipped([prefix]))

// -----------------------------------------------------------------------------
// Prefixed Errors
// -----------------------------------------------------------------------------

export const throwConfigureError = e => {
  const r = compose(
    throwErrorWithPrefixedMessage(CONFIGURE_PREFIX),
    argumentsFailureRenderer
  )(e)

  return r
}
export const throwAPIIncludeError = compose(
  throwErrorWithPrefixedMessage(API_INCLUDE_PREFIX),
  argumentsFailureRenderer
)
export const throwAPIExcludeError = compose(
  throwErrorWithPrefixedMessage(API_EXCLUDE_PREFIX),
  argumentsFailureRenderer
)
