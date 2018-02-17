import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../components/Search/Search';
import Book from '../components/Book/Book';
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

  it('renders a message when there are no books to show', () => {
    wrapper.setState({ empty: true });
    expect(wrapper.find('.empty-results')).toHaveLength(1);
  });

  it('renders a message when there are no results', () => {
    wrapper.setState({ searchBooks: [], empty: false });
    expect(wrapper.find('.no-results')).toHaveLength(1);
  });

  it('renders a message when there are valid results', () => {
    wrapper.setState({ searchBooks: body.books, empty: false });
    expect(wrapper.find('.has-results')).toHaveLength(1);
  });

  it('renders at least one <Book />', () => {
    wrapper.setState({ searchBooks: body.books, empty: false });
    expect(wrapper.find(Book)).toHaveLength(1);
  });

  /**
   * I have already simulated a change and checked if updateQuery gets called but code coverage keeps telling me that this function hasn't been covered. How can I cover it?
   * The same goes to the following functions:
   * - Search.js prepareBook
   * - App.js handleChange and starClick
   */
  it('calls `updateQuery` when input value changes', () => {
    Search.prototype.updateQuery = jest.fn();
    const input = wrapper.find('.search-books');
    input.simulate('change', { target: { value: 'react' } });
    expect(Search.prototype.updateQuery).toHaveBeenCalled();
  });
});
