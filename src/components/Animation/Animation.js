import React from 'react';
import './Animation.scss';
import { snowflake } from '../../data/snowflake.png';

const Animation = () => {
  // let random;
  // let random2;
  // for (var i = 0; i < 30; i++) {
  //   random = (Math.random() * 100);
  //   random2 = (Math.random() * 100);
    // var animate = `<img className='fade-in' src='${snowflake}' alt='snowflake animation' position: absolute top:${random}px left:${random2}px`
  // }
  return (
    <div>
      <img className='fade-in' id='snowflake' src={snowflake} alt='snowflake animation' />
    </div>
  )
}

export default Animation;
