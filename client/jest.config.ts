module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['../../setupTests.ts'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

} 