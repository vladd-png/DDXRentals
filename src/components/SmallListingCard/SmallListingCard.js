import React, { Component } from 'react';
import './SmallListingCard.scss';
import snowflake from '../../data/snowflake.png';
import compassIcon from '../../data/compass_icon.png';
import gondolaIcon from '../../data/gondola_icon.png';
import priceIcon from '../../data/price_icon.png';
import featuresIcon from '../../data/features_icon.png';

class SmallListingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardExpand: false
    }
  }

  expandCard = () => {
    this.setState({cardExpand: !this.state.cardExpand})
  }

  allFeatures = () => this.props.features.map(feature => {
    return <li>{feature}</li>
  })

  render() {

    let cardState = this.state.cardExpand ? '' : 'expand';

    return (
    <div className='article-list'>
      <article className='short-card-container'>
        <img src={process.env.PUBLIC_URL + `/images/${this.props.id}_a.jpg`} alt='Listing' className='image-container'/>
        <div className='small-card-details'>
          <h3 id='location-name'><img className='icon' src={gondolaIcon} alt='location icon'/>{this.props.name}</h3>
          <h3><img className='icon' src={compassIcon} alt='location icon'/>{this.props.address} {this.props.addressZip}</h3>
          <h3><img className='icon' src={priceIcon} alt='location icon'/>{this.props.cost} per night</h3>
        </div>
        <div className='card-buttons'>
          <img type='button' className='fav-icon' src={snowflake} alt='snowflake'/>
          <button className='view-listing-button' onClick={this.expandCard.bind(this)}>view details</button>
        </div>
      </article>

      <article className={`full-card-container ${cardState}`}>
        <div className='additional-images-container'>
          <img src={process.env.PUBLIC_URL + `/images/${this.props.id}_b.jpg`} alt='Listing' className='additional-images'/>
          <img src={process.env.PUBLIC_URL + `/images/${this.props.id}_c.jpg`} alt='Listing' className='additional-images'/>
        </div>
        <div className='additional-info'>
          <h3>Beds: {this.props.beds}</h3>
          <h3>Baths: {this.props.baths}</h3>
          <h3><img className='icon' src={featuresIcon} alt='location icon'/>features:</h3>
          <ul>
            {this.allFeatures}
          </ul>
        </div>
        <button className='make-reservation-button'>make reservation</button>
      </article>

    </div>
  )

}

}

export default SmallListingCard;
