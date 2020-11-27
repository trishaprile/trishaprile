import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

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

              </div>
            </Col>
          </Row>
        </Container>
        <Button>view resume</Button>
      </div>     
    );
  }
}
export default Experience;