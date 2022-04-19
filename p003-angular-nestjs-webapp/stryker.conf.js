/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: [
    "src/**/*.ts",
    "server-src/**/*.ts",
    "!**/*.spec.ts",
    "!src/environments/*.ts"
  ],
  testRunner: "jest",
  jest: {
    configFile: "jest.config.js",
    enableFindRelatedTests: false,
    projectType: "custom"
  },
  reporters: ["progress", "clear-text", "html"],
  disableTypeChecks: '{server-src,src}/**/*.ts',
  htmlReporter: {
    baseDir: 'reports/coverage/mutation'
  },
  concurrency: 4,
  coverageAnalysis: "off",
  timeoutMS: 12000
};
