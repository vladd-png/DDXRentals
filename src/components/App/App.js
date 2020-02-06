import React, { Component } from 'react';
// import Form from '../Form/Form.js';
// import Animation from '../Animation/Animation.js';
import './App.css';
import Map from '../Map/Map.js';
import Nav from '../Nav/Nav.js';
import Neighborhood from '../Neighborhood/Neighborhood.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <div className="app">
        <Nav />
        <Map />
        <Neighborhood />
      </div>
    );
  }
}

export default App;
