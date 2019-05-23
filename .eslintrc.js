// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: ['vue', 'prettier'],
  env: {
    node: true,
    es6: true,
    browser: true
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 3
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        insertPragma: true,
        requirePragma: false
      }
    ]
  }
}