import React from 'react';
import './SmallListingCard.scss';
import snowflake from '../../data/snowflake.png';
import compassIcon from '../../data/compass_icon.png';
import gondolaIcon from '../../data/gondola_icon.png';
import priceIcon from '../../data/price_icon.png';

const SmallListingCard = () => {

  return (
    <article className='card-container'>
      <div className='image-container'>image</div>
      <div className='small-card-details'>
        <h3><img className='icon' src={gondolaIcon} alt='location icon'/>Hip RiNo Party Spot</h3>
        <h3><img className='icon' src={compassIcon} alt='location icon'/>2250 Lawrence St.</h3>
        <h3><img className='icon' src={priceIcon} alt='location icon'/>420.00 per night</h3>
      </div>
      <div className='card-buttons'>
        <img type='button' className='fav-icon' src={snowflake} alt='snowflake'/>
        <button className='view-listing-button'>view listing</button>
      </div>
    </article>
  )

}

export default SmallListingCard;
