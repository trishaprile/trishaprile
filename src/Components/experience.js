import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import figma from '../img/figma.png';
import adobecc from '../img/adobecc.jpg';
import bootstrap from '../img/bootstrap.png';
import html from '../img/html.png';
import css from '../img/css.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import angular from '../img/angular.png';
import nodejs from '../img/nodejs.png';
import django from '../img/django.jpg';
import graphql from '../img/graphql.png';
import git from '../img/git.png';

class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <h1>my experience</h1>
        <Container className="main">
          <Row>
            <Col xs={10}>
              <div className="jobs">
                <div className="job">
                  <h3>2020 - present</h3>
                  <h2>PeterPortal</h2>
                  <p>Front-End Developer & UI/UX Lead</p>
                </div>
                <div className="job">
                  <h3>2019 - 2020</h3>
                  <h2>Ardent Labs</h2>
                  <p>Software Development Intern</p>
                </div>
                <div className="job">
                  <h3>2019</h3>
                  <h2>Dreams for Schools</h2>
                  <p>App Development Mentor</p>
                </div>
                <div className="job">
                  <h3>2017</h3>
                  <h2>Boeing</h2>
                  <p>Software Development Intern</p>
                </div>
              </div>
            </Col>
            <Col>
              <h2>toolbox</h2>
              <div className="toolbox">
                <Container>
                  <Row xs={3}>
                    <Col><img className="icon" src={figma} alt="Figma"/></Col>
                    <Col><img className="icon" src={adobecc} alt="Adobe Creative Cloud"/></Col>
                    <Col><img className="icon" src={bootstrap} alt="Bootstrap"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={html} alt="HTML"/></Col>
                    <Col><img className="icon" src={css} alt="CSS"/></Col>
                    <Col><img className="icon" src={javascript} alt="Javascript"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={react} alt="React"/></Col>
                    <Col><img className="icon" src={angular} alt="Angular"/></Col>
                    <Col><img className="icon" src={nodejs} alt="NodeJS"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={django} alt="Django"/></Col>
                    <Col><img className="icon" src={graphql} alt="GraphQL"/></Col>
                    <Col><img className="icon" src={git} alt="Git"/></Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="resume"><Button>view resume</Button></div>
      </div>     
    );
  }
}
export default Experience;