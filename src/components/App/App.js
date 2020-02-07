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
      chosenHood: {
        id: 0,
        name: 'Select An Area on the Left to View Full Details',
        location: null,
        about: '',
        listings: []
      },
      hoods: {}
    }
  }

  componentDidMount() {
  fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
    .then(areaNamesData => {
      this.setState({areaNames: areaNamesData })
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
        this.setState({ areaDetails: data }, () => this.addAreaNicknameToHoodz())
        this.addHoodData();
      })
  }

  addHoodData() {
    this.state.areaDetails.forEach(area => {
      this.setState({ hoods: { ...this.state.hoods, [area.name]: area } })
    });
  }


  addAreaNicknameToHoodz() {
    let details = this.state.areaNames.areas.reduce((acc, area) => {
      let id = area.details.split('/');
      let areaObj = {nickName: area.area, id: id[4]};
      this.state.areaDetails.forEach( zone => {
      if (parseInt(areaObj.id) === zone.id) {
          acc.push({...zone, nickName: areaObj.nickName});
        }
      })
      return acc;
    }, []);
    this.setState({ areaDetails: details });
  }

  updateNeighborhoodInfo = (zoneString) => {
    console.log(this.state.areaDetails);
    this.setState({ chosenHood: this.state.hoods[zoneString] });
  }

  render () {
    return (
      <div className="app">
        <Nav />
        <Map updateNeighborhoodInfo={this.updateNeighborhoodInfo} />
        <Neighborhood areas={this.state.chosenHood} />
        <SmallListingCard />

      </div>
    );
  }
}

export default App;
