import React, { Component } from 'react';
import logo from '../../data/DDR-logo.png';
import title from '../../data/DDR-title.png';
import './Form.css';
import { Redirect } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      value: 'business',
      formCompleted: false,
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleChoice = event => {
    this.setState({ value: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.saveUserData(this.state)
    this.setState({ formCompleted: true })
  }

  render() {

    return (
      <main className='app-home'>
      {this.state.formCompleted && <Redirect to={{pathname: "/map"}}/>}
      <form id='user-login-form' onSubmit={this.onSubmit}>
        <img src={logo} alt='DDR Xtreme logo' id='logo-img'/>
        <img src={title} alt='DDR Xtreme title' id='title-img'/>
        <div className='user-inputs'>
          <input required placeholder='Name' name='name' className='form-input' value={this.state.name} onChange={this.handleChange} autoComplete='off'/>
          <input required type='email' placeholder='Email' name='email' className='form-input' value={this.state.email} onChange={this.handleChange} autoComplete='off'/>
        </div>
        <div className='user-inputs dropdown'>
          <h2 className=''>Choose Your Adventure Type</h2>
          <select onChange={this.handleChoice} className='btn-label' value={this.state.value}>
            <option value='Business'>Business</option>
            <option value='Recreational'>Recreational</option>
            <option value='EXTREME'>Xtreme</option>
          </select>
        </div>
        <div className='user-inputs'>
          <input type='submit' id='form-btn' value="Send it!" />
        </div>
      </form>
      </main>
    )
  }
}

export default Form;
