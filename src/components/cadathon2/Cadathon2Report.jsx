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

import bed from "./img/bed.JPG";
import panel_tilt from "./img/control_panel_in_place_tilt.JPG";
import panel_explode from "./img/exploded_control_panel_with_lines.JPG";
import tank_explode from "./img/exploded_tank_with_lines.JPG";
import light from "./img/light_in_place.JPG";
import outlet from "./img/outlet.JPG";
import tank from "./img/tank.JPG";

const gallery = [
  {
    url: panel_tilt,
    caption: "A simple control panel designed to show wake-up time and temperature",
  },
  {
    url: panel_explode,
    caption: "An exploded view of the control panel",
  },
  {
    url: tank_explode,
    caption: "An exploded view of the tank designed to keep temperature constant",
  },
  {
    url: light,
    caption: "A light embedded in the headboards",
  },
  {
    url: outlet,
    caption: "A power outlet embedded in the bedpost",
  },
  {
    url: tank,
    caption: "A complete view of the assembled tank",
  }
];

export default function CadathonReport() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">UW CADathon, Year 2</h1>
        <ArticleWithImage
          title={data["article"]["title"]}
          content={data["article"]["content"]}
          graph={bed}
          caption={data["article"]["image"]["caption"]}
        />
      </Container>
      <Container>
        <h2>Animation</h2>
        <div className="text-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1SXr4EXTk2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
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
