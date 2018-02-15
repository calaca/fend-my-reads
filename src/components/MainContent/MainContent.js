import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from '../BookList/BookList';
import Search from '../Search/Search';
import NotFound from '../NotFound/NotFound';

const MainContent = (props) => {
  const { data, onHandleChange, onStarClick } = props;
  return(
    <Switch>
      <Route exact path="/" render={() => (<BookList data={data} onHandleChange={onHandleChange} onStarClick={onStarClick} />)} />
      <Route path="/search" render={() => (<Search data={data} onHandleChange={onHandleChange} onStarClick={onStarClick} />)} />
      <Route component={NotFound} />
    </Switch>
  )
};

MainContent.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired
};

export default MainContent;
