import React from 'react';
import './ListingContainer.scss'
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';
import tubes from '../../data/menu-tubes.png'

const ListingContainer = (props) => {
  const allListings = props.listings.map(place => {
    return <SmallListingCard
      id={place.listing_id}
      area={place.area_id}
      name={place.name}
      address={place.address.street}
      addressZip={place.address.zip}
      cost={place.details.cost_per_night}
      features={place.details.features}
      beds={place.details.beds}
      baths={place.details.baths}
      addFavorite={props.addFavorite}
    />
  })
  return (
    <section className='listing-container'>
      {allListings}
      <img id='tubes' src={ tubes } alt='tubular menu for scrolling' />
    </section>
  )
}

export default ListingContainer;
