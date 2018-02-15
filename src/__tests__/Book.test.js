import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Book from '../components/Book/Book';
import { body } from '../__mocks__/MockData';

describe('<Book />', () => {
  let wrapper, handleChange, starClick;
  const book = body.books[0];
  const shelves = body.shelves;

  beforeEach(() => {
    handleChange = jest.fn();
    starClick = jest.fn();
    wrapper = shallow(<Book book={book} shelves={shelves} onHandleChange={handleChange} onStarClick={starClick} />);
  });

  afterEach(() => {
    handleChange.mockClear();
    starClick.mockClear();
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('calls handleChange when a change event happens in the `select` element', () => {
    wrapper.find('select').simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls starClick when a change event happens in <ReactStars />', () => {
    wrapper.find('ReactStars').simulate('change');
    expect(starClick).toHaveBeenCalled();
  });
});
