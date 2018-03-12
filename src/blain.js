import { compose, objOf } from 'ramda'
import { matchWithSuccessOrFailure } from 'folktale-validations'
import api from './api'
import { propValue, propConfig, pickIsNotUndefined } from './utils'
import { throwConfigureError } from './errors'
import validateConfig from './validations/validators/validateConfig'

export default config =>
  compose(
    matchWithSuccessOrFailure(
      compose(api, propConfig, propValue),
      compose(throwConfigureError, propValue)
    ),
    validateConfig,
    pickIsNotUndefined,
    objOf(`config`)
  )(config)
