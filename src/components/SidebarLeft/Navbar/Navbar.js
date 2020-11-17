import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
            <Link to="/homepage" className="Navbar-link" activeClassName="active-Navbar-link"> 
                <div className="Navbar-item">
                    Home
                </div>
            </Link>
            <Link to="/work" className="Navbar-link" activeClassName="active-Navbar-link">
                <div className="Navbar-item">
                    Work
                </div>
            </Link>
            <Link to="/about" className="Navbar-link" activeClassName="active-Navbar-link">
                <div className="Navbar-item">
                    About
                </div>
            </Link>
            <Link to="/blog" className="Navbar-link" activeClassName="active-Navbar-link">
                <div className="Navbar-item">
                    Blog
                </div>
            </Link>
            <Link to="/services" className="Navbar-link" activeClassName="active-Navbar-link">
                <div className="Navbar-item">
                    Services
                </div>
            </Link>
            <Link to="/contacts" className="Navbar-link" activeClassName="active-Navbar-link">
                <div className="Navbar-item">
                    Contacts
                </div>
            </Link>
    </nav>
  );
}
export default Navbar;