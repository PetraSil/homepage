import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
