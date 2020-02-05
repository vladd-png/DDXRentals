import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Animation from '../Animation/Animation.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <div className="app">
        <Animation />
        <Form />
      </div>
    );
  }
}

export default App;
