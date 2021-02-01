import React, { Component } from 'react';
import './cover.css';
import NavigationBar from './navbar';

import { Container } from 'react-bootstrap';

class Cover extends Component {
  render() {
    return (
      <div id="cover">
        <NavigationBar />
        <Container className="cover-container">
          <h1 className="intro-title">Hello! I'm Trisha,</h1>
          <h3 className="intro-subtitle">a designer and developer who enjoys creating impactful experiences, from ideation to execution.</h3>
        </Container>
      </div>     
    );
  }
}
export default Cover;