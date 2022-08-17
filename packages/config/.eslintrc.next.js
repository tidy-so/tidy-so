/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
};
