const path = require('path');
require(path.resolve(__dirname, './etc/style-dictionary/formatters'));

module.exports = ({
  source = ['tmp/tokens.json'],
  dest = 'src/assets/tokens',
  platforms = {}
} = {}) => ({
  source,
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
