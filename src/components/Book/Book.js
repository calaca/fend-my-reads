import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'
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
      <div className="book-ratings">
        <ReactStars
          count={5}
          size={20}
          value={book.rating}
          color1="#9c9c9c"
          color2="#f1c40f"
          half={false}
          onChange={(value) => props.onStarClick(value, book)}
        />
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
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired
};

export default Book;
