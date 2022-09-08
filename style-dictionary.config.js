require('./etc/style-dictionary/formatters');

module.exports = ({ dest = 'src/assets/tokens', platforms = {} }) => ({
  source: ['tmp/tokens.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      files: [
        {
          destination: `${dest}/variables.js`,
          format: 'javascript/es6',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: `${dest}/semantic-tokens.js`,
          format: 'chakra/semantic-tokens',
        },
      ],
    },
    ...platforms,
  },
});
