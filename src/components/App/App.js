import React, { Component } from 'react';
import Form from '../Form/Form.js';
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';
import Animation from '../Animation/Animation.js';
import { fetchRentalAreaData } from '../../helpers.js';
import './App.css';
import Map from '../Map/Map.js';
import Nav from '../Nav/Nav.js';
import Neighborhood from '../Neighborhood/Neighborhood.js';

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
      this.updateListings();
      this.updateAreaDetails(areaNamesData.areas)
    })
    .catch(error => window.alert(`There was an error: ${error}`))
  }

  updateListings() {
    fetch('http://localhost:3001/api/v1/listings')
      .then(response => response.json())
      .then(listingInfo => this.setState( {listings: {listingInfo}} ))
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
        <SmallListingCard />
      </div>
    );
  }
}

export default App;
