# eslint-config-nimedev-base
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-nimedev-base.svg
[npm-url]: https://npmjs.org/package/eslint-config-nimedev-base

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) based on [Airbnb's JavaScript Style Guide](https://github.com/nimedev/javascript).

## Installation

It requires `eslint` and `eslint-plugin-import`

```sh
$ npm install eslint-config-nimedev-base eslint eslint-plugin-import
```

## Usage

Set your eslint config to:

```json
{
  "extends": "nimedev-base"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `no-console` rule:


```json
{
  "extends": "nimedev-base",
  "rules": {
    "indentation": "tab",
    "no-console": 0
  }
}
```