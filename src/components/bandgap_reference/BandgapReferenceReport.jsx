/**
 * Alex Knowlton
 * 4/21/2024
 *
 * Section that details a UM bandgap reference
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage.jsx";
import data from "./data.json";
import schematic from './img/schematic.jpg';
import transient from './img/mc_transient.jpg';
import monte_carlo from './img/MC_dc.jpg';
import corners from './img/corner_sweep.jpg';

export default function BandgapReferenceReport() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Bandgap Voltage Reference</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={schematic}
          caption={data["abstract"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["transient"]["title"]}
          content={data["transient"]["content"]}
          graph={transient}
          caption={data["transient"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["monte_carlo"]["title"]}
          content={data["monte_carlo"]["content"]}
          graph={monte_carlo}
          caption={data["monte_carlo"]["image"]["caption"]}
        />
        <ArticleWithImage
          title={data["corners"]["title"]}
          content={data["corners"]["content"]}
          graph={corners}
          caption={data["corners"]["image"]["caption"]}
        />
      </Container>
    </Container>
  );
}
