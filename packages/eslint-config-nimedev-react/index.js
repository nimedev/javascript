module.exports = {
  extends: [
    'eslint-config-nimedev-base',
    './rules/react',
    './rules/react-a11y',
    './rules/strict',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {},
}
