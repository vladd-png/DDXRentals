import React from 'react';
import './ListingContainer.scss'
import SmallListingCard from '../SmallListingCard/SmallListingCard.js';

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
    />
  })
  return (
    <section className='listing-container'>
      {allListings}
    </section>
  )
}

export default ListingContainer;
