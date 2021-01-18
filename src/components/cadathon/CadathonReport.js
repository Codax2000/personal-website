/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Section that details the UW CADathon, including short
 * description and a gallery.
 */
import React from "react";
import { Container } from "react-bootstrap";
import ArticleWithImage from "../templates/ArticleWithImage";
import data from "./data.json";

import overall from "./img/overall.JPG";
import front from "./img/front-controls.PNG";
import fire from "./img/fire.JPG";
import locker from "./img/locker-open.PNG";
import open from "./img/open-up.PNG";
import seat from "./img/seat.JPG";
import suspension from "./img/suspension.JPG";
import wheel from "./img/wheel-front.JPG";

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
        <ArticleWithImage
          title={data["article"]["title"]}
          content={data["article"]["content"]}
          graph={overall}
          caption={data["article"]["image"]["caption"]}
        />
      </Container>
      <Container>
        <h2>Gallery</h2>
        <Container
          id="gallery"
          className="d-flex justify-content-between flex-wrap"
        >
          {gallery.map((item, i) => (
            <div className="m-2">
              <img src={item["url"]} alt={item["caption"]} />
              <figcaption className="text-muted">{item["caption"]}</figcaption>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
