module.exports = {
     testEnvironment: 'jsdom',
       // ... other options ...
       "setupFilesAfterEnv": [
        "<rootDir>/setupTests.ts"
      ],
      moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node']
    }