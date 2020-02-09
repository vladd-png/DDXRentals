import React, { Component } from 'react';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      account: ''
    }
  }
  render() {
    return (
      <section>
        <h1>Name Name</h1>
        <h3>Email</h3>
        <p></p>
        <div>
          <h4>Favorites</h4>
        </div>
      </section>
    )
  }
 }

export default Account;
