/**
 * Alex Knowlton
 * 4/21/2024
 *
 * Section that details a UM bandgap reference
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";
import block_diagram from "./img/block_diagram.png"
import python_fft from "./img/output_fft.png"


export default function NSSAR_PCB() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Incremental ADC Using Discrete Components</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={block_diagram}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["introduction"]["title"]}
          content={data["introduction"]["content"]}
          graph={python_fft}
          caption={data["introduction"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
