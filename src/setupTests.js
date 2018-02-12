/**
 * Jest configuration to be able to use localStorage and the Fetch API
 * Both only available in the browser but not in Node environments
 */

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
global.fetch = require('jest-fetch-mock');
