import React from 'react';
import map from '../../data/neon-map.png';
import './Map.scss'

const Map = (props) => {
  return (
    <div className='map' name='cap-hill'>
      <img id='map-image' src={ map } alt='neon map of denver with neighborhoods outlined'/>
      <div id='cap-hill' className='active-hood' onMouseEnter={() => props.updateNeighborhoodInfo('Capitol Hill')}></div>
      <div onMouseEnter={() => props.updateNeighborhoodInfo('Lower Highlands')}>
        <div className='active-hood' id='lohi-1' name='lohi'></div>
        <div id='lohi-2'></div>
      </div>
      <div onMouseEnter={() => props.updateNeighborhoodInfo('Park Hill')}>
        <div className='active-hood' name='park-hill' id='park-hill-1'></div>
        <div className='active-hood' name='park-hill' id='park-hill-2'></div>
      </div>
      <div onMouseEnter={() => props.updateNeighborhoodInfo('River North')}>
        <div className='active-hood' name='rino' id='rino-1'></div>
        <div id='rino-2'></div>
        <div id='rino-3'></div>
        <div id='rino-4'></div>
        <div id='rino-5'></div>
      </div>
    </div>
  )
}

export default Map;
