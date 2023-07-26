import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom', // Use "jsdom" instead of "jest-environment-jsdom"
};

export default createJestConfig(config);