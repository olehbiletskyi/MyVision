import './App.css';
import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About';
import BlogContainer from './BlogContainer';
import ContactsContainer from './ContactsContainer';
import { BsInfoSquare, BsPencil  } from 'react-icons/bs'; 
import { GiEarthAfricaEurope } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Switch>
            <Route  exact path="/" component={About} />
            <Route  exact path="/MyFirstPersonalWebsite" component={About} />
            {/* <Route path="/homepage" component={Home} /> */}
            <Route path="/MyFirstPersonalWebsite/about" component={About} />
            {/* <Route path="/MyVision/work" component={Work} /> */}
            <Route path="/MyFirstPersonalWebsite/blog" component={BlogContainer} />
            <Route path="/MyFirstPersonalWebsite/contacts" component={ContactsContainer} />
        </Switch>
    </div>
  );
}
export default App;


