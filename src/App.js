import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import illustration from './img/me.png';

import Header from './Components/header';
import About from './Components/about';
import Work from './Components/work';
import Experience from './Components/experience';
import Contact from './Components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Work/>
        <Experience/>
        <Contact/>
      </div>
    );
  }
}
export default App;
