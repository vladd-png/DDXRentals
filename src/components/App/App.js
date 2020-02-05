import React, { Component } from 'react';
// import Form from '../Form/Form.js';
// import Animation from '../Animation/Animation.js';
import './App.css';
import Map from '../Map/Map.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <div className="app">
        <Map />
      </div>
    );
  }
}

export default App;
