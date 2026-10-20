/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for my skills. Manages state and maps them to
 * the appropriate skill cards
 */

import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import data from "./data.json";

export default function Skills() {
  return (
    <Container fluid id="skills" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={12} md={3}>
            <h2>My Skills</h2>
          </Col>
          <Col>
            <div className="d-md-none skill-pills">
              {data["skills"].map((item) => (
                <section key={item.title}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <Row className="g-0 d-none d-md-flex">
              {data["skills"].map((item) => (
                <Col key={item.title} xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                  <SkillCard state={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
