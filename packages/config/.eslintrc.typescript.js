/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
};
