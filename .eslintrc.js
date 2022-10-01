module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'sort-imports': 'warn',
    'react/prop-types': 'off'
  },
}
