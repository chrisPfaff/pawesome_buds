import React, { Component } from 'react';

const NotFound = () => {

  const error_image = require('../../img/404.jpg');

  return (
    <div className="404-error block">
      <h2>Oops try again</h2>
      <img className="not-found-dog"src={error_image} />
    </div>
  );
};

export default NotFound;
