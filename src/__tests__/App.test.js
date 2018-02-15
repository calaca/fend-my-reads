import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import App from '../components/App/App';
import { body, init } from '../__mocks__/MockData';
import Loading from '../components/Loading/Loading';
import MainContent from '../components/MainContent/MainContent';


describe('<App />', () => {
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

  it('displays <Loading /> while data is still loading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('displays <MainContent /> when data finishes loading', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false });
    expect(wrapper.find(MainContent)).toHaveLength(1);
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
