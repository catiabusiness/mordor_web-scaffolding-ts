/** @type {import('ts-jest').JestConfigWithTsJest['transform']} */
const transform = {
  '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tests/unit/tsconfig.json' }],
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    /**
     * Server-related tests such as services or middlewares
     */
    {
      displayName: 'Server side files',
      testRegex: 'tests\\/unit\\/.+\\.node\\.spec\\.[cs]?[jt]sx?$',
      testEnvironment: 'node',
      setupFiles: ['shadow-dev/jest/setup'],
      resolver: '@catia-testing/jest/resolver',
      transform,
    },

    /**
     * Common project's components typically written with React
     */
    {
      displayName: 'Client side files',
      testRegex: ['tests\\/unit\\/.+\\.spec\\.[cm]?[jt]sx?$'],
      testPathIgnorePatterns: ['.node.spec.[cm]?[js]sx?'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        '@testing-library/jest-dom',
        'shadow-dev/jest/setup',
      ],
      resolver: '@catia-testing/jest/resolver',
      transform,
    },
  ],
};
