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

  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
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
