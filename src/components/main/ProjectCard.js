/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Card for showing a link to a project on the homepage.
 * Shows a picture in the background, and there is an
 * animation that shows a description on mouseover.
 * Card also acts as a link to the project in question
 */
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { short, name, url, image } = props;
  const [state, setState] = useState("text-white text-center hidden");

  function removeHidden() {
    setState("text-white text-center");
  }

  function toggleHidden() {
    setState("text-white text-center hidden");
  }

  return (
    <Link to={url}>
      <Card>
        <Card.Img src={image} alt="Card image" className="project-card" />
        <Card.ImgOverlay
          className="d-flex flex-column justify-content-center"
          onMouseEnter={removeHidden}
          onMouseLeave={toggleHidden}
        >
          <Card.Title className="text-white text-center">{name}</Card.Title>
          <Card.Text className={state}>{short}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}
