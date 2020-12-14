import React from 'react';
import {FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa'; 
import {SiGmail} from 'react-icons/si' ;
import {VscGithub} from 'react-icons/vsc'; 
import './index.css';

function MyLinks () {
    return (
        <div className="share-btn-wrapper">
                <a href='https://t.me/olbiletsky' target="blank" className="share-btn__link">
                    <FaTelegramPlane className='share-btn__icon'/>
                </a>
                <a href='mailto:ol.biletsky@gmail.com' target="blank" className="share-btn__link">
                    <SiGmail className="share-btn__icon"/>
                </a>
                <a href="https://www.linkedin.com/in/olegbiletsky/" target="blank" className="share-btn__link">
                    <FaLinkedinIn className="share-btn__icon"/>
                </a>
                <a href="https://github.com/OlegBiletsky" target="blank" className="share-btn__link">
                    <VscGithub className="share-btn__icon"/>
                </a>
        </div>
    )
}
export default MyLinks;
