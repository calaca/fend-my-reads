import React, { Component } from 'react';
import Book from './Book';
import './Section.css';

class Section extends Component {
  render() {
    const books = this.props.books;

    return (
      <section>
        <h2 className="section-title">{this.props.text}</h2>
        {
          books.map(book => (
            <Book key={book.id} book={book} />
          ))
        }
      </section>
    )
  }
}

export default Section;
