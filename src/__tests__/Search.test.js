import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Search from '../components/Search/Search';
import { body } from '../__mocks__/MockData';

describe('<Search />', () => {
  let wrapper, handleChange, starClick;

  beforeEach(() => {
    handleChange = jest.fn();
    starClick = jest.fn();
    wrapper = shallow(<Search data={body} onHandleChange={handleChange} onStarClick={starClick} />);
  });

  afterEach(() => {
    handleChange.mockClear();
    starClick.mockClear();
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates `state.query` when input changes', () => {
    const input = wrapper.find('.search-books');
    input.simulate('change', { target: { value: 'react' } });
    expect(wrapper.state().query).toEqual('react');
  });
});
