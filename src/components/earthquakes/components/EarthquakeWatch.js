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
import Article from "../../report-templates/Article";
import EarthquakeTable from "./EarthquakeTable";

export default function EarthquakeWatch() {
  const [data, setData] = useState([]);
  const aboutContent = {
    title: "About This Project",
    content: [
      "I developed this project to learn more about React.js, D3.js, and Spring Boot. " +
        "The data vizualization can be panned and zoomed, and most of the countries can " +
        "be clicked, and the vizualization will be zoomed to a bounding box. This is not perfect, " +
        "and I am not entirely sure why. Since it appears random as to whether a country can be " +
        "clicked or not, I suspect it is due to the topojson file I am using to plot the countries." +
        " The scatterplot on the bottom also has brushing that filters what is shown on the map. " +
        "The data is fetched via a rest API that communicates with the database, and queries " +
        "based on the parameters specified in the form at the top of the page.",
      "The website employs elements of multiple examples from the D3.js documentation, which I " +
        "adapted for my own use. It uses the USGS earthquake feed to build up a MongoDB database, " +
        "which is hosted on Microsoft Azure. The website is also hosted on Azure, as it makes " +
        "sense to me to deploy the app where the database is located.",
    ],
  };

  return (
    <Container>
      <QueryController setData={setData} />
      <QuakeMap earthquakes={data} />
      <EarthquakeTable overallData={data} />
      <Article
        title={aboutContent.title}
        content={aboutContent.content}
        id="about"
      />
      <p className="shoutout">
        To see the code for this project or to see my other projects, visit{" "}
        <a href="https://github.com/Codax2000/earthquake-website">my GitHub</a>{" "}
        or please reach out to me.
      </p>
    </Container>
  );
}
