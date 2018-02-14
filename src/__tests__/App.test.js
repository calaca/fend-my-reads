import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Switch } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import App from '../components/App/App';
import { body, init } from '../__mocks__/MockData';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import NotFound from '../components/NotFound/NotFound';
import Search from '../components/Search/Search';
import BookList from '../components/BookList/BookList';

describe('App', () => {
  it('renders without crashing', () => {
    fetch.mockResponse(JSON.stringify(body), { init });
    shallow(<MemoryRouter><App /></MemoryRouter>);
  });
  
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear();
  });

  it('displays Loading while data is still loading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('renders Footer when the page is loaded', () => {
    const wrapper = shallow(<App />).setState({ loading: false });
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  /**
   * FIXME: issues with shallow and full render to test this
   * shallow: Switch throws an error saying that it doesn't have a Router
   * mount: can't update App's state to stop showing the Loading component
   */
  it.skip('renders Search when the correct URL is provided', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']} initialIndex={1}>
        <App />
      </MemoryRouter>
    ).find(App);
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});

/**
 * NOTES:
 * 
 * fetch.mockResponse(body, init) - Mock all fetch calls
 * Source: https://github.com/jefflau/jest-fetch-mock#using-with-create-react-app
 * ===
 * A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.
 * This was necessary because App's Routes needed a wrapping Router.
 * Source: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md#memoryrouter
 * ===
 * Enzyme was used here to test components in isolation from the child components they render.
 * Source: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
 */
