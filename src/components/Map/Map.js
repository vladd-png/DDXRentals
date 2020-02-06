import React from 'react';
import map from '../../data/neon-map.png';
import './Map.scss'


const Map = () => {
  return (
    <div className='map'>
      <img id='map-image' src={ map } alt='neon map of denver with neighborhoods outlined'/>
      <div id='cap-hill' className='active-hood'></div>
      <div>
        <div className='active-hood' id='lohi-1'></div>
        <div id='lohi-2'></div>
      </div>
      <div>
        <div className='active-hood' id='park-hill-1'></div>
        <div className='active-hood' id='park-hill-2'></div>
      </div>
      <div >
        <div className='active-hood' id='rino-1'></div>
        <div id='rino-2'></div>
        <div id='rino-3'></div>
        <div id='rino-4'></div>
        <div id='rino-5'></div>
      </div>
    </div>
  )
}

export default Map;
