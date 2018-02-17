import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import Footer from '../Footer/Footer';
import arrow from '../../icons/right-arrow.svg';
import { search } from '../../utils/BooksAPI';
import './Search.css';

class Search extends Component {
  state = {
    query: '',
    searchBooks: [],
    empty: false
  }

  /**
  * @description Checks the book's shelf property and updates it correctly:
  * New book on the shelf = no shelf and no rating
  * Book already in a shelf = current shelf and current rating
  * @param {string} query - The search query
  */
  prepareBook(res) {
    const { books } = this.props.data;
    this.setState(
      {
        searchBooks: res.map(book => {
          const existsBook = books.find(b => b.id === book.id);
          if (existsBook) {
            book.shelf = existsBook.shelf;
            book.rating = existsBook.rating;
          } else {
            book.shelf = 'noShelf';
            book.rating = 0;
          }
          return book;
        }),
        empty: false
      }
    );
  }

  /**
  * @description Updates the search query and results array
  * @param {string} query - The search query
  */
  updateQuery(query) {
    this.setState({ query });
    query.trim();

    if (query) {
      search(query)
        .then(res => {
          if (!res.error) {
            this.prepareBook(res);
          } else {
            this.setState({ searchBooks: [], empty: true });
          }
        });
    } else {
      this.setState({ searchBooks: [], empty: false });
    }
  }

  render() {
    const { searchBooks, empty } = this.state;
    const { shelves } = this.props.data;
    const searchTerms = 'https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md';

    return (
      <div className="search">
        <div className="search-box-wrapper">
          <Link to="/" className="back-link">
            <img src={arrow} alt="back" title="back" className="back-icon" />
          </Link>
          <Debounce time="400" handler="onChange">
            <input 
              type="text"
              className="search-books"
              placeholder="Search"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </Debounce>
        </div>
        <div className="search-results">
          <div className="showing-books">
            {
              empty && (
                <span className="empty-results">Invalid search term. Click <a href={searchTerms} className="valid-terms">here</a> for a list of valid search terms.</span>
              )
            }
            {
              !empty && searchBooks.length === 0 && (
                <span className="no-results">Type something to look for books. Click <a href={searchTerms} className="valid-terms">here</a> for a list of valid search terms.</span>
              )
            }
            {
              !empty && searchBooks.length !== 0 && (
                  <span className="has-results">The API has found <strong>{searchBooks.length}</strong> results.</span>
              )
            }
          </div>
          {
            searchBooks.map(book => (
              <Book 
                key={book.id}
                book={book}
                shelves={shelves}
                onHandleChange={this.props.onHandleChange}
                onStarClick={this.props.onStarClick}
              />
            ))
          }
        </div>
        <Footer />
      </div>
    )
  }
};

Search.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired
};

export default Search;
