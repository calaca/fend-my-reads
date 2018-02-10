import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from '../Book/Book';
import arrow from '../../icons/right-arrow.svg';
import './Search.css';

class Search extends Component {
  state = {
    query: ''
  }

  updateQuery(query) {
    this.setState({
      query: query.trim()
    });
  }

  render() {
    const { books, shelves } = this.props.data;
    const query = this.state.query;
    let showingBooks;

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter(book => {
        let title;
        let author;
        title = match.test(book.title)
        author = match.test(book.authors)
        return title + author;
      });
    } else {
      showingBooks = books;
    }

    showingBooks.sort(sortBy('title'));

    return (
      <div className="search">
        <div className="search-box-wrapper">
          <Link to="/" className="back-link">
            <img src={arrow} alt="Voltar" title="Voltar" className="back-icon"/>
          </Link>
          <input type="text" className="search-books" placeholder="Search books by title or author" value={this.props.query} onChange={event => this.updateQuery(event.target.value)}/>
        </div>
        <div className="search-results">
          {
            showingBooks.length !== books.length &&
            (
              <div className="showing-books">
                <span>Now showing <strong>{showingBooks.length}</strong> of <strong>{books.length}</strong> total.</span>
              </div>
            )
          }
          {
            showingBooks.map(book => (
              <Book shelves={shelves} key={book.id} book={book} onHandleChange={this.props.onHandleChange} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Search;
