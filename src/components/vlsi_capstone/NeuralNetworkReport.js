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
import block_diagram from './img/placeholder.jpg';
import vivado_placed from './img/placeholder.jpg';
import ila_sims from './img/placeholder.jpg';
import icc_apr from './img/placeholder.jpg';

export default function NeuralNetworkReport() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Convolutonal Neural Network</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={block_diagram}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["approach"]["title"]}
          content={data["approach"]["content"]}
          graph={vivado_placed}
          caption={data["approach"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["apr"]["title"]}
          content={data["apr"]["content"]}
          graph={icc_apr}
          caption={data["apr"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={ila_sims}
          caption={data["results"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
