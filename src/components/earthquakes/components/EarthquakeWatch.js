/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Main container for my Earthquake project. Contains
 * initial statement and manages state for the project
 */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import QueryController from "./QueryController";
import QuakeMap from "./QuakeMap";
import Article from "../../templates/Article";
import EarthquakeTable from "./EarthquakeTable";
import about from "../data/about.json";

export default function EarthquakeWatch() {
  const [data, setData] = useState([]);

  return (
    <Container>
      <QueryController setData={setData} />
      <QuakeMap earthquakes={data} />
      <EarthquakeTable overallData={data} />
      <Article title="About This Project" content={about["about"]} id="about" />
      <p className="shoutout">
      To see the code for this project or to see my other projects, visit{" "}
        <a href="https://github.com/Codax2000/earthquake-website">my GitHub</a>{" "}
        or please reach out to me.
      </p>
      <br />
      <br />
    </Container>
  );
}
