module.exports = {
  babel: require('./babel.config'),
  eslint: require('./.eslintrc'),
  prettier: require('./.prettierrc'),
  stylelint: require('./stylelint.config'),
  jest: require('./jest.config'),
  lintStaged: require('./lint-staged.config'),
  postcss: require('./postcss.config'),
  tailwind: require('./tailwind.config'),
  tsconfig: require('./tsconfig.json'),
};
