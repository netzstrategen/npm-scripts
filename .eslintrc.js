const eslintConfig = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'error',
    'no-else-return': 'error',
    'no-return-assign': 'error',
    'no-template-curly-in-string': 'error',
    'no-extend-native': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-useless-return': 'error',
    'no-undef-init': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'eqeqeq': 'error',
    'yoda': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    'semi': 'error'
  }
};

module.exports = ({ jest = false, cypress = false } = {}) => {
  if (jest) {
    eslintConfig.env.jest = true;
    eslintConfig.extends.push('plugin:jest/recommended');
    eslintConfig.plugins.push('jest');
    eslintConfig.rules = {
      'jest/prefer-called-with': 'error',
      'jest/prefer-strict-equal': 'error',
      'jest/no-test-return-statement': 'error',
      ...eslintConfig.rules,
    }
  }

  if (cypress) {
    eslintConfig.env['cypress/globals'] = true;
    eslintConfig.extends.push('plugin:cypress/recommended');
    eslintConfig.plugins.push('cypress');
  }

  return eslintConfig;
};
