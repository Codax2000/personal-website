/**
 * Alex Knowlton
 * 9/28/2025
 *
 * Section that details a UM convolutional neural network.
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";
import analytical from "./img/analytical_comparison.png";
import constellations from "./img/constellation_compare.png";
import error_vs_snr from "./img/error_vs_snr.png";
import fading from "./img/channel_fading.png";

export default function ConstellationsNeuralNet() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Constellation Prediction with PyTorch</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={analytical}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["methodology"]["title"]}
          content={data["methodology"]["content"]}
          graph={constellations}
          caption={data["methodology"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={error_vs_snr}
          caption={data["results"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["next"]["title"]}
          content={data["next"]["content"]}
          graph={fading}
          caption={data["next"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
