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
import rendering from './img/original_rendering.jpg';
import knight from './img/wood_knight.jpg';

export default function NeuralNetwork() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">CNC Chess Set</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={rendering}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["knight"]["title"]}
          content={data["knight"]["content"]}
          graph={knight}
          caption={data["knight"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
