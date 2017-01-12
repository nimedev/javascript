module.exports = {
  extends: [
    'eslint-config-nimedev-base',
    './rules/react',
    './rules/react-a11y',
    './rules/strict'
  ].map(require.resolve),
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  rules: {
    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    // Added by nimedev to restrict use of for of in browsers
    'no-restricted-syntax': [
      'error',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement'
    ]
  }
}
