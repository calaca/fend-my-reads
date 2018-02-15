import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from '../components/Footer/Footer';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a link to my portfolio page', () => {
    const url = 'https://calaca.github.io';
    const link = wrapper.find('.footer-link');
    expect(link.prop('href')).toEqual(url);
  });
});
