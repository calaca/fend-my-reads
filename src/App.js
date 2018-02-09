import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={BookList} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
