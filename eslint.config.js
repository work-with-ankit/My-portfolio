import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]


module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards', // Create custom animation for sliding
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)', // Start off-screen to the left
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)', // End at the normal position
            opacity: '1',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

