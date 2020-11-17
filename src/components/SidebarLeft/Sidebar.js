import React from 'react';
// import './Sidebar.css';
import Filters from './Filters';
import Logo from './Logo';
import Social from './Social';
import Navbar from './Navbar';

function Sidebar() {
  return (
    <div className="Sidebar">
        <Logo />
        <Navbar />
        <Filters />
        <Social />
    </div>
  );
}

export default Sidebar;