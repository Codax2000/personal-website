/**
 * Alex Knowlton
 * 4/21/2024
 *
 * Section that details a UM LSTM accelerator
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";
import architecture from "./img/architecture.png";
import mac from "./img/cordic_mac_heatmap.png";
import afb from "./img/hdl_afb_comparison.png";
import performance from "./img/lstm_performance_comparison.png";

export default function LSTMAccelerator() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">LSTM Network Acceleration</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={architecture}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["methodology_1"]["title"]}
          content={data["methodology_1"]["content"]}
          graph={mac}
          caption={data["methodology_1"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["methodology_2"]["title"]}
          content={data["methodology_2"]["content"]}
          graph={afb}
          caption={data["methodology_2"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["results"]["title"]}
          content={data["results"]["content"]}
          graph={performance}
          caption={data["results"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}

