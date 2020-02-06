import React, { Component } from 'react';
import './Neighborhood.scss';

class Neighborhood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaId: ''
    }
  }
  render() {
    return (
      <aside className='sidebar-zone'>
        <h1>RiNo</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.location}</h3>
        <p>{this.props.about}</p>
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
