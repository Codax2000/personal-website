/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Standard article with image. Takes an Array of Strings to turn
 * into a paragraph, a title, and a url, caption, and width of an
 * image to set. Lays everything out with standard formatting.
 */
import React from 'react';
import { Container } from 'react-bootstrap';

export default function ArticleWithImage(props) {
  let { title, content, graph, caption, width } = props;
  return (
    <Container fluid className="report-article">
      <Container>
        <h2>
          {title}
        </h2>
        <div className="d-flex mt-4">
          <div>
            {content.map((item, i) => <p key={i} className="text-left">{item}</p>)}
          </div>
          <div>
            <img src={graph} alt={caption} width={width} className="ml-2 mb-2" />
            <figcaption className="text-muted mb-4">
              {caption}
            </figcaption>
          </div>
        </div>
      </Container>
    </Container>
  )
}
