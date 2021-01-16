/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Container for handling projects, containing the state and
 * links for each one.
 */
import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import arduino from "../img/arduino.jpg";
import cadd from "../img/cadd.JPG";
import gun from "../img/gun.jpg";
import seismograph from "../img/seismograph.jpg";

export default function Projects() {
  let projects = [
    {
      "name": "Controls",
      "url": "./controls",
      "short": "Aircraft controls for competition RC aircraft using Arduino",
      "image": arduino
    },
    {
      "name": "EarthquakeWatch",
      "url": "./earthquakewatch",
      "short": "Earthquake monitor with RSS feed and interactive chart",
      "image": seismograph
    },
    {
      "name": "CADathon",
      "url": "./cadd",
      "short": "Winning entry for 3D design competition with SolidWorks",
      "image": cadd
    },
    {
      "name": "Guns and States",
      "url": "./guns",
      "short": "Research into gun violence across the US with Python",
      "image": gun
    }
  ]

  return (
    <Container fluid id="projects" className="front-article">
      <h2 className="mb-4">Some Things I've Worked On</h2>
      <Container>
        <CardDeck className="d-flex justify-content-center">
          { projects.map((item, i) => <ProjectCard key={i} image={item.image} name={item.name}
            url={item.url} short={item.short} />) }
        </CardDeck>
      </Container>
    </Container>
  )
}
