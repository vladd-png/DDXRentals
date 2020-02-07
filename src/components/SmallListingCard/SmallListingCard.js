import React from 'react';
import './SmallListingCard.scss';
import snowflake from '../../data/snowflake.png';
import compassIcon from '../../data/compass_icon.png';
import gondolaIcon from '../../data/gondola_icon.png';
import priceIcon from '../../data/price_icon.png';
import featuresIcon from '../../data/features_icon.png';

const SmallListingCard = (props) => {
  let allFeatures = props.features.map(feature => {
    return <li>{feature}</li>
  })
  return (
    <div className='article-list'>
      <article className='short-card-container'>
        <div className='image-container'>image</div>
        <div className='small-card-details'>
          <h3><img className='icon' src={gondolaIcon} alt='location icon'/>{props.name}</h3>
          <h3><img className='icon' src={compassIcon} alt='location icon'/>{props.address} {props.addressZip}</h3>
          <h3><img className='icon' src={priceIcon} alt='location icon'/>{props.cost} per night</h3>
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
          <h3>Beds: {props.beds}</h3>
          <h3>Baths: {props.baths}</h3>
          <h3><img className='icon' src={featuresIcon} alt='location icon'/>features:</h3>
          <ul>
            {allFeatures}
          </ul>
        </div>
        <button className='make-reservation-button'>make reservation</button>
      </article>

    </div>
  )

}

export default SmallListingCard;
