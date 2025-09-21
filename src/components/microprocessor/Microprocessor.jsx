/**
 * Alex Knowlton
 * 4/21/2024
 *
 * Section that details a UM bandgap reference
 */
import React from "react";
import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";
import schematic from './img/schematic.jpg';
import layout from './img/layout.jpg';
import final_simulation from './img/simulation.jpg';

export default function Microprocessor() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">A 2-stage RISC Microprocessor</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={schematic}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["design"]["title"]}
          content={data["design"]["content"]}
          graph={layout}
          caption={data["design"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={final_simulation}
          caption={data["results"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
