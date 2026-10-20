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

  return (
    <Container fluid id="projects" className="front-article">
      <Container>
        <h2 className="section-heading text-center mb-4">Some Things I've Worked On</h2>
        <div className="project-grid">
          {data["projects"].map((item, i) => (
            <ProjectCard
              key={item.url}
              image={images[i]}
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
