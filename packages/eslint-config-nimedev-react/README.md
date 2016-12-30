# eslint-config-nimedev-react
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-nimedev-react.svg
[npm-url]: https://npmjs.org/package/eslint-config-nimedev-react

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [React](https://facebook.github.io/react/) applications.

## Installation

It requires `babel-eslint`, `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

```sh
$ npm install eslint-config-nimedev-react babel-eslint eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

## Usage

Set your eslint config to:

```json
{
  "extends": "nimedev-react"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `no-console` rule:


```json
{
  "extends": "nimedev-react",
  "rules": {
    "indentation": "tab",
    "no-console": 0
  }
}
```
