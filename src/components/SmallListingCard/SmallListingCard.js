import React from 'react';
import './SmallListingCard.scss';
import snowflake from '../../data/snowflake.png';
import compassIcon from '../../data/compass_icon.png';
import gondolaIcon from '../../data/gondola_icon.png';
import priceIcon from '../../data/price_icon.png';

const SmallListingCard = () => {

  return (
    <div>

      <article className='short-card-container'>
        <div className='image-container'>image</div>
        <div className='small-card-details'>
          <h3><img className='icon' src={gondolaIcon} alt='location icon'/>Hip RiNo Party Spot</h3>
          <h3><img className='icon' src={compassIcon} alt='location icon'/>2250 Lawrence St.</h3>
          <h3><img className='icon' src={priceIcon} alt='location icon'/>420.00 per night</h3>
        </div>
        <div className='card-buttons'>
          <img type='button' className='fav-icon' src={snowflake} alt='snowflake'/>
          <button className='view-listing-button'>view details</button>
        </div>
      </article>

      <article className='full-card-container'>
        <div className='image-container'>image</div>
        <div className='image-container'>image</div>
        <h3><img className='icon' src={gondolaIcon} alt='location icon'/>Beds: 2</h3>
        <h3><img className='icon' src={compassIcon} alt='location icon'/>Baths: 1.5</h3>
        <h3><img className='icon' src={priceIcon} alt='location icon'/>Features:</h3>
        <ul>
          <li>updated kitchen</li>
          <li>rooftop</li>
          <li>wetbar</li>
          <li>backyard area</li>
          <li>fireplace</li>
        </ul>
        <button className='view-listing-button'>make reservation</button>
      </article>

    </div>
  )

}

export default SmallListingCard;
