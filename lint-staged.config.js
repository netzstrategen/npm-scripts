module.exports = {
  '*.{css,scss,less}': ['stylelint --fix'],
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint',
    'npm run test -- --findRelatedTests',
  ],
  '*.json': ['prettier --write'],
}
