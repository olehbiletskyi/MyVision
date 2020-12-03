import './App.css';
import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/About';
import BlogContainer from './BlogContainer';
import ContactsContainer from './ContactsContainer';
import { BsInfoSquare, BsPencil  } from 'react-icons/bs'; 
import { GiEarthAfricaEurope } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
        <Sidebar />


        <nav role="navigation">
            <div id="menuToggle">

                <input type="checkbox" className="menu-cross"/>
                <span></span>
                <span></span>
                <span></span>

                
                <ul id="menu">
                


                    <NavLink to="/MyVision/about" className="menuToggle-NavLink" activeClassName="">
                        <BsInfoSquare className="menu-icon"/> <p>About</p>
                    </NavLink>




                    <NavLink to="/MyVision/blog" className="menuToggle-NavLink" activeClassName="">
                        <GiEarthAfricaEurope className="menu-icon"/>  <p>Blog</p>
                    </NavLink>




                    <NavLink to="/MyVision/contacts" className="menuToggle-NavLink" activeClassName="">
                        <BsPencil className="menu-icon"/> <p>Contacts</p>
                    </NavLink>




                </ul>

            </div>
        </nav>



        <Switch>
            <Route  exact path="/" component={About} />
            <Route  exact path="/MyVision" component={About} />
            {/* <Route path="/homepage" component={Home} /> */}
            <Route exact path="/MyVision/about" component={About} />
            <Route path="/MyVision/about" component={About} />
            {/* <Route path="/MyVision/work" component={Work} /> */}
            
            <Route path="/MyVision/blog" component={BlogContainer} />
            <Route path="/MyVision/contacts" component={ContactsContainer} />
        </Switch>
    </div>
  );
}
export default App;


