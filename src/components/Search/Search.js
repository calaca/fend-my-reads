import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  * New book on the shelf = no shelf
  * Book already in a shelf = current shelf
  * @param {string} query - The search query
  */
  prepareBook(res) {
    const { books } = this.props.data;
    this.setState(
      {
        searchBooks: res.map(book => {
          const existsBook = books.filter(b => b.id === book.id);
          existsBook ? book.shelf = existsBook.shelf : book.shelf = 'noShelf';
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
          if (res.length) {
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
    const { query, searchBooks, empty } = this.state;
    const { shelves } = this.props.data;
    const searchTerms = 'https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md';

    return (
      <div className="search">
        <div className="search-box-wrapper">
          <Link to="/" className="back-link">
            <img src={arrow} alt="Voltar" title="Voltar" className="back-icon" />
          </Link>
          <input 
            type="text"
            className="search-books"
            placeholder="Search"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
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
