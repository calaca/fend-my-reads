import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/Footer/Footer';

describe('<NotFound />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders `.not-found-text`', () => {
    expect(wrapper.find('.not-found-text')).toHaveLength(1);
  });

  it('has a link back to home', () => {
    expect(wrapper.find('.back-link').prop('to')).toEqual('/');
  });

  it('renders a <Footer />', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
