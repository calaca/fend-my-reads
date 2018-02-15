import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Section from '../components/Section/Section';
import { body } from '../__mocks__/MockData';
import Book from '../components/Book/Book';

describe('<Section />', () => {
  let handleChange, starClick;
  const { books, shelves } = body;
  const shelf = shelves[1];

  beforeEach(() => {
    handleChange = jest.fn();
    starClick = jest.fn();
  });

  afterEach(() => {
    handleChange.mockClear();
    starClick.mockClear();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Section shelves={shelves} shelf={shelf.title} key='currentlyReading'
        books={books.filter(book => (book.shelf === shelf.name))}
        onHandleChange={handleChange} onStarClick={starClick} />
    );
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Section shelves={shelves} shelf={shelf.title} key='currentlyReading'
        books={books.filter(book => (book.shelf === shelf.name))}
        onHandleChange={handleChange} onStarClick={starClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the shelf name', () => {
    const wrapper = shallow(
      <Section shelves={shelves} shelf={shelf.title} key='currentlyReading'
        books={books.filter(book => (book.shelf === shelf.name))}
        onHandleChange={handleChange} onStarClick={starClick} />
    );
    expect(wrapper.find('.section-title')).toHaveLength(1);
  });

  it('renders at least one <Book />', () => {
    const wrapper = mount(
      <Section shelves={shelves} shelf={shelf.title} key='currentlyReading'
        books={books.filter(book => (book.shelf === shelf.name))}
        onHandleChange={handleChange} onStarClick={starClick} />
    );
    expect(wrapper.find(Book).length).toBeGreaterThanOrEqual(1);
  });
});
