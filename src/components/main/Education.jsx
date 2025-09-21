/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Education section of the homepage.
 */

import { Container, Row, Col } from "react-bootstrap";
import LargeCallout from "../templates/LargeCallout";
import data from "./data.json";

export default function Education() {
  return (
    <Container fluid id="education" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={3}>
            <h2>Education</h2>
          </Col>
          <Col>
            <ul className="list-unstyled">
              {data["schools"].map((item, i) => (
                <LargeCallout key={i} details={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
