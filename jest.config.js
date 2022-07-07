module.exports = {
  verbose: false,
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/cypress',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.turbo/',
    '<rootDir>/.storybook/',
  ],
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|less)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|less)$": "@netzstrategen/npm-scripts/__mocks__/styleMock.ts",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `@netzstrategen/npm-scripts/__mocks__/fileMock.ts`,
  },
  moduleDirectories: ['<rootDir>node_modules', '<rootDir>/src', '<rootDir>/test'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  resetMocks: true,
  clearMocks: true,
  coverageDirectory: '.coverage',
};
