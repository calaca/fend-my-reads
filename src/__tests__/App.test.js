import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App/App';
import { body, init } from '../__mocks__/MockData';

it('renders without crashing', () => {
  /**
   * fetch.mockResponse(body, init) - Mock all fetch calls
   * Source: https://github.com/jefflau/jest-fetch-mock#using-with-create-react-app
   */
  fetch.mockResponse(JSON.stringify(body), { init });
  const div = document.createElement('div');
  ReactDOM.render(
    /**
     * A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.
     * This was necessary because App's Routes needed a wrapping Router.
     * Source: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md#memoryrouter
     */
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
});
