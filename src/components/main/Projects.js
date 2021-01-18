/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for handling projects, containing the state and
 * links for each one.
 */
import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import arduino from "./img/arduino.jpg";
import cadd from "./img/cadd.JPG";
import gun from "./img/gun.jpg";
import seismograph from "./img/seismograph.jpg";
import data from "./data.json";

export default function Projects() {
  let images = [arduino, seismograph, cadd, gun];

  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <h2 className="text-center mb-4">Some Things I've Worked On</h2>
        <CardDeck className="d-flex justify-content-around">
          {data["projects"].map((item, i) => (
            <ProjectCard
              key={i}
              image={images[i]}
              name={item.name}
              url={item.url}
              short={item.short}
            />
          ))}
        </CardDeck>
      </Container>
    </Container>
  );
}
