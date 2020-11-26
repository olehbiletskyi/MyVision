import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import BlogContainer from './BlogContainer';
import ContactsContainer from './ContactsContainer';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <Switch>
            <Route  exact path="/" component={Home} />
            {/* <Route  exact path="/" component={HomeContainer} /> */}
            <Route path="/homepage" component={Home} />
            {/* <Route path="/homepage" component={HomeContainer} /> */}
            <Route path="/about" component={About} />
            {/* <Route path="/about" component={AboutContainer} /> */}
            <Route path="/work" component={Work} />
            {/* <Route path="/work" component={WorkContainer} /> */}
            
            <Route path="/blog" component={BlogContainer} />
            <Route path="/contacts" component={ContactsContainer} />
        </Switch>
    </div>
  );
}
export default App;
