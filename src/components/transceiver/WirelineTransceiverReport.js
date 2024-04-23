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
import schematic from './img/block_diagram.jpg';
import eye_diagram from './img/eye_diagram.png';
import matlab_plot from './img/eye_heights.png';

export default function WirelineTransceiverReport() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">High-speed Wireline Communication</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={schematic}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["approach"]["title"]}
          content={data["approach"]["content"]}
          graph={matlab_plot}
          caption={data["approach"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={eye_diagram}
          caption={data["results"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
