import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Animation from '../Animation/Animation.js';
import { fetchRentalAreaData } from '../../helpers.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areaNames: {},
      areaDetails: {},
      listings: {}
    }
  }

  componentDidMount() {
  fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
    .then(areaNamesData => {
      this.setState({areaNames: {areaNamesData} })
      this.updateAreaDetails(areaNamesData.areas)
    })
    .catch(error => window.alert(`There was an error: ${error}`))
  }

  updateAreaDetails(areaDetails) {
    const selectedArea = fetchRentalAreaData(areaDetails)
    Promise.all(selectedArea)
      .then(data => {
        this.setState({areaDetails: data})
      })
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
