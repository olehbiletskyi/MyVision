import React from 'react';
import './MainPart.css';
// import Filters from './Filters/Filters';
// import Logo from './Logo/Logo';
// import Social from './Social/Social';
// import Navbar from './Navbar/Navbar';
// import Copyright from './Copyright/Copyright';

function MainPart() {
  return (
    <div className="MainPart">
        <Home />
        <Work />
        <About />
        <Blog />
        <Copyright />
    </div>
  );
}

export default MainPart;