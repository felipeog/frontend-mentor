/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css)$': 'jest-css-modules-transform',
    '.+\\.(svg)$': 'svg-jest',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/.+\\.(css)$',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
