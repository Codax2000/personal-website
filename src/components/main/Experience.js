/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Experience section of the homepage.
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LargeCallout from "../templates/LargeCallout";
import data from "./data.json";

export default function Experience() {
  return (
    <Container fluid id="experience" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>Experience</h2>
          </Col>
          <Col>
            <ul className="list-unstyled">
              {data["jobs"].map((item, i) => (
                <LargeCallout key={i} details={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
