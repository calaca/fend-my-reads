/**
 * Jest configuration to be able to use localStorage and the Fetch API
 * Both only available in the browser but not in Node environments
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
global.fetch = require('jest-fetch-mock');
