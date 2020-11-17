import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Filters from './Filters';
import Logo from './Logo';



function App() {
  return (
    <div className="App">
        <Logo />
        <Sidebar />
        <Filters />
    </div>
  );
}

export default App;
