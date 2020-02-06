import React, { Component } from 'react';
import './Neighborhood.scss';

class Neighborhood extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <aside className='sidebar-zone'>
        <h1>RiNo</h1>
        <h2>River North Art District</h2>
        <p>RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!</p>
        <ul>
          <li>Listing 1</li>
          <li>Listing 2</li>
          <li>Listing 3</li>
          <li>Listing 4</li>
          <li>Listing 5</li>
          <li>Listing 6</li>
        </ul>
      </aside>
    )
  }
}

export default Neighborhood;
