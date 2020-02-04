import React, { Component } from 'react';
import logo from '../../data/DDR-logo.png';
import title from '../../data/DDR-title.png';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      value: '',
      check: false
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleChoice = event => {
    // value here is 'on' when clicked
    // need to figure out how to turn all to off and then setState so user can only choose one
    // console.log(prevState);
    console.log(event);
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form id='user-login-form'>
        <img src={logo} alt='DDR Xtreme logo' id='logo-img'/>
        <img src={title} alt='DDR Xtreme title' id='title-img'/>
        <div className='user-inputs'>
          <input placeholder='Name' name='name' className='form-input' value={this.state.name} onChange={this.handleChange} autoComplete='off'/>
          <input placeholder='Email' name='email' className='form-input' value={this.state.email} onChange={this.handleChange} autoComplete='off'/>
        </div>
        <div className='user-inputs dropdown'>
          <h2 className=''>Choose Your Adventure Type</h2>
          <select onChange={this.handleChoice} className='btn-label' value={this.state.value}>
            <option value='business'>Business</option>
            <option value='recreational'>Recreational</option>
            <option value='extreme'>Xtreme</option>
          </select>
        </div>
        <div className='user-inputs'>
          <button type='button' id='form-btn'>Send It</button>
        </div>
      </form>
    )
  }
}
export default Form;
