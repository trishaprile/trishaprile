import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import illustration from './img/me.png';

function App() {
  return (
    <div id="portfolio">
      <div className="cover">
        <header>
          <Navbar variant="dark">
            <Navbar.Brand className="logo" style={{fontSize: 28}} href="#portfolio">trishaprile</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"/>
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link className='navBarLink' href="#about">about</Nav.Link>
                <Nav.Link className='navBarLink' href="#work">work</Nav.Link>
                <Nav.Link className='navBarLink' href="#experience">experience</Nav.Link>
                <Nav.Link className='navBarLink' href="#contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className="introduction">
          <h1>Hello!</h1>
          <h2>I'm Trisha,</h2>
          <h3>a developer and designer who enjoys creating impactful experiences.</h3>
        </div>
        <img className="illustration" src={illustration} alt="Me"/>
      </div>
  
      <div id="about">
        <h1>about</h1>
        <p>I’m a 20 year old student (she/her) from Orange County, California who aspires to be an innovative creator in the field of technology.
        Currently, I am pursuing a B.S. in Informatics with a minor in Education at the University of California, Irvine. My major involves the study and practice of human 
        computer interaction, software design, and human behavior with an emphasis on people and design.
        I’m passionate about software development, UI/UX design and research, and project management with a focus on education, accessibility, and human-centered design.
        In my free time, I enjoy journaling, hiking, playing games, watching films, and discovering new places.</p>
      </div>
    </div>
  );
}

export default App;
