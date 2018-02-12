import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../icons/right-arrow.svg'
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="app-title">My Reads</h1>
      <div className="not-found-text">
        <Link className="back-link" to="/">
          <img src={arrow} alt="Go back" title="Go back" className="back-icon"/>
        </Link>
        <span className="small">Error</span>
        <span className="big">404</span>
        <span className="small">page not found</span>
      </div>
    </div>
  )
};

export default NotFound;
