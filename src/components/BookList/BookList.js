import React from 'react';
import Section from '../Section/Section';
import Top from '../Top/Top';
import './BookList.css';

const BookList = (props) => {
  const { books, shelves } = props.data;
  return (
    <div className="book-list">
      <Top />
      <div className="sections">
        {
          shelves.map(shelf => (
            <Section shelves={shelves} shelf={shelf.title} key={shelf.name}
              books={books.filter(book => (book.shelf === shelf.name))}
              onHandleChange={props.onHandleChange}
            />
          ))
        }
      </div>
    </div>
  )
}


export default BookList;
