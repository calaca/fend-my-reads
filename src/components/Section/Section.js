import React from 'react';
import Book from '../Book/Book';
import './Section.css';

const Section = (props) => {
  const books = props.books;
  return (
    <section>
      <h2 className="section-title">{props.shelf}</h2>
      {
        books.map(book => (
          <Book shelves={props.shelves} key={book.id} book={book} onHandleChange={props.onHandleChange} />
        ))
      }
    </section>
  )
}

export default Section;
