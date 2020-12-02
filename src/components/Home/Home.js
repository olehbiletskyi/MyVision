import React from 'react';
import './Home.css';
import waka1 from '../../images/waka1.png';


function Home() {
  return (
    <div className="Home">
       <img className="home-img" src={waka1} />
    </div>
  );
}
export default Home;