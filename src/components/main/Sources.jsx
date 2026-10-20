/**
 * Alex Knowlton
 * 1/17/2021
 */

import { Container, Row, Col } from "react-bootstrap";
import data from "./data.json";

export default function Sources() {
  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h2 className="section-heading">Materials Used</h2>
          </Col>
          <Col>
            <p className="mb-1">{data["sources"]["statement"]}</p>
            {data["sources"]["citations"].map((item, i) => (
              <p key={i} className="mb-0 px-3 citation">
                <span className="meta-label">{item["creator"]}</span>
                <span className="citation-sep">&nbsp;-&nbsp;</span>
                <a href={item["link"]}>{item["name"]}</a>
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
