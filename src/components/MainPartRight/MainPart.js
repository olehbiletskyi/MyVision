import React from 'react';
import { Switch, Route } from "react-router-dom";
import './MainPart.css';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import Contacts from './Contacts/Contacts';

function MainPart() {
  return (
    <div className="MainPart">
        <Switch>
            <Route path="/homepage" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
            <Route path="/contacts" component={Contacts} />
        </Switch>
    </div>
  );
}

export default MainPart;