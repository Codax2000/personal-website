/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * About Me section of the website, including short personal statement.
 */

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <Container fluid id="about" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>About Me</h2>
          </Col>
          <Col>
            <p>
              I am an electical engineering student and software developer based in Seattle, WA,
              currently attending classes at the University of Washington. I appreciate clean, efficient
              design and have worked on multiple projects in several areas, including research, aircraft
              controls, and full stack web development.
            </p>
            <p>
              In my spare time, I work on learning new libraries and frameworks for Python and JavaScript,
              and I am a TA for the Allen School of Computer Science.
            </p>
          </Col>
          </Row>
      </Container>
    </Container>
  )
}
