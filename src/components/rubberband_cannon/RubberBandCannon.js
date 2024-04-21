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
import cannon from './img/rubberband_cannon.jpg';

export default function RubberBandCannon() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Embedded Rubber Band Gun</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={cannon}
          caption={data["abstract"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
