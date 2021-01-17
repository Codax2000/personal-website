/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Section that details the UW CADathon, including short
 * description and a gallery.
 */
import React from "react";
import { Container } from "react-bootstrap";
import ArticleWithImage from "../report-templates/ArticleWithImage";
import overall from ".img/overall.JPG";

// gallery pictures
import fire from "./img/";
import front from ".img/front-controls.PNG";
import locker from ".img/locker-open.PNG";
import open from ".img/open-up.PNG";
import seat from ".img/seat.JPG";
import suspension from ".img/suspension.JPG";
import wheel from ".img/wheel-front.JPG";

export default function CadathonReport() {
  let articles = [
    {
      title: "Abstract",
      content: [
        "This was a 3D modeling competition hosted by the UW association of Mechanical Engineers " +
          "that I entered into with a partner. The prompt was, 'what is the future of " +
          "transportation?', with a bonus prompt of 'include a safety feature somewhere in your " +
          "creation.",
        "Given that our school is near Puget Sound, we decided to " +
          "create a car that was capable of converting into a boat. in the week we had, " +
          "we were able to focus on a creative design and related features. " +
          "These included a fully articulated, luxury cabin, dual fire " +
          "extinguishers per coast guard regulations, large engine with propeller, a front locker" +
          "for storage, and a chassis that could be raised to allow the boat to move quickly over " +
          "water.",
        "As the design was targeted at a commuter crowd, the vehicle was named the Phoenix, " +
          "for branding purposes. The design and name add an element of luxury, which was a " +
          "major goal during design.",
        "This design was entirely modeled with Solidworks, using OneDrive for file sharing. " +
          "It won first place among 11 teams, and was completed on top of a full-time " +
          "engineering course load.",
      ],
      images: [
        {
          url: overall,
          caption: "Finished assembly with wheels down",
          width: 350,
        },
      ],
    },
  ];

  let gallery = [
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

  return (
    <Container fluid className="report-article">
      <Container fluid className="report-article">
        <h1>UW CADathon</h1>
        <ArticleWithImage
          title={articles[0]["title"]}
          content={articles[0]["content"]}
          graph={articles[0]["images"][0]["url"]}
          caption={articles[0]["images"][0]["caption"]}
          width={articles[0]["images"][0]["width"]}
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
