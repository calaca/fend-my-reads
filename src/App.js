import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  handleChange(event, book) {
    let books = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = event.target.value;
      }
      return b;
    });
    this.setState({ books });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<BookList books={this.state.books} onHandleChange={this.handleChange.bind(this)} /> )} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
