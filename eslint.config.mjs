import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },

    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
    }
  },

  js.configs.recommended
];