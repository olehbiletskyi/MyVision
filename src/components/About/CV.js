import React from 'react';
import {FaDownload} from 'react-icons/fa';
import './CV.css';

function CV () {
    return(
        <button type="submit" className="About__downloadCV">
            <span>Download CV </span>
            <FaDownload className="About__downloadCV-icon"/>
        </button>
    )
}
export default CV;

