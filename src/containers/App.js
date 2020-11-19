import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import Contacts from './Contacts/Contacts';


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
