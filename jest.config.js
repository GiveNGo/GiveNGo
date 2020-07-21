const { defaults: tsJestConfig } = require("ts-jest/presets");

module.exports = {
  ...tsJestConfig,
  preset: "jest-expo",
  // setupFiles: ["<rootDir>/__tests__/setup/test-setup.js"],
  // setupFilesAfterEnv: ["./__tests__/setup/windowMock.js"],
  transform: {
    ...tsJestConfig.transform,
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  globals: {
    "ts-jest": {
      babelConfig: false,
      tsConfig: "./tsconfig.jest.json",
    },
  },
  modulePaths: ["<rootDir>"],
};
