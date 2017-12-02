import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDog extends Component {


  render() {
    const { message } = this.props;

    return (
      <div className="dog-form">
        <h3> {message} </h3>
        <label htmlFor="dog-name"/>
        <input className="dog-name" id="dog-name" type="text" placeholder="Add your dog" />
      </div>
    );
  }
}

AddDog.propTypes = {
  message: PropTypes.string.isRequired
};

export default AddDog;