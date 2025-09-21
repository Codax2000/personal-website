/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for my skills. Manages state and maps them to
 * the appropriate skill cards
 */

import { Container, CardGroup, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import data from "./data.json";

export default function Skills() {
  return (
    <Container fluid id="skills" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>My Skills</h2>
          </Col>
          <Col>
            <CardGroup className="d-flex justify-content-center">
              {data["skills"].map((item, i) => (
                <SkillCard key={i} state={item} />
              ))}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
