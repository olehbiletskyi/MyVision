import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Blog from '../components/Blog/Blog';
import Contacts from '../components/Contacts/Contacts';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/homepage" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
            <Route path="/contacts" component={Contacts} />
        </Switch>
    </div>
  );
}
export default App;
