import React from 'react';
import {FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa'; 
import {SiGmail} from 'react-icons/si' ;
import {VscGithub} from 'react-icons/vsc'; 
import './MyLinks.css';

function MyLinks () {
    return (
        <div className="share-btn-wrapper">
            <div className="share">
                <span></span>
                <nav className="nav">
                    <a href='https://t.me/olbiletsky' target="blank"><i className='share-btn__1'><FaTelegramPlane className='share-btn__icon'/></i></a>
                    <a href='mailto:ol.biletsky@gmail.com' target="blank"><i className='share-btn__2'><SiGmail className='share-btn__icon'/></i></a>
                    <a href='https://www.linkedin.com/in/olegbiletsky/' target="blank"><i className='share-btn__3'><FaLinkedinIn className='share-btn__icon'/></i></a>
                    <a href='https://github.com/OlegBiletsky' target="blank"><i className='share-btn__4'><VscGithub className='share-btn__icon'/></i></a>
                </nav>
            </div>
        </div>
    )
}
export default MyLinks;
