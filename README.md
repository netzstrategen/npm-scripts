# `npm-scripts`

This package contains basic `npm` scripts configs.

## Usage

```bash
pnpm i -D @makers99/npm-scripts

# or with NPM
npm i --save-dev @makers99/npm-scripts
# or with Yarn
pnpm i -D @makers99/npm-scripts
```

You will need to install all the required dependencies for each configuration. If you are intended to use all configurations, you can run the following code. Otherwise, we recommend you installing only those required for each configuration:

```bash
pnpm i -D @babel/preset-env @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer babel-jest cssnano eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier eslint-plugin-testing-library husky jest jest-transform-stub jest-watch-typeahead identity-obj-proxy lint-staged postcss postcss-at-rules-variables postcss-functions postcss-import postcss-mixins postcss-nested postcss-simple-vars postcss-sort-media-queries postcss-space prettier stylelint stylelint-config-prettier stylelint-prettier typescript
```

...and then import/extend each config file with the ones from this library:

## Babel

```js
// babel.config.js

const babelConfig = require('@makers99/npm-scripts').babel;

module.exports = babelConfig;
```

**Required dependencies:**

```bash
pnpm i -D @babel/preset-env
```

## ESLint

Eslint configuration is different because is a function where you are able to remove the configuration for `jest` and `cypress`, as they are `true` by default.

To remove this configuration you need to pass an object:

```js
const eslintConfig = require('@makers99/npm-scripts').eslint({ jest: false, cypress: false });
```

```js
// ESLint + Cypress + Jest configurations
// .eslintrc.js

const eslintConfig = require('@makers99/npm-scripts').eslint();

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
# With Jest and Cypress
pnpm i -D @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier eslint-plugin-testing-library jest jest-transform-stub jest-watch-typeahead prettier typescript ts-loader identity-obj-proxy

# Without Jest and Cypress
pnpm i -D @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier eslint-plugin-testing-library prettier typescript ts-loader
```

## Prettier

```js
// prettier.config.js

const prettierConfig = require('@makers99/npm-scripts').prettier;

module.exports = prettierConfig;
```

**Required dependencies:**

```bash
pnpm i -D prettier
```

## Stylelint

```js
// stylelint.config.js

const stylelintConfig = require('@makers99/npm-scripts').stylelint;

module.exports = stylelintConfig;
```

**Required dependencies:**

```bash
pnpm i -D stylelint stylelint-config-prettier stylelint-prettier prettier
```

## PostCSS

```js
// postcss.config.js

const postcssConfig = require('@makers99/npm-scripts').postcss;

module.exports = postcssConfig;
```

**Required dependencies:**

```bash
pnpm i -D autoprefixer cssnano postcss postcss-at-rules-variables postcss-functions postcss-import postcss-mixins postcss-nested postcss-simple-vars postcss-sort-media-queries postcss-space
```

## Tailwind

🟠 **Important:** This configuration requires the use of [PostCSS](#postcss)

```js
// tailwind.config.js

const tailwindConfig = require('@makers99/npm-scripts').tailwind;

module.exports = tailwindConfig;
```

**Required dependencies:**

```bash
pnpm i -D tailwindcss
```

## Lint Staged

```js
// lint-staged.config.js

const lintStagedConfig = require('@makers99/npm-scripts').lintStaged;

module.exports = lintStagedConfig;
```

```json
// package.json

{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

**Required dependencies:**

```bash
pnpm i -D husky lint-staged
```

## FAQ

### How can I extend some config locally?

First of all, ask yourself: Does this rule really need to be local to your
project? Or should I create a PR to this repo, so that it becomes available to
everyone?

If the answer is "yes, it needs to be local to my project", then you can extend
any config by overriding or merging the exported object with your custom config:

```js
const eslintConfig = require('@makers99/npm-scripts').eslint

// Merging
module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'your-game': 'your-rules'
  }
}

// Overriding
module.exports = {
  ...eslintConfig,
  rules: {
    'your-game': 'your-rules'
  }
}
```

### How to configure autoformatting on Visual Studio Code

Open your `settings.json` file in your IDE, and add the following config for autoformatting on save for `.js`, `.ts`, `.css` and `.scss` files.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
