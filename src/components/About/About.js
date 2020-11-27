import React from 'react';
import './About.css';
import portrait from './portrait601.JPG';
import portrait1 from './portrait602.JPG';
import portrait2 from './portrait603.JPG';
import stamp from './stamp.png';
import {FaDownload, FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa'; 
import {SiGmail} from 'react-icons/si' ;
import {VscGithub} from 'react-icons/vsc'; 
import {GiClick} from 'react-icons/gi';

function About() {
  return (
    <div className="About-wrapper">
        <div className="About">
             <div className="About-col1">
                <img src={portrait2} className="About__portrait" />
                <div className="About__writeMe">

                </div> 
            </div>
            <div className="About-col2">
                <div className="About__title">Frontend Software Engineer. React / JavaScript Developer</div> 
                <div className="About__name">Oleg Biletsky</div>
                <div className="About__description-wrapper">
                    <div className="About__description">
                        <p>Hi! I am Oleg Biletsky, a junior frontend software developer.</p>
                        <p> I enjoy creating beautifully designed, intuitive and functional websites.  I have a great desire to do programming. My main characteristics: analytical and logical thinking, attention to details, methodical and thorough approach to achieving tasks, responsibility, commitment to the goal and focus on good result.</p>
                        <p>I hope you love the site, and if there's anything you want to talk about with me feel free to drop me a line by email. I'm happy to hear your comments, feedback, suggestions, or just say hi!</p>
                    </div>
                    <img className="About__stamp" src={stamp} rotate="90"/>
                </div>
               
                <button type="submit" className="About__downloadCV">Download CV <FaDownload/></button>
            </div>
        </div>





        



        <div className="share-btn-wrapper">
            <div className="share">
                <span></span>
                <nav className="nav">
                    <a href='#'><i className='share-btn__1'><FaTelegramPlane className='share-btn__icon'/></i></a>
                    <a href='#'><i className='share-btn__2'><SiGmail className='share-btn__icon'/></i></a>
                    <a href='#'><i className='share-btn__3'><FaLinkedinIn className='share-btn__icon'/></i></a>
                    <a href='#'><i className='share-btn__4'><VscGithub className='share-btn__icon'/></i></a>
                </nav>
            </div>
        </div>
        




 
    </div>
  );
}
export default About;