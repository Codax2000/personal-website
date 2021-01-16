/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Experience section of the homepage.
 */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
export default function Experience() {
  const [state] = useState([
    {
      company: "University of Washington Allen School",
      position: "Computer Science TA",
      date: "March 30, 2020 - Present",
    },
    {
      company: "Design, Build, Fly at University of Washington",
      position: "Avionics Lead",
      date: "January 5, 2019 - March 30, 2020",
    },
    {
      company: "Varsity Tutors",
      position: "Mathematics Tutor",
      date: "June 30, 2019 - January 30, 2020",
    },
  ]);

  return (
    <Container fluid id="experience" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>Experience</h2>
          </Col>
          <Col>
            <ul className="list-unstyled">
              {state.map((item, i) => (
                <Job key={i} details={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
