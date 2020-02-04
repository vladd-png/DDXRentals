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
      goal: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleChoice = event => {
    // value here is 'on' when clicked
    // need to figure out how to turn all to off and then setState so user can only choose one
    this.setState({ goal: event.target.name })
  }
  render() {
    return (
      <form id='user-login-form'>
        <img src={logo} alt='DDR Xtreme logo' id='logo-img'/>
        <img src={title} alt='DDR Xtreme title' id='title-img'/>
        <div className='user-inputs'>
          <input placeholder='login name' name='name' className='form-input' value={this.state.name} onChange={this.handleChange} autocomplete='off'/>
          <input placeholder='login email' name='email' className='form-input' value={this.state.email} onChange={this.handleChange} autocomplete='off'/>
        </div>
        <div className='user-inputs'>
        <input type='radio' name='business' className='radio-btn' onClick={this.handleChoice} /><span className='btn-label'>Business</span>
          <input type='radio' name='recreational' className='radio-btn' onClick={this.handleChoice} /><span className='btn-label'>Recreational</span>
          <input type='radio' name='extreme' className='radio-btn' onClick={this.handleChoice} /><span className='btn-label'>Extreme</span>
        </div>
        <div className='user-inputs'>
          <button type='button' id='form-btn'>Send It</button>
        </div>
      </form>
    )
  }
}
export default Form;
