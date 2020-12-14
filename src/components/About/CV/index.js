import React from 'react';
import {FaDownload} from 'react-icons/fa';
import './index.css';

function CV () {
    return(
        <a type="submit" href="https://drive.google.com/u/0/uc?id=1e5n-pDTY99w7gwOn2Ecixc-QGYtDocgz&export=download" target="blank" className="About__downloadCV">
            <span>Download CV </span>
            <FaDownload className="About__downloadCV-icon"/>
        </a>
    )
}
export default CV;

