import React, { Component } from 'react';
import Form from '../Form/Form.js'
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
        <Form />
      </div>
    );
  }
}

export default App;
