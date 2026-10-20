/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Experience section of the homepage.
 */
import { Container, Row, Col } from "react-bootstrap";
import LargeCallout from "../templates/LargeCallout.jsx";
import data from "./data.json";

export default function Experience() {
  return (
    <Container fluid id="experience" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={12} md={3}>
            <h2>Experience</h2>
          </Col>
          <Col>
            <div className="d-md-none experience-timeline">
              {data["jobs"].map((item) => (
                <article key={item.main + item.date} className="timeline-item">
                  <p className="timeline-date">{item.date}</p>
                  <h3 className="timeline-company">{item.main}</h3>
                  <p className="timeline-role">{item.details}</p>
                </article>
              ))}
            </div>
            <ul className="list-unstyled d-none d-md-block">
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
