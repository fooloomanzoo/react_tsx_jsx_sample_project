module.exports = {
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'react': {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          { allowExpressions: true }
        ]
      }
    },
    {
      files: ['config/*', 'storybook/config/*'],
      plugins: ['node'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'object-shorthand': 'warn',
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      },
      env: {
        node: true
      }
    }
  ]
};
