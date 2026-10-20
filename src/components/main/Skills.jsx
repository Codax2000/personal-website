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

function CategoryIcon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "Languages") {
    return (
      <svg {...common}>
        <path d="M5 4.5 2.5 8 5 11.5M11 4.5 13.5 8 11 11.5M9 3 7 13" />
      </svg>
    );
  }
  if (name === "Libraries") {
    return (
      <svg {...common}>
        <path d="M3 4.5h10M3 8h10M3 11.5h10" />
      </svg>
    );
  }
  if (name === "Tools") {
    return (
      <svg {...common}>
        <path d="M9.5 3.5a2.5 2.5 0 0 0-3.2 3.2L3 10.2 5.8 13l3.5-3.3a2.5 2.5 0 0 0 3.2-3.2L10.8 8.2 7.8 5.2z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="8" cy="8" r="5.25" />
      <path d="M8 5.2v3.1l2 1.2" />
    </svg>
  );
}

export default function Skills() {
  return (
    <Container fluid id="skills" className="front-article">
      <Container className="text-left">
        <Row>
          <Col xs={12} md={3}>
            <h2>My Skills</h2>
          </Col>
          <Col>
            <div className="d-md-none skill-boards">
              {data["skills"].map((item) => (
                <section key={item.title} className="skill-board">
                  <h3>
                    <CategoryIcon name={item.title} />
                    {item.title}
                  </h3>
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
