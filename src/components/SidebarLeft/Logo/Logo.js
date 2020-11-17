import React from 'react';
import './Logo.css';
import logo from './logo.png';

function Logo() {
  return (
    <div className="Logo">
      {/* <h1 className='main-logo'>БО</h1> */}
      <img src={logo} className='main-logo' />
    </div>
  );
}

export default Logo;