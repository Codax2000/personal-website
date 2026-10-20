/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Section that details the UW CADathon, including short
 * description and a gallery.
 */

import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage.jsx";
import data from "./data.json";

import overall from "./img/overall.jpg";
import front from "./img/front-controls.png";
import fire from "./img/fire.jpg";
import locker from "./img/locker-open.png";
import open from "./img/open-up.png";
import seat from "./img/seat.jpg";
import suspension from "./img/suspension.jpg";
import wheel from "./img/wheel-front.jpg";

const gallery = [
  {
    url: front,
    caption: "Front dashboard with phoenix logo and pedals",
  },
  {
    url: fire,
    caption: "Fire system, with dual nozzles pointed at the engine",
  },
  {
    url: locker,
    caption: "Front storage space. Fully articulated with half-pin hinges",
  },
  {
    url: open,
    caption: "Top down, wheels up for boating, doors open up",
  },
  {
    url: seat,
    caption: "Luxury-oriented bucket seat with decorative pattern",
  },
  {
    url: suspension,
    caption: "Detailed suspension, exploded view",
  },
  {
    url: wheel,
    caption: "Fully modeled wheel, including threads and holes for bolts",
  },
];

export default function CadathonReport() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">UW CADathon</h1>
      </Container>
      <ArticleWithImage
        title={data["article"]["title"]}
        content={data["article"]["content"]}
        graph={overall}
        caption={data["article"]["image"]["caption"]}
      />
      <Container>
        <h2>Gallery</h2>
        <Container
          id="gallery"
          className="d-flex justify-content-between flex-wrap"
        >
          {gallery.map((item, i) => (
            <div key={i} className="m-2">
              <img src={item["url"]} alt={item["caption"]} />
              <figcaption className="text-muted">{item["caption"]}</figcaption>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
