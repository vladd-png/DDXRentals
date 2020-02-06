import React, { Component } from 'react';
import Form from '../Form/Form.js';
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';
import Animation from '../Animation/Animation.js';
import Map from '../Map/Map.js';
import Nav from '../Nav/Nav.js';
import Neighborhood from '../Neighborhood/Neighborhood.js';
import { fetchRentalAreaData } from '../../helpers.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areaNames: {},
      areaDetails: {},
      listings: {},
      chosenHood: '',
      hoods: {}
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
        data.forEach(area => {
          // let id = area.id
          // console.log(cityObj);
          this.setState({ hoods: { ...this.state.hoods, [area.id]: area } })
        })
        this.setState({ areaDetails: data })
      })
  }
  updateNeighborhoodInfo = (zoneString) => {
    this.setState({ chosenHood: this.state.chosenHood[zoneString] })

  }
  render () {
    return (
      <div className="app">
        <Nav />
        <Map updateNeighborhoodInfo={this.updateNeighborhoodInfo}/>
        <Neighborhood areas={this.state.areaDetails}/>
        <SmallListingCard />
      </div>
    );
  }
}

export default App;
