import React from 'react';
import './About.css';
import portrait from './portrait601.JPG';
import {FaDownload, FaTelegram, FaLinkedinIn, FaGithub, FaStamp} from 'react-icons/fa' 
import {SiGmail} from 'react-icons/si' 

function About() {
  return (
    <div className="About-wrapper">
        <div className="About">
             <div className="About-col1">
                <img src={portrait} className="About__portrait"/>
                <div className="About__writeMe">
                    <FaTelegram/> 
                    <SiGmail/> 
                    <FaLinkedinIn/>
                    <FaGithub/> 
                </div> 
            </div>
            <div className="About-col2">
                <div className="About__title">Frontend Software Engineer. React / JavaScript Developer</div> 
                <div className="About__name">Oleg Biletsky</div>
                <div className="About__description">Hi! I am Oleg Biletsky, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites. </div>
                <div className="About__signature"><FaStamp/></div>
            </div>
        </div>

        <button type="submit" className="About__downloadCV">Download CV <FaDownload/></button>
 
    </div>
  );
}
export default About;