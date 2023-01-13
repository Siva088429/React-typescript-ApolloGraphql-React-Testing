module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['../../setupTests.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts',
    "@testing-library/jest-dom/extend-expect"],
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

} 