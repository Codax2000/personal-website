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
import DSM2_block from './img/placeholder.jpg';
import DSM2 from './img/placeholder.jpg';
import SAR_EF from './img/placeholder.jpg';

export default function ADCSims() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">ADC Simulations in Matlab</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={DSM2_block}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["sim2"]["title"]}
          content={data["sim2"]["content"]}
          graph={DSM2}
          caption={data["sim2"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["final"]["title"]}
          content={data["final"]["content"]}
          graph={SAR_EF}
          caption={data["final"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
