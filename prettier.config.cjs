module.exports = {
  endOfLine: 'lf',
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@model/(.*)$',
    '^@interfaces/(.*)$',
    '^@infrastructure/(.*)$',
    '^@contexts/(.*)$',
    '^@hooks/(.*)$',
    '^@services/(.*)$',
    '^@libs/(.*)$',
    '^@pages/(.*)$',
    '^@styles/(.*)$',
    '^@animations/(.*)$',
    '^@components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};