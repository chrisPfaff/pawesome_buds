import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import paw from '../../img/paw.svg';

class Header extends Component {


  render() {
    const bone = require('../../img/bone.svg');
    const paw = require('../../img/paw.svg');

    return (
      <h1>
        <img className="icon" src={bone} />
        <Link to={`/`}>{this.props.message}</Link>
        <img className="icon" src={paw} />
      </h1>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;