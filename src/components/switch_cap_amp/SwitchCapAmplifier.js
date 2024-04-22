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
import schematic from './img/placeholder.jpg';
import simulation1 from './img/placeholder.jpg';
import simulation2 from './img/placeholder.jpg';

export default function SwitchCapAmplifier() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Switched-capacitor Amplifier</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={schematic}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["design"]["title"]}
          content={data["design"]["content"]}
          graph={simulation1}
          caption={data["design"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={simulation2}
          caption={data["results"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
