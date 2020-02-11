import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from '../Form/Form.js';
import Animation from '../Animation/Animation.js';
import Map from '../Map/Map.js';
import Nav from '../Nav/Nav.js';
import Neighborhood from '../Neighborhood/Neighborhood.js';
import Account from '../Account/Account.js';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import { fetchRentalAreaData } from '../../helpers.js';
import './App.css';
import { Route } from 'react-router-dom';
import { getListings, updateListingState } from '../../apiCalls.js';

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
      favoritesId: [],
      error: ''
    }
  }
  
  componentDidMount() {
    getListings()
    .then(areaNamesData => {
      this.setState({areaNames: areaNamesData })
      // this.pullAreaListings(areaNamesData.areas)
      this.updateAreaDetails(areaNamesData.areas)
      this.updateListings();
    })
    .catch(error => this.setState({ error: error.message }))
  }
  
  updateListings() {
    updateListingState()
    .then(listingInfo => {
      this.setState( {listings: listingInfo}
      )})
    .catch(error => this.setState({ error: error.message }))
  }
  
  // pullAreaListings(areaDetails) {
  //   let selectedArea = fetchRentalAreaData(areaDetails)
  //   this.updateAreaDetails(selectedArea)
  // }
  
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
    console.log('state.favoritesId: ', this.state.favoritesId);
    console.log('listing coming in: ', listing);
    if (!this.state.favoritesId.includes(listing)) {
      this.setState({ favoritesId: [...this.state.favoritesId, listing] })
    } else {
      return
    }
  }
  
  removeFavorite = listing => {
    let filteredListings = this.state.favoritesId.filter(place => place.id !== listing.id);
    this.setState({ favoritesId: filteredListings });
  }
  
  clearFavorites = () =>{
    this.setState({ favoritesId: [] });
  }

  render () {
    return (
      <main>
        <div>
          <Route exact path='/' render={ () => <Form saveUserData={this.saveUserData} /> } />
          <Route exact path='/' render={ () => <Animation amount={this.state.userData}/> } />
        </div>
        <Route path='/' render={ () => <Nav clearFavorites={this.clearFavorites} favoritesId={this.state.favoritesId} userData={this.state.userData} /> } />
        <div className='app-map'>
          <Route exact path='/map' render={ () => <Map updateNeighborhoodInfo={this.updateNeighborhoodInfo} /> } />
          <Route exact path='/map' render={ () => <Neighborhood areas={this.state.chosenHood} /> } />
        </div>
        <div>
          <Route exact path='/listings' render={ () => <ListingContainer addFavorite={this.addFavorite} listings={this.state.listings.listings} />} />
        </div>
        <div>
          <Route exact path='/account' render={ () => <Account userData={this.state.userData} favorites={this.state.favoritesId} removeFavorite={this.removeFavorite}/> } />
          <Route exact path='/account' render={ () => <Animation amount={this.state.userData}/>} />
        </div>
      </main>
    )
  }
}
export default App;
