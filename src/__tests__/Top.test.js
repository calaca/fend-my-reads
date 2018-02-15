import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Top from '../components/Top/Top';

describe('<Top />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Top />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the app name', () => {
    expect(wrapper.find('.top-title').contains('My Reads')).toBe(true);
  });

  it('has a Link to `/search`', () => {
    expect(wrapper.find('.search-link').prop('to')).toEqual('/search');
  });

  it('has an image inside the Link', () => {
    const link = wrapper.find('.search-link');
    expect(link.find('.search-link-icon')).toHaveLength(1);
  });
});
