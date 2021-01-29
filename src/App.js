import React, { Component } from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

import Cover from './Components/cover';
import About from './Components/about';
import Work from './Components/work';
import Experience from './Components/experience';
import Contact from './Components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <About/>
        <Work/>
        <Experience/>
        <Contact/>
      </div>
    );
  }
}
export default App;
