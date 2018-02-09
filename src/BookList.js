import React, { Component } from 'react';
import Section from './Section';
import Top from './Top';
import './BookList.css';

class BookList extends Component {
  render() {
    const books = this.props.books;
    const shelves = [
      {
        name: 'wantToRead',
        title: 'want to read'
      },
      {
        name: 'currentlyReading',
        title: 'currently reading'
      },
      {
        name: 'read',
        title: 'read'
      }
    ];

    return (
      <div className="book-list">
        <Top />
        <div className="sections">
          {
            shelves.map(shelf => (
              <Section shelf={shelf.title} key={shelf.name}
                books={books.filter(book => (book.shelf === shelf.name))}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default BookList;
