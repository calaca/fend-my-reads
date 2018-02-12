import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './Section.css';

const Section = (props) => {
  const books = props.books;
  return (
    <section>
      <h2 className="section-title">{props.shelf}</h2>
      {
        books.map(book => (
          <Book shelves={props.shelves} key={book.id} book={book} onHandleChange={props.onHandleChange} onStarClick={props.onStarClick} />
        ))
      }
    </section>
  )
};

Section.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired
};

export default Section;
