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
        data.forEach(area => {
        this.setState({ hoods: { ...this.state.hoods, [area.id]: area } })
        })
        this.setState({ areaDetails: data }, () => this.addAreaNicknameToHoodz())

      })
  }

  addAreaNicknameToHoodz() {
    this.state.areaNames.areas.forEach(area => {
      let id = area.details.split('/')
       let areaObj = {
         nickName: area.area,
         id: id[4]
      }
      this.state.areaDetails.forEach(zone => {
        if (parseInt(areaObj.id) === zone.id) {
          // this.setState({ areaDetails: areaObj.nickName })
          console.log(this.state.areaDetails);
          // this.setState({ areaDetails: '' })
          this.setState({ [zone.name]: {...zone, nickName: areaObj.nickName} })
        }
      })
      // console.log(areaObj);
      // this.setState({areaDetails: { ...this.state.areaDetails, areaObj}})
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
      </div>
    );
  }
}

export default App;
