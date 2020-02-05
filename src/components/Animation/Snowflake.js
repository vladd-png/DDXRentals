import React from 'react';
import snowflake from '../../data/snowflake.png';

const Snowflake = (props) => {
  console.log(props.locationY);
  return (
    <img src={ snowflake } className='fade-in' style={{position:'absolute', top:props.locationX, left:props.locationY + 100}} alt='snowflake animation'/>
  )
}

export default Snowflake;
