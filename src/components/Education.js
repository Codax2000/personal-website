/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Education section of the homepage.
 */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import School from './School';

export default function Education() {
  const [state] = useState([
    {
      "school": "University of Washington",
      "degree": "B.S. in Electrical Engineering (IP), Statistics Minor (IP)",
      "date": "September 2019 - June 2023"
    },
    {
      "school": "Glacier Peak High School",
      "degree": "High School Degree, Valedictorian, National Merit Letter of Recommendation",
      "date": "September 2015 - June 2019"
    }
  ]);

  return (
    <Container fluid id="education" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>
              Education
            </h2>
          </Col>
          <Col>
            <ul className="list-unstyled">
              {state.map((item, i) => <School key={i} details={item} />)}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
