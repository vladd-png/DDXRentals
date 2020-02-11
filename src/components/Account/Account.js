import React, { Component } from 'react';
import './Account.scss'
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';
import one from '../../data/one.png';
import two from '../../data/two.png';
import three from '../../data/three.png';
import four from '../../data/four.png';
import five from '../../data/fivr.png';
import six from '../../data/six.png';
import seven from '../../data/seven.png';
let avatarImg;

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ''
    }
  }

  componentDidMount = () => {
    this.setState({ account: this.props.userData })
    let random = Math.floor(Math.random() * 7);
    let characters = [one, two, three, four, five, six, seven];
    avatarImg = characters[random];
  }

  buildListingCards = () => {
    return this.props.favorites.map(place => {
      return <SmallListingCard
        id={place.id}
        area={place.area}
        name={place.name}
        address={place.address}
        addressZip={place.addressZip}
        cost={place.cost}
        features={place.features}
        beds={place.beds}
        baths={place.baths}
        addFavorite={this.props.removeFavorite}
        />
    })
  }

  render() {
    return (
      <section id='account-page'>
        <div id='account-img'>
          <img src={ avatarImg } id='account-avatar' alt='avatar image from the ssx tricky game' />
          <div id='account-display'>
            <h1 id='account-name'>{this.state.account.name}</h1>
            <h3 id='account-email'>{this.state.account.email}</h3>
            <h3 id='account-value'>Your Custom {this.state.account.value} Ride Summary</h3>
            <p id='account-p'>Welcome back to your Tubular Home Page. Here you can see all your Favorited Hip Hop Hot Spots by scrolling below. Funky Dope! Have fun shredder, and don't forget, Safety First!</p>
          </div>
        </div>
        {this.props.favorites.length === 0 ? <h3 id='no-favs-message'>Welcome rider! There are no favorites here.</h3> : ''}
        <div id='account-listing'>
          <h4>{this.buildListingCards()}</h4>
        </div>
      </section>
    )
  }
}

export default Account;
