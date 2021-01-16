/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Takes a String title, Array of Strings as content to place
 * before the large image, url to a large image, Array of Strings
 * to place after the large image, and width of the image to set.
 * 
 * Lays everything out neatly in a paragraph with a title, both
 * sets of text, and a large graph as an image.
 */

import React from 'react';
import { Container } from 'react-bootstrap';

export default function ArticleLargeGraph(props) {
  let { title, beforeContent, graphUrl, caption, afterContent, width } = props;
  return (
    <Container fluid className="report-article">
      <Container>
        <h2>
          {title}
        </h2>
        <div className="mt-4">
          <div>
            {beforeContent.map((item, i) => <p key={i} className="text-left">{item}</p>)}
          </div>
          <div>
            <img src={graphUrl} alt={caption} width={width} className="mb-2" />
            <figcaption className="text-muted mb-4">
              {caption}
            </figcaption>
          </div>
          <div>
            {afterContent.map((item, i) => <p key={i} className="text-left">{item}</p>)}
          </div>
        </div>
      </Container>
    </Container>
  )
}
