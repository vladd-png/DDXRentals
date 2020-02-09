import React, { Component } from 'react';
import './Neighborhood.scss';
import { Link } from 'react-router-dom';


const Neighborhood = props => {
  console.log(props);
  const allListings = props.areas.listings.map(listing => {
    let splitOut = listing.split('/');
    let coolWords = ['Radical', 'Gnarly', 'Tubular', 'Supreme', 'Off-The-Hook', 'Bees-Knees', 'Cats Pajamas', 'Outrageous', 'Awesome', 'Spectacular'];
    let chosenWord = coolWords[Math.floor(Math.random() * 10)];
    return <li className='feature-item' >{chosenWord} Listing {splitOut[4]}</li>
  });
  return (
    <aside className='sidebar-zone'>
      <h1 className='nickname-header'>{props.areas.nickName}</h1>
      <h2>{props.areas.name}</h2>
      <h3>{props.areas.location}</h3>
      <p>{props.areas.about}</p>
      <ul id='area-listings'>
        {allListings}
      </ul>
      <Link to={`/listings`}><button type='button' className='listing-button'>See All Listings</button></Link>
    </aside>
  )
}

export default Neighborhood;
