/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for handling projects, containing the state and
 * links for each one.
 */
import React from "react";
import { Container, CardDeck, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import arduino from "./img/arduino.jpg";
import cadd from "./img/cadd.jpg";
import seismograph from "./img/seismograph.jpg";
import plane from "./img/plane.jpg";
import cannon from "./img/cannon.jpg";
import transceiver from "./img/transceiver.jpg";
import zynet from "./img/cnn.jpg";
import bedframe from "./img/bed.jpg";
import cnc from "./img/chess.jpg";
import amplifier from "./img/amplifier.jpg";
import data from "./data.json";
import processor from "./img/processor.jpg";
import adc_sims from "./img/setanddown.jpg";

const nRows = 3;
const nCols = 4;

export default function Projects() {
  let images = [arduino, seismograph, cadd, plane, cannon, transceiver,
                zynet, bedframe, cnc, amplifier, processor, adc_sims];

  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <h2 className="text-center mb-4">Some Things I've Worked On</h2>
        {Array.from(Array(nRows).keys()).map((item, i) =>
          <Row>
            <CardDeck className="d-flex justify-content-around mb-5">
              {data["projects"].slice(nCols * i, nCols * (i + 1)).map((item, j) => (
                <ProjectCard
                  key={i * nRows + j}
                  image={images[i * nCols + j]}
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
