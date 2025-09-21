/**
 * Alex Knowlton
 * 4/21/2024
 *
 * Section that details a UM bandgap reference
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";
import DSM2_block from './img/dsm2_block.jpg';
import DSM2 from './img/dsm2_fft.jpg';
import SAR_EF from './img/sar_comparison.jpg';

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
          title={data["redundancy"]["title"]}
          content={data["redundancy"]["content"]}
          graph={SAR_EF}
          caption={data["redundancy"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
