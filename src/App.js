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
      <Scrollbars autoHide style={{ height: 930 }}>
        <div className="App">
          <Cover/>
          <About/>
          <Work/>
          <Experience/>
          <Contact/>
        </div>
      </Scrollbars>
    );
  }
}
export default App;
