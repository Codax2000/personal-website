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
import cannon from './img/rubberband_cannon.jpg';

export default function RubberBandCannon() {
  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1 className="text-center">Embedded Rubber Band Gun</h1>
        <ArticleWithImage
          title={data["abstract"]["title"]}
          content={data["abstract"]["content"]}
          graph={cannon}
          caption={data["abstract"]["image"]["caption"]}
        />
        <Container>
        <h2>Lab Demonstration</h2>
        <div className="text-center mt-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lQqvT3gUEu0?si=9WHXYWIMP8RFv4Fv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        <p className="text-left mr-4 mt-4">This demo was a video we took in the lab. We measured the mass of the rubber band we were shooting and used simple kinematics equations to calculate the elevation. The effect of elevation was slight, but you can still see a slight change in elevation and hear the servo motor move when I place my hand in front of the sensor.</p>
        <p className="text-left mr-4">When the video begins, the model has already been loaded, and the 7-segment display is showing the distance to target. The button I press with my pen triggers the rubber band to fire.</p>
      </Container>
      </Container>
    </Container>
  );
}
