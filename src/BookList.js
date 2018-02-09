import React, { Component } from 'react';
import Section from './Section';
import Top from './Top';
import './BookList.css';

class BookList extends Component {
  render() {
    const sectionTitles = [
      {
        id: 'currently',
        text: 'Currently Reading'
      },
      {
        id: 'want',
        text: 'Want To Read'
      },
      {
        id: 'read',
        text: 'Read'
      }
    ];

    return (
      <div className="book-list">
        <Top />
        <div className="sections">
          {
            sectionTitles.map( section => (
              <Section text={section.text} id={section.id} key={section.id} books={this.props.books} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default BookList;
