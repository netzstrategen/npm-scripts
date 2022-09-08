const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'chakra/semantic-tokens',
  formatter: function({dictionary}) {
    const dct = {};

    dictionary.allTokens.forEach((item) => {
      const { name, value, path } = item;
      if(path && path.length > 1) {
        const regEx = new RegExp(path[0], 'ig');
        dct[path[0]] = {
          ...dct[path[0]],
          [name.replace(regEx, '')]: value
        }
      } else {
        dct[name] = value
      }
    });

    return `export default ${JSON.stringify(dct)};`;
  }
});
