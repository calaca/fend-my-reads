import React, { Component } from 'react';
import Book from './Book';
import './Section.css';

class Section extends Component {
  render() {
    const books = this.props.books;

    return (
      <section>
        <h2 className="section-title">{this.props.shelf}</h2>
        {
          books.map(book => (
            <Book shelves={this.props.shelves} key={book.id} book={book} onHandleChange={this.props.onHandleChange} />
          ))
        }
      </section>
    )
  }
}

export default Section;
