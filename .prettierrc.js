module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['*.css', '*.scss', '*.less', '*.yaml', '*.yml', '*.json', '*.md', '*.mdx'],
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
  ],
};
