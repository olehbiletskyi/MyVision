import React from 'react';
import './Social.css';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTelegram, FaTwitterSquare, FaYoutube, FaVimeo, FaPinterestSquare, FaStackOverflow, FaBitbucket  } from 'react-icons/fa';
import { SiGmail, SiInstagram, SiSkype, SiWhatsapp, SiMedium } from 'react-icons/si';


function Social() {
    return (
    <div className="Social">
        <a href='https://www.facebook.com/' className='social-icon' target='blank'><FaFacebookSquare/></a>
        <a href='https://twitter.com/?' className='social-icon' target='blank'><FaTwitterSquare/></a>
        <a href='https://www.instagram.com/' className='social-icon' target='blank'><SiInstagram/></a>
        <a href='https://www.pinterest.com/' className='social-icon' target='blank'><FaPinterestSquare/></a>
        <a href='https://www.youtube.com/' className='social-icon' target='blank'><FaYoutube/></a>
        <a href='https://vimeo.com/' className='social-icon' target='blank'><FaVimeo/></a>
        <a href='https://www.skype.com/en/' className='social-icon' target='blank'><SiSkype/></a>
        <a href='https://mail.google.com/' className='social-icon' target='blank'><SiGmail/></a>
        <a href='https://www.whatsapp.com/?' className='social-icon' target='blank'><SiWhatsapp/></a>
        <a href='https://www.linkedin.com/' className='social-icon' target='blank'><FaLinkedin/></a>
        <a href='https://telegram.org/' className='social-icon' target='blank'><FaTelegram/></a>
        <a href='https://github.com/' className='social-icon' target='blank'><FaGithub/></a>
        <a href='https://stackoverflow.com/' className='social-icon' target='blank'><FaStackOverflow/></a>
        <a href='https://bitbucket.org/' className='social-icon' target='blank'><FaBitbucket/></a>
        <a href='https://medium.com/' className='social-icon' target='blank'><SiMedium/></a>
    </div>
  );
}

export default Social;