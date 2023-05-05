module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: ['test/'],
  transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(uuid))`],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['_environment', '<rootDir>/dist/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/testSetup.js'],
}
