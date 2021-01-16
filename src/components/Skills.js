/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Container for my skills. Manages state and maps them to
 * the appropriate skill cards
 */
import React, { useState } from 'react';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';

export default function Skills() {
  const [state] = useState([
    {
      "title": "Languages",
      "skills": [
        "HTML & CSS",
        "JavaScript",
        "Python",
        "Java",
        "SQL"
      ]
    },
    {
      "title": "Libraries",
      "skills": [
        "Scikit-Learn",
        "Matplotlib",
        "Express",
        "Node.js",
        "React.js",
        "Pandas",
        "Flask",
      ]
    },
    {
      "title": "Tools",
      "skills": [
        "Git & GitHub",
        "SolidWorks",
        "Git Bash",
        "Anaconda",
        "Postman",
        "HSMworks",
        "Slack"
      ]
    },
    {
      "title": "Engineering",
      "skills": [
        "Problem Decomposition",
        "Data Visualization",
        "Iterative Design",
        "Data Analysis",
        "Prototyping",
        "Teamwork"
      ]
    }
  ]);

  return (
    <Container fluid id="skills" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>My Skills</h2>
          </Col>
          <Col>
            <CardGroup className="d-flex justify-content-center">
              { state.map((item, i) => <SkillCard key={i} state={item} />) }
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
