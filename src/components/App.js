
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from './BookList';

const App = () => (
  <Router>
    <Route path="/books/:page?" component={BookList} />
  </Router>
);

export default App;

