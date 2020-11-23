import React from 'react';
import './Social.css';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTelegram, FaTwitterSquare, FaYoutube, FaVimeo, FaPinterestSquare, FaStackOverflow, FaBitbucket  } from 'react-icons/fa';
import { SiGmail, SiInstagram, SiSkype, SiWhatsapp, SiMedium } from 'react-icons/si';


function Social() {
    return (
        <>

        <div className="Filters">
            <h2><p>Connect and chat:</p></h2>
        </div>
        <div className="Social">
            <a href='https://www.facebook.com/' className='social-icon facebook' target='blank'><FaFacebookSquare/></a>
            <a href='https://twitter.com/' className='social-icon twitter' target='blank'><FaTwitterSquare/></a>
            <a href='https://www.instagram.com/' className='social-icon instagram' target='blank'><SiInstagram/></a>
            <a href='https://www.pinterest.com/' className='social-icon pinterest' target='blank'><FaPinterestSquare/></a>
            <a href='https://www.youtube.com/' className='social-icon youtube' target='blank'><FaYoutube/></a>
            <a href='https://vimeo.com/' className='social-icon vimeo' target='blank'><FaVimeo/></a>
            <a href='https://www.skype.com/en/' className='social-icon skype' target='blank'><SiSkype/></a>
            <a href='https://mail.google.com/' className='social-icon gmail' target='blank'><SiGmail/></a>
            <a href='https://www.whatsapp.com/' className='social-icon whatsapp' target='blank'><SiWhatsapp/></a>
            <a href='https://www.linkedin.com/' className='social-icon linkedin' target='blank'><FaLinkedin/></a>
            <a href='https://telegram.org/' className='social-icon telegram' target='blank'><FaTelegram/></a>
            <a href='https://github.com/' className='social-icon github' target='blank'><FaGithub/></a>
            <a href='https://stackoverflow.com/' className='social-icon stackoverflow' target='blank'><FaStackOverflow/></a>
            <a href='https://bitbucket.org/' className='social-icon bitbucket' target='blank'><FaBitbucket/></a>
            <a href='https://medium.com/' className='social-icon medium' target='blank'><SiMedium/></a>
        </div>

        </>
        
       
  );
}

export default Social;