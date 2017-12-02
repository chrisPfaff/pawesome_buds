import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddDog from "../presentational/AddDog";
class FormPage extends Component {
  render() {
    return (
      <div className="signup-form block">
        <h2 className="signup-form--header">Signup Your Pooch Today!</h2>
        <AddDog message="Cooper and Rosie" />
      </div>
    );
  }
}

export default FormPage;
