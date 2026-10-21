/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Card for showing a link to a project on the homepage.
 * Shows a picture in the background, and there is an
 * animation that shows a description on mouseover.
 * Card also acts as a link to the project in question
 */
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { short, name, url, image } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={url} className="project-link">
      <Card className="project-tile">
        <Card.Img src={image} alt={name} className="project-card" loading="lazy" />
        <Card.ImgOverlay
          className="project-overlay d-none d-lg-flex flex-column justify-content-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Card.Title className="text-white text-center">{name}</Card.Title>
          <Card.Text className={`text-white text-center project-description${hovered ? "" : " hidden"}`}>
            {short}
          </Card.Text>
        </Card.ImgOverlay>
        <Card.Body className="d-lg-none project-card-copy">
          <Card.Title className="text-start h5">{name}</Card.Title>
          <Card.Text className="text-start mb-0">{short}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
