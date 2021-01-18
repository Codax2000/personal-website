/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Avionics section of the report, containing the text of my avionics
 * project.
 */

import React from "react";
import { Container } from "react-bootstrap";
import Article from "../templates/Article";
import avionics from "./img/avionics.png";
import wiring from "./img/wiring.jpg";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";

export default function AvionicsReport() {
  return (
    <Container fluid className="report-article">
      <h1 className="text-center">Avionics Package</h1>
      <Article title="Abstract" content={data["abstract"]} />
      <ArticleWithImage
        title={"Methodology"}
        content={data["methodology"]}
        graph={avionics}
        caption={data["captions"]["avionics"]}
      />
      <ArticleWithImage
        title={"Issues"}
        content={data["issues"]}
        graph={wiring}
        caption={data["captions"]["issues"]}
      />
      <Article title={"Results"} content={data["results"]} />
    </Container>
  );
}
