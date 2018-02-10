import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../icons/search.svg';
import './Top.css';

const Top = () => {
  return (
    <div className="top">
      <h1 className="top-title">My Reads</h1>
      <Link className="search-link" to="/search">
        <img className="search-link-icon" src={searchIcon} alt="Search books" title="Search books"/>
      </Link>
    </div>
  )
}

export default Top;
