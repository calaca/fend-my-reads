import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
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
              onHandleChange={props.onHandleChange} onStarClick={props.onStarClick}
            />
          ))
        }
      </div>
      <Footer />
    </div>
  )
};

BookList.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired
};


export default BookList;
