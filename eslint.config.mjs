import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '**/*.cjs'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended'
    )
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      prettier: fixupPluginRules(prettier),
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'no-console': 'error',
      'import/no-anonymous-default-export': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
