export default {
  roots: [
    "<rootDir>/src"
  ],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  "transform": {
    "^.+\\.tsx?$": "esbuild-runner/jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
};
