/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard article with image. Takes an array of paragraphs, a title,
 * and a url, caption. A paragraph is a string, or
 * { text, link: { phrase, href } } when one phrase should be a link.
 */
import React from "react";
import { Container } from "react-bootstrap";
import ParagraphText from "./ParagraphText";

export default function ArticleWithImage(props) {
  let { title, content, graph, caption } = props;
  const STANDARD_WIDTH = 350;

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>{title}</h2>
        <div className="d-flex flex-column flex-lg-row mt-4 article-split">
          <div>
            {content.map((item, i) => (
              <p key={i} className="text-left mr-4">
                <ParagraphText item={item} />
              </p>
            ))}
          </div>
          <div className="article-figure flex-shrink-0">
            <img
              src={graph}
              alt={caption}
              width={STANDARD_WIDTH}
              className="mb-2 img-fluid"
            />
            <figcaption className="text-muted mb-4">{caption}</figcaption>
          </div>
        </div>
      </Container>
    </Container>
  );
}
