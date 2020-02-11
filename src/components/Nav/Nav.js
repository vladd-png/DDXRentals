import React, { Component } from 'react';
import avatar from '../../data/ski-avatar.png'
import snowflake from '../../data/snowflake-white.png'
import logo from '../../data/DDR-logo.png'
import list from '../../data/list.png'
import map from '../../data/map.png'
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
        <h3 className='welcome-msg'>{`Welcome ${this.props.userData.name} to your ${this.props.userData.value} Adventure`}</h3>
        <div className='user-display'>
          <h3 className='user-info'>{`${this.props.userData.name}`}</h3>
          <h3 className='user-info email'>{`${this.props.userData.email}`}</h3>
        </div>
        <Link to={'/account'}><div className='account-btn'>
          <img className='nav-btn user-info' src={ snowflake } alt='snowflake favorite icon' />
          <h3>Favorites</h3>
        </div></Link>
        <Link to={'/map'}><div className='account-btn'>
          <img className='nav-btn user-info' src={ map } alt='list icon' />
          <h3>Neighborhood</h3>
        </div></Link>
        <Link to={'/listings'}><div className='account-btn'>
          <img className='nav-btn user-info' src={ list } alt='list icon' />
          <h3>All Listings</h3>
        </div></Link>
        <Link to={'/'}><button type='button' className='user-info' id='logout-btn'>Logout</button></Link>
      </nav>
    )
  }
}

export default Nav;
