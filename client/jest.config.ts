module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts",
        "<rootDir>/src/jest.setup.ts",
        "@testing-library/jest-dom/extend-expect"],
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['../../setupTests.ts'],
    // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

} 