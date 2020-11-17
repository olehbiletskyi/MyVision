import React from 'react';
import './Sidebar.css';
import Filters from './Filters/Filters';
import Logo from './Logo/Logo';
import Social from './Social/Social';
import Navbar from './Navbar/Navbar';
import Copyright from './Copyright/Copyright';

function Sidebar() {
  return (
    <div className="Sidebar">
        <Logo />
        <Navbar />
        <Filters />
        <Social />
        <Copyright />
    </div>
  );
}

export default Sidebar;