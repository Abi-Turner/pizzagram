// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias for src folder
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.js", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Setup file for Jest
  transformIgnorePatterns: ["/node_modules/"], // Ignore transformation for node_modules
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
