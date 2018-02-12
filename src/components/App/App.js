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
    ]
  }

  /**
  * @description Fetches all books from the API
  */
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  /**
  * @description Updates the book's shelf
  * @param {Event} event - The onChange event
  * @param {string} book - The book that triggered the event
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

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (<BookList data={this.state} onHandleChange={this.handleChange.bind(this)} /> )} />
          <Route path="/search" render={() => (<Search data={this.state} onHandleChange={this.handleChange.bind(this)} />)} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default App;