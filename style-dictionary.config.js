module.exports = ({
  source = ["tmp/tokens.json"],
  dest = "src/assets/tokens",
  customPlatforms = {},
  transformJS = true,
  transformCSS = true,
  transformChakraUI = false,
  transformTailwind = false,
} = {}) => {
  const platforms = {};
  const platformsJSFiles = [];
  const platformsCSSFiles = [];
  let format = {};

  if (transformJS) {
    platformsJSFiles.push({
      destination: `${dest}/variables.js`,
      format: "javascript/es6",
      options: {
        outputReferences: true,
      },
    });
  }

  if (transformChakraUI) {
    const path = require("path");
    require(path.resolve(__dirname, "./etc/style-dictionary/formatters"));

    platformsJSFiles.push({
      destination: `${dest}/semantic-tokens.js`,
      format: "chakra/semantic-tokens",
    });
  }

  if (transformTailwind) {
    const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");
    const sdConfig = makeSdTailwindConfig({
      type: "all",
      isVariables: transformCSS,
    });

    format = { ...format, ...sdConfig.format };
    platforms["tailwind"] = {
      ...sdConfig.platforms.tailwind,
      buildPath: dest.replace(/\/?$/, "/"),
    };
  }

  if (transformCSS) {
    platformsCSSFiles.push({
      destination: `${dest}/variables.css`,
      format: "css/variables",
      selector: ":root",
    });
  }

  if (platformsJSFiles.length > 0) {
    platforms["js"] = {
      transformGroup: "js",
      files: platformsJSFiles,
    };
  }

  if (platformsCSSFiles.length > 0) {
    platforms["css"] = {
      transformGroup: "css",
      files: platformsCSSFiles,
    };
  }

  Object.keys(customPlatforms).forEach(key => {
    if (platforms[key]) {
      platforms[key]["files"] = [...platforms[key]["files"], ...customPlatforms[key]["files"]];
    } else {
      platforms[key] = customPlatforms[key];
    }
  });

  return ({
    source,
    format,
    platforms,
  });
};

