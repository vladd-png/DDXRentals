import React, { Component } from 'react';
import './Account.scss'
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
    console.log(random);
    let characters = [one, two, three, four, five, six, seven];
    avatarImg = characters[random];
  }
  render() {
    return (
      <section id='account-page'>
        <img src={ avatarImg } id='account-avatar' alt='avatar image from the ssx tricky game' />
        <div id='account-display'>
          <h1 id='account-name'>{this.state.account.name}</h1>
          <h3 id='account-email'>{this.state.account.email}</h3>
          <h3 id='account-value'>Your Custom {this.state.account.value} Ride Summary</h3>
          <p>Welcome back to your Tubular Home Page. Here you can see all your Favorited Hip Hop Hot Spots. Funky Dope!</p>
        </div>
        <div>
          <h4>{this.state.account.value}</h4>
        </div>
      </section>
    )
  }
 }

export default Account;
