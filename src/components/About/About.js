import React from 'react';
import {FaDownload, } from 'react-icons/fa'; 
import portrait1 from '../../images/portrait601.JPG';
import portrait2 from '../../images/portrait602.JPG';
import portrait3 from '../../images/portrait603.JPG';
import stamp from '../../images/stamp.png';
import MyLinks from './MyLinks';
import CV from './CV';
import './About.css';


function About() {
  return (
    <div className="About-wrapper">
        <div className="About">

             <div className="About-col1">
                <img src={portrait1} className="About__portrait" />
                <MyLinks/>
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
                <CV/>
            </div>

        </div>


        
        
 
    </div>
  );
}
export default About;