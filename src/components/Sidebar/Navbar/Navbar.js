import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai'; 
import { BsInfoSquare } from 'react-icons/bs'; 
import { IoIosGitNetwork} from 'react-icons/io'; 
import { GiEarthAfricaEurope } from 'react-icons/gi'; 
import { BsPencil } from 'react-icons/bs'; 



function Navbar() {
  return (
    <div className="Navbar">
            <NavLink to="/homepage"  className="Navbar__link" activeClassName="Navbar__link_active"> 
                <p className="Navbar__link-text">
                    <AiOutlineHome className="Navbar__icon"/> Home
                </p>
            </NavLink>
            <NavLink to="/about" className="Navbar__link" activeClassName="Navbar__link_active">
                <p className="Navbar__link-text">
                    <BsInfoSquare className="Navbar__icon"/> About
                </p>
            </NavLink>
            <NavLink to="/work" className="Navbar__link" activeClassName="Navbar__link_active">
                <p className="Navbar__link-text">
                    <IoIosGitNetwork className="Navbar__icon"/> Works
                </p>
            </NavLink>
            
            <NavLink to="/blog" className="Navbar__link" activeClassName="Navbar__link_active">
                <p className="Navbar__link-text">
                    <GiEarthAfricaEurope className="Navbar__icon"/>  Blog
                </p>
            </NavLink>
            <NavLink to="/contacts" className="Navbar__link" activeClassName="Navbar__link_active">
                <p className="Navbar__link-text">
                    <BsPencil className="Navbar__icon"/> Contacts
                </p>
            </NavLink>
    </div>
  );
}
export default Navbar; 