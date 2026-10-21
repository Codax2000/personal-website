/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Container for handling projects, containing the state and
 * links for each one.
 */

import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import arduino from "./img/arduino.jpg";
import cadd from "./img/cadd.jpg";
import seismograph from "./img/seismograph.jpg";
import bandgap from "./img/bandgap.jpg";
import cannon from "./img/cannon.jpg";
import transceiver from "./img/transceiver.jpg";
import zynet from "./img/cnn.jpg";
import bedframe from "./img/bed.jpg";
import cnc from "./img/chess.jpg";
import amplifier from "./img/amplifier.jpg";
import data from "./data.json";
import processor from "./img/processor.jpg";
import adc_sims from "./img/noise_shaping.jpg";
import revolvers from "./img/gun.jpg"
import lstm from "./img/lstm_plot.jpg"
import constellation from "./img/constellation.jpg"
import ns_sar from "./img/ns_sar_adc.jpg"

export default function Projects() {
  const images = [ns_sar, lstm, constellation, adc_sims, processor, zynet, transceiver, amplifier, bandgap, arduino, cannon,
                revolvers, cnc, seismograph, cadd, bedframe];

  // Cards with "hidden": true stay in data.json (and their image stays at the
  // same index here) but are not shown. Remove the flag to show the card again.
  const visibleProjects = data["projects"]
    .map((item, i) => ({ item, image: images[i] }))
    .filter(({ item }) => !item.hidden);

  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <h2 className="text-center mb-4">Some Things I've Worked On</h2>
        <div className="project-grid">
          {visibleProjects.map(({ item, image }) => (
            <ProjectCard
              key={item.url}
              image={image}
              name={item.name}
              url={item.url}
              short={item.short}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}
