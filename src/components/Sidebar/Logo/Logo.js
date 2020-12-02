import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Logo.css';

function Logo() {
  return (
    <div className="Logo-container">
      {/* <NavLink to="/homepage">
        <img src={logo} className='main-logo' />
      </NavLink> */}
      <a href="/MyVision/about">
        <img src={logo} className='main-logo' />
      </a>
      
    </div>
  );
}

export default Logo;