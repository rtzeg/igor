//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import prettierConfig from 'eslint-config-prettier'

export default [
  ...tanstackConfig,
  prettierConfig,
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      'vite.config.ts',
      '*.config.js',
      '*.config.ts',
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.gen.ts',
    ],
  },
  {
    rules: {
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'no-shadow': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
    },
  },
]
