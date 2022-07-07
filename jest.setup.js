require('@testing-library/jest-dom/extend-expect')
const defineMatchMediaMock = require('./__mocks__/matchMediaMock');

defineMatchMediaMock();

// beforeEach hook is needed to overcome `resetMocks: true` limitation
beforeEach(() => {
  defineMatchMediaMock();
});
