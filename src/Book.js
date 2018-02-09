import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    const book = this.props.book;

    return (
      <div className="book">
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
}

export default Book;
