import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import illustration from '../img/me1.png';

class Header extends Component {
  render() {
    return (
      <div id="header">
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
    );
  }
}
export default Header;