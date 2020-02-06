import React from 'react';
import './Animation.scss';
import Snowflake from './Snowflake.js';

const Animation = () => {
  let snowflake = [];
  for (var i = 0; i < 150; i ++) {
    snowflake.push(Math.floor(Math.random() * 1000))
  }
  const flakes = snowflake.map(flake => <Snowflake locationX={flake - 50} locationY={Math.floor(Math.random() * 1500)} key={Math.random()}/>);
  return (
    <div>
      {flakes}
    </div>
  )
}

export default Animation;
