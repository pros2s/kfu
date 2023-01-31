module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
    {
      files: ['webpack.dev.js', 'webpack.prod.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['webpack.dev.js', 'webpack.prod.js'],
          },
        ],
      },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
    },
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'pross-plugin'],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__IS_DEV__', '__API__', '_inited'],
      },
    ],
    'no-else-return': 2,
    'no-lonely-if': 2,
    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // react
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // pross
    'pross-plugin/path-watcher': ['error', { alias: '@' }],
    'pross-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
      },
    ],
    'pross-plugin/fsd-layer-imports': [
      'error',
      {
        alias: '@',
        ignoreFilesPatterns: ['**/StoreProvider/**'],
      },
    ],
    // off
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
};