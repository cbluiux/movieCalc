module.export = {
  env: {
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  // parserOptions: {
  //   ecmaVersion: 12,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  rules: {
    'prettier/prettier': 'error',
  },
}
