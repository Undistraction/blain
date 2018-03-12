![Blain](./docs/blain.jpg 'Logo Title Text 1')

Those functions are looking at you funny.

# Blain: It's payback time!

[![NPM Version](https://img.shields.io/npm/v/blain.svg)](https://www.npmjs.com/package/blain)
[![codecov](https://img.shields.io/codecov/c/github/Undistraction/blain.svg)](https://codecov.io/gh/Undistraction/blain)
[![Build Status](https://img.shields.io/travis/Undistraction/blain.svg)](https://travis-ci.org/Undistraction/blain)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](./LICENSE.md)
[![Greenkeeper badge](https://badges.greenkeeper.io/Undistraction/blain.svg)](https://greenkeeper.io/)
[![Node Security](https://nodesecurity.io/orgs/undistraction/projects/4245a5fc-a1e3-42a0-b4d6-2a5d5df1a3c3/badge)](https://nodesecurity.io/orgs/undistraction/projects/4245a5fc-a1e3-42a0-b4d6-2a5d5df1a3c3)

When testing APIs or functions in general you often need to test how they behave when unsupported values are passed in. It can often be tempting to pick a value you know doesn't work and just test that:

```javascript
const f = s => {
  if (typeof s === `string`) {
    return `Its a String`
  }

  if (Array.isArray(s)) {
    return `Its an Array`
  }

  throw new Error(`Supplied value was invalid`)
}

const value = null
expect(() => f(value)).Throw(`Supplied value was invalid`)
```

However, there are often many other unsupported values, and just because the function behaves as expected when encountering `null` doesn't mean it will do the same when encountering a RexExp object or `NaN`.

Blain makes it easy to get your hands on a wide variety of values to test your functions. It offers a variety of groups out of the box and makes it easy to combine and edit those groups or add your own data.

So using the example above, and assuming the function only supports strings or arrays, we can do:

```javascript
import blain, { keys } from 'blain'

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
```

## Overview

Using blain involves two steps.

1.  Call `blain()`, passing configuration (if required).
2.  Call one of the API methods on the returned object.

## Config

Blain accepts a configuration object with two valid keys:

### baseGroup (Array) defaults to []

`baseGroup` allows you to set up the default data returned from the API. You can then use `exclude()` to remove values from this data that you don't want.

It accepts an array of values. These values can either be arbitrary values, or group keys. Blain provides a large number of groups. Each group contains one or more values. Some groups contain only a single value, for example `keys.NULL`, and some groups contain multiple values, for example `keys.NIL` which combines the groups `keys.NULL`, `keys.UNDEFINED` and `keys.NAN`. There is a `keys.All` which contains all values provided by Blain.

### groups (Object) defaults to {}

`groups` allows you to supply your own groups for use with the API. Values passed to the API methods are checked against existing groups and any groups you have supplied. For this reason it is important that you the keys for your groups are unique to avoid clashing with generic values that might be passed. Blain exposes a curried `toUID` function that you can use to create unique ids (see below). If you provide a group with an ID matching one of blain's own group IDs it will replace that group.

## API

Blain has a very simple API. An object is returned from `blain()` containing two functions:

### include (...args): Array

`include` allows you to add additional values to the `baseGroup` you defined during configuration. Blain will check each value against its map of groups. If the value matches a key, it will add the data from the matching group to the data already defined in `baseGroup`. Any values that don't key to a group will also be included. The returned array will therfore contain:

* Data defined in `baseGroup`
* Data from any groups matched by supplied values
* Any remaining values that didn't match to groups

### exclude (...args): Array

`exclude` allows you to remove values from the `baseGroup` you defined during configuration. Blain will check each value against its map of groups. If the value matches a key, it will remove the data from the matching group from the data already defined in `baseGroup`, if it exists. Any values that don't key to a group will also be removed. The returned array will therfore contain data defined in `baseGroup` with the following removed:

* Data from any groups matched by supplied values
* Any remaining values that didn't match to groups
