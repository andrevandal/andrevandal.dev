module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: [
    'stylelint-config-standard',
    'stylelint-selector-bem-pattern',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['screen'],
      },
    ],
  },
}
