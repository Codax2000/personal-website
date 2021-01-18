/**
 * Alex Knowlton
 * 9/15/2020
 *
 * About Me section of the website, including short personal statement.
 */

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import data from "./data.json";

export default function About() {
  return (
    <Container fluid id="about" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>About Me</h2>
          </Col>
          <Col>
            {data["statement"].map((item, i) => (
              <p key={1}>{item}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
