import React, { Component } from 'react';
import avatar from '../../data/ski-avatar.png'
import snowflake from '../../data/snowflake.png'
import logo from '../../data/DDR-logo.png'
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <nav className='nav-bar'>
        <Link to={`/`}><img className='logo-img' src={ logo } alt='DDR logo' /></Link>
        <h3 className='welcome-msg'>{`Welcome ${this.props.userData.name}! Thanks for choose DDR for your ${this.props.userData.value} Adventure`}</h3>
        <div className='user-display'>
          <h3 className='user-info'>{`${this.props.userData.name}`}</h3>
          <h3 className='user-info'>{`${this.props.userData.email}`}</h3>
        </div>
        <img className='avatar-img user-info' src={ avatar } alt='winter avatar with beanie and goggles' />
        <button type='button' className='user-info' id='logout-btn'>Logout</button>
        <img className='snowflake user-info' src={ snowflake } alt='snowflake favorite icon' />
      </nav>
    )
  }
}

export default Nav;
