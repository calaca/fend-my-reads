import React from 'react';
import './Book.css';

const Book = (props) => {
  const book = props.book;
  const shelves = props.shelves;

  return (
    <div className="book">
      <div className="select-book-shelf">
        <select value={book.shelf} onChange={(event) => props.onHandleChange(event, book)}>
          {
            shelves.map(shelf => (
              <option key={shelf.name} value={shelf.name}>{shelf.title}</option>
            ))
          }
        </select>
      </div>
      <img
        className="book-cover"
        src={book.imageLinks.thumbnail}
        alt={book.title}
        title={book.title}
      />
      <p className="book-title">{book.title}</p>
      {
        book['authors'].map(author => (
          <p key={author} className="book-authors">{author}</p>
        ))
      }
    </div>
  )
}

export default Book;
