import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
            <NavLink to="/homepage"  className="Navbar-link" activeClassName="active-Navbar-link"> 
                <p className="Navbar-item">
                    Home
                </p>
            </NavLink>
            <Link to="/about" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    About
                </p>
            </Link>
            <NavLink to="/work" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Work
                </p>
            </NavLink>
            
            <Link to="/blog" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Blog
                </p>
            </Link>
            <Link to="/services" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Services
                </p>
            </Link>
            <Link to="/contacts" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Contacts
                </p>
            </Link>
    </nav>
  );
}
export default Navbar; 