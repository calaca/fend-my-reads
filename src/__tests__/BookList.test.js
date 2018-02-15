import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BookList from '../components/BookList/BookList';
import Section from '../components/Section/Section';
import { body } from '../__mocks__/MockData';

describe('<BookList />', () => {
  let handleChange, starClick;

  beforeEach(() => {
    handleChange = jest.fn();
    starClick = jest.fn();
  });

  afterEach(() => {
    handleChange.mockClear();
    starClick.mockClear();
  });

  it('renders without crashing', () => {
    shallow(<BookList data={body} onHandleChange={handleChange} onStarClick={starClick} />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<BookList data={body} onHandleChange={handleChange} onStarClick={starClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders .sections', () => {
    const wrapper = shallow(<BookList data={body} onHandleChange={handleChange} onStarClick={starClick} />);
    expect(wrapper.find('.sections')).toHaveLength(1);
  });

  it('renders three <Section />s', () => {
    const wrapper = mount(
      <MemoryRouter>
        <BookList data={body} onHandleChange={handleChange} onStarClick={starClick} />
      </MemoryRouter>
    );
    expect(wrapper.find(Section)).toHaveLength(3);
  });
});
