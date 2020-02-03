import React from 'react';
import logo from '../../images/DDR-logo.png';
import './Form.css';

const Form = () => {
  return (
    <form>
      <img src={logo} />
      <input value='name' placeholder='user login name' />
      <input value='email' placeholder='user login email' />
    </form>
  )
}

export default Form;
