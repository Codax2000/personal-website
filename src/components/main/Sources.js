/**
 * Alex Knowlton
 * 1/17/2021
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data.json";

export default function Sources() {
  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <Row>
          <Col xs={3}>
            <h2>Materials Used</h2>
          </Col>
          <Col>
            <p className="mb-1">{data["sources"]["statement"]}</p>
            {data["sources"]["citations"].map((item, i) => (
              <p className="mb-0 px-3">
                {item["creator"]}&nbsp;-&nbsp;
                <a href={item["link"]}>{item["name"]}</a>
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
