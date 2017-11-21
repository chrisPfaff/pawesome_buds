import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';

import App from '../App';
import FormPage from '../container/FormPage';
import AboutPage from '../container/AboutPage';

const Nav = (props) => {
  return (
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/form">Home</Link></li>
        </ul>

        <Route exact path="/" component={App} />
        <Route path="/about" component={AboutPage} />
        <Route path="/form" component={FormPage} />
      </div>
  );
};

export default Nav;
