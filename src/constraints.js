import { validateIsPlainObject, validateIsArray } from 'folktale-validations'
import { CONFIG_FIELD_NAMES } from './const'

export const CONFIG = {
  fields: [
    {
      name: CONFIG_FIELD_NAMES.BASE_GROUP,
      defaultValue: [],
      validator: validateIsArray,
    },
    {
      name: CONFIG_FIELD_NAMES.GROUPS,
      defaultValue: {},
      validator: validateIsPlainObject,
    },
  ],
}

export const BLAIN_ARGS = {
  fields: [
    {
      name: `config`,
      validator: validateIsPlainObject,
      value: CONFIG,
      defaultValue: {},
    },
  ],
}
