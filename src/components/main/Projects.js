/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for handling projects, containing the state and
 * links for each one.
 */
import React from "react";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import arduino from "./img/arduino.jpg";
import cadd from "./img/cadd.JPG";
import gun from "./img/gun.jpg";
import seismograph from "./img/seismograph.jpg";
import plane from "TODO:";
import cannon from "TODO:";
import transceiver from "TODO:";
import zynet from "TODO:";
import bedframe from "TODO:";
import ros from "TODO:";
import cnc from "TODO:";
import amplifier from "TODO:";
import data from "./data.json";

const nRows = 3;
const nCols = 4;

export default function Projects() {
  let images = [arduino, seismograph, cadd, gun];

  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <h2 className="text-center mb-4">Some Things I've Worked On</h2>
        {Array.from(Array(nRows).keys()).map((item, i) =>
          <Row>
            <CardDeck className="d-flex justify-content-around">
              {data["projects"].slice(nCols * i, nCols * (i + 1)).map((item, j) => (
                <ProjectCard
                  key={i * nRows + j}
                  image={images[i * nRows + j]}
                  name={item.name}
                  url={item.url}
                  short={item.short}
            />
          ))}
        </CardDeck>
          </Row>
        )}
      </Container>
    </Container>
  );
}
