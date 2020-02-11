import React, { Component } from 'react';
import Form from '../Form/Form.js';
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';
import Animation from '../Animation/Animation.js';
import Map from '../Map/Map.js';
import Nav from '../Nav/Nav.js';
import Neighborhood from '../Neighborhood/Neighborhood.js';
import Account from '../Account/Account.js';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import { fetchRentalAreaData } from '../../helpers.js';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
let filteredListings;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
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
      hoods: {},
      favoritesId: []
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
    .catch(error => window.alert(`There was an error here: ${error.message}`))
  }

  updateListings() {
    fetch('http://localhost:3001/api/v1/listings')
      .then(response => response.json())
      .then(listingInfo => this.setState( {listings: listingInfo} ))
      .catch(error => window.alert(`There was an error: ${error.message}`))
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

  saveUserData = userInfo => {
    this.setState({userData: userInfo})
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
    this.setState({ chosenHood: this.state.hoods[zoneString] });
  }

  addFavorite = listing => {
    this.setState({ favoritesId: [...this.state.favoritesId, listing] })
  }

  removeFavorite = listing => {
    let filteredListings = this.state.favoritesId.filter(place => place.id !== listing.id);
    this.setState({ favoritesId: filteredListings });
  }

  render () {
    return (
      <main className='app-all'>
        <div>
          <Route exact path='/' render={ () => <Form saveUserData={this.saveUserData} /> } />
          <Route exact path='/' component={Animation} />
        </div>
          <Route path='/' render={ () => <Nav userData={this.state.userData} /> } />
        <div className='app-map'>
          <Route exact path='/map' render={ () => <Map updateNeighborhoodInfo={this.updateNeighborhoodInfo} /> } />
          <Route exact path='/map' render={ () => <Neighborhood areas={this.state.chosenHood} /> } />
        </div>
        <div className='app-listing'>
          <Route exact path='/listings' render={ () => <ListingContainer addFavorite={this.addFavorite} listings={this.state.listings.listings} />} />
        </div>
        <div>
          <Route exact path='/account' render={ () => <Account userData={this.state.userData} favorites={this.state.favoritesId} removeFavorite={this.removeFavorite}/> } />
        </div>
      </main>
    );
  }
}

export default App;
