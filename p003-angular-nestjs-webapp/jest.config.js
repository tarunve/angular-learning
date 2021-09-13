module.exports = {
    name: 'angular-nestjs-webapp',
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$'
        }
    },
    roots: ['src', 'server-src'],
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    resolver: '@nrwl/jest/plugins/resolver',
    moduleFileExtensions: ['ts', 'js', 'html'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.ts'],
    coverageDirectory: 'reports/coverage/unit',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'reports/tests',
                outputName: 'unit-test-evidence.xml'
            }
        ],
        [
            'jest-html-reporter',
            {
                outputPath: 'reports/cucumber/requirements-evidence.html'
            }
        ]
    ]
}