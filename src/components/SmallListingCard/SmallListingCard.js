import React from 'react';
import './SmallListingCard.scss';
import snowflake from '../../data/snowflake.png';
import compassIcon from '../../data/compass_icon.png';
import gondolaIcon from '../../data/gondola_icon.png';
import priceIcon from '../../data/price_icon.png';
import featuresIcon from '../../data/features_icon.png';

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

      <article className='full-card-container expand'>
        <div>
          <div className='additional-images'>image</div>
          <div className='additional-images'>image</div>
        </div>
        <div className='additional-info'>
          <h3>Beds: 2</h3>
          <h3>Baths: 1.5</h3>
          <h3><img className='icon' src={featuresIcon} alt='location icon'/>features:</h3>
          <ul>
            <li>updated kitchen</li>
            <li>rooftop</li>
            <li>wetbar</li>
            <li>backyard area</li>
            <li>fireplace</li>
          </ul>
        </div>
        <button className='make-reservation-button'>make reservation</button>
      </article>

    </div>
  )

}

export default SmallListingCard;
