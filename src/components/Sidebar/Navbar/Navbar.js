import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
            <NavLink to="/homepage"  className="Navbar-link" activeClassName="Navbar-link-active"> 
                <p className="Navbar-link-text">
                    Home
                </p>
            </NavLink>
            <NavLink to="/about" className="Navbar-link" activeClassName="Navbar-link-active">
                <p className="Navbar-link-text">
                    About
                </p>
            </NavLink>
            <NavLink to="/work" className="Navbar-link" activeClassName="Navbar-link-active">
                <p className="Navbar-link-text">
                    Work
                </p>
            </NavLink>
            
            <NavLink to="/blog" className="Navbar-link" activeClassName="Navbar-link-active">
                <p className="Navbar-link-text">
                    Blog
                </p>
            </NavLink>
            <NavLink to="/contacts" className="Navbar-link" activeClassName="Navbar-link-active">
                <p className="Navbar-link-text">
                    Contacts
                </p>
            </NavLink>
    </div>
  );
}
export default Navbar; 