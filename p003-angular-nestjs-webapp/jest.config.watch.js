const jestConfig = require('./jest.config');

jestConfig.collectCoverage=false;
jestConfig.reporters= ['default'];

module.exports = jestConfig;