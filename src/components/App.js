import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Routes from '../components/Routes';
import Nav from '../components/presentational/Nav';
import Header from '../components/presentational/Header';

class App extends Component {
<<<<<<< HEAD
  constructor() {
    super();

    this.newDog = this.newDog.bind(this);

    this.state = {
      dog: {},
    };
  }

  newDog(dog) {
    //const dogs = {...this.state.dog};
    const timeStamp = Date.now();

    //dogs[`dog-${timeStamp}`] = dog;

    this.setState({dog: dog});
  }

  // componentDidMount() {
  //   this.newDog({name:'chris'});
  // }
=======
>>>>>>> 9dc7701e711f63d7b7b91fc2f895f93d4113759d

  render() {
    return (
      <div className="container">
        <Header message="PawesomeBuds" />
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
