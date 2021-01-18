/**
 * Alex Knowlton
 * 1/16/2021
 *
 * Standard article with Altair plot. Takes an Array of Strings to turn
 * into a paragraph, a title, an id, and a caption. Lays everything out with standard formatting.
 * Does not actually embed the altai plot, but creates the div for it to be
 * rendered with the given id, which should already have a hash. Assumes
 * that given altair plots already have a standard width, so no width is set
 */
import React from "react";
import { Container } from "react-bootstrap";

export default function ArticleWithImage(props) {
  let { title, content, id, caption } = props;

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>{title}</h2>
        <div className="d-flex mt-4">
          <div>
            {content.map((item, i) => (
              <p key={i} className="text-left">
                {item}
              </p>
            ))}
          </div>
          <div>
            <div id={id} alt={caption} className="ml-2 mb-2" />
            <figcaption className="text-muted mb-4">{caption}</figcaption>
          </div>
        </div>
      </Container>
    </Container>
  );
}
