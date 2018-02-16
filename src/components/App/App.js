import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import MainContent from '../MainContent/MainContent';
import { getAll, update } from '../../utils/BooksAPI';
import sortBy from 'sort-by';
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
    getAll()
      .then(books => {
        books.sort(sortBy('title'));
        this.setState({ books, loading: false });
      }
    );
  }

  /**
  * @description Updates the book's shelf
  * @param {Event} event - The onChange event
  * @param {object} book - The book that triggered the event
  */
  handleChange(event, updatedBook) {
    const shelf = event.target.value;
    let newBooks = [];

    update(updatedBook, shelf)
      .then(res => {
        updatedBook.shelf = shelf;
        newBooks = this.state.books.filter(b => b.id !== updatedBook.id);
        newBooks.push(updatedBook);
        newBooks.sort(sortBy('title'));
        this.setState({ books: newBooks });
      }
    );
  }

  /**
  * @description Updates the book's star rating - only works locally because the API doesn't provide a method to update the book itself, just its shelf
  * @param {number} value - The new number of stars
  * @param {object} book - The book that triggered the event
  */
  starClick(value, book) {
    book.rating = value;
    let newBooks = this.state.books.filter(b => b.id !== book.id);
    newBooks.push(book);
    newBooks.sort(sortBy('title'));
    this.setState({ books: newBooks });
  }

  render() {
    const { loading } = this.state;
    let content;

    if (loading) {
      content = <Loading />;
    } else {
      content = 
        <MainContent 
          data={this.state}
          onHandleChange={this.handleChange.bind(this)}
          onStarClick={this.starClick.bind(this)}
        />;
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }
};

export default App;
