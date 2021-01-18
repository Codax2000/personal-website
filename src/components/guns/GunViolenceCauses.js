import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import embed from "vega-embed";
import income from "./json_plots/vs_income.vg.json";
import population from "./json_plots/vs_pop.vg.json";
import licensees from "./json_plots/vs_licensees.vg.json";
import data from "./data.json";

export default function GunViolenceCauses() {
  useEffect(() => {
    const GRAPHS = [population, income, licensees];
    for (let i = 0; i < GRAPHS.length; i++) {
      embed(`#${data["causes"]["correlation-graphs"][i]["id"]}`, GRAPHS[i]);
    }
  }, []);

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>What Causes Gun Violence?</h2>
        {data["causes"]["intro"].map((item, i) => (
          <p className="text-left" key={i + 10}>
            {item}
          </p>
        ))}
        <Container>
          <Row>
            {data["causes"]["correlation-graphs"].map((item, i) => (
              <Col key={i}>
                <div id={item["id"]} />
                <figcaption className="text-muted mb-4">
                  {`Fig. 4.${i + 1} - # of Incidents vs. ${item["caption"]}`}
                </figcaption>
              </Col>
            ))}
          </Row>
        </Container>
        {data["causes"]["graph-analysis"].map((item, i) => (
          <p className="text-left" key={i}>
            {item}
          </p>
        ))}
        <Row>
          <Col className="pl-0">
            {data["causes"]["ml-analysis"].map((item, i) => (
              <p className="text-left" key={i}>
                {item}
              </p>
            ))}
          </Col>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Input(s)</th>
                  <th>Mean Squared Error</th>
                </tr>
              </thead>
              <tbody>
                {data["causes"]["ml-results"].map((d, i) => (
                  <tr key={i}>
                    <td className="text-left">{d["input"]}</td>
                    <td>{d["mse"]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <figcaption className="text-muted mb-4">
              Table 4.1 - Machine Learning Features with Mean Squared Error
            </figcaption>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
