import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import MainContent from '../components/MainContent/MainContent';
import BookList from '../components/BookList/BookList';
import Search from '../components/Search/Search';
import NotFound from '../components/NotFound/NotFound';
import { body } from '../__mocks__/MockData';

describe('<MainContent />', () => {
  let handleChange, starClick;

  beforeEach(() => {
    handleChange = jest.fn();
    starClick = jest.fn();
  });

  afterAll(() => {
    handleChange.clearMock();
    starClick.clearMock();
  });

  it('renders <BookList /> when path is `/`', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <MainContent data={body} onHandleChange={handleChange} onStarClick={starClick} />
      </MemoryRouter>
    ).find(MainContent);
    expect(wrapper.find(BookList)).toHaveLength(1);
  });

  it('renders <Search /> when path is `/search`', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <MainContent data={body} onHandleChange={handleChange} onStarClick={starClick}/>
      </MemoryRouter>
    ).find(MainContent);
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  it('renders <NotFound /> when a random path is passed', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <MainContent data={body} onHandleChange={handleChange} onStarClick={starClick} />
      </MemoryRouter>
    ).find(MainContent);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
