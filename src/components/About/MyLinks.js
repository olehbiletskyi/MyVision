import React from 'react';
import {FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa'; 
import {SiGmail} from 'react-icons/si' ;
import {VscGithub} from 'react-icons/vsc'; 
import './MyLinks.css';

function MyLinks () {
    return (
        <div className="share-btn-wrapper">
            <div className="share">
                <nav className="nav">
                    <a href='https://t.me/olbiletsky' target="blank"><FaTelegramPlane className='share-btn__icon'/></a>
                    <a href='mailto:ol.biletsky@gmail.com' target="blank"><SiGmail className='share-btn__icon'/></a>
                    <a href='https://www.linkedin.com/in/olegbiletsky/' target="blank"><FaLinkedinIn className='share-btn__icon'/></a>
                    <a href='https://github.com/OlegBiletsky' target="blank"><VscGithub className='share-btn__icon'/></a>
                </nav>
            </div>
        </div>
    )
}
export default MyLinks;
