'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 110,
  proseWrap: 'always',
  quoteProps: 'consistent',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  importOrder: [
    '^(react|react-dom)$',
    '^next.+$',
    '^@.+$',
    '^[^\\/]+$',
    '^.+\\.(svg|png|jpg|jpeg|webp)$',
    '^.+\\/.+$',
    '^[./]',
    '^[../]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
