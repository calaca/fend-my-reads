import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookList from '../BookList/BookList';
import Search from '../Search/Search';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import * as BooksAPI from '../../utils/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: [],
    shelves: [
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
    ],
    loading: true
  }

  /**
  * @description Fetches all books from the API
  */
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books, loading: false }));
  }

  /**
  * @description Updates the book's shelf
  * @param {Event} event - The onChange event
  * @param {object} book - The book that triggered the event
  */
  handleChange(event, book) {
    let books = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = event.target.value;
      }
      return b;
    });
    this.setState({ books });
    BooksAPI.update(book, book.shelf);
  }

  /**
  * @description Updates the book's star rating - only works locally because the API doesn't provide a method to update the book itself, just its shelf
  * @param {number} value - The new number of stars
  * @param {object} book - The book that triggered the event
  */
  starClick(value, book) {
    let books = this.state.books.map(b => {
      if (b.id === book.id) {
        b.rating = value;
      }
      return b;
    });
    this.setState({ books });
  }

  render() {
    const { loading } = this.state;
    let content;

    if (loading) {
      content = 
        <div className="loading-wrapper">
          <div className="loading"></div>
          <div className="text">Loading app...</div>
        </div>;
    } else {
      content =
        <div>
          <Switch>
          <Route exact path="/" render={() => (<BookList data={this.state} onHandleChange={this.handleChange.bind(this)} onStarClick={this.starClick.bind(this)} />)} />
          <Route path="/search" render={() => (<Search data={this.state} onHandleChange={this.handleChange.bind(this)} onStarClick={this.starClick.bind(this)} />)} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>;
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }
};

export default App;
