import React, { Component } from 'react';
import './Neighborhood.scss';

const Neighborhood = props => {
  const allListings = props.areas.listings.map(listing => {
    let splitOut = listing.split('/');
    let coolWords = ['Radical', 'Gnarly', 'Tubular', 'Supreme', 'Off-The-Hook', 'Bees-Knees', 'Cats Pajamas', 'Outrageous', 'Awesome', 'Spectacular'];
    let chosenWord = coolWords[Math.floor(Math.random() * 10)];
    return <li>{chosenWord} Listing {splitOut[4]}</li>
  });
  return (
    <aside className='sidebar-zone'>
      <h1>RiNo</h1>
      <h2>{props.areas.name}</h2>
      <h3>{props.areas.location}</h3>
      <p>{props.areas.about}</p>
      <ul id='area-listings'>
        {allListings}
      </ul>
    </aside>
  )
}

export default Neighborhood;
