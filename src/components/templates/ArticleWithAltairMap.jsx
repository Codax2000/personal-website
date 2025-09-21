/**
 * Alex Knowlton
 * 1/16/2021
 *
 * Takes a String title, arrays of strings to go before and after a large
 * image (almost exclusively a map, hence the title), an id, and a caption.
 *
 * Lays everything out neatly in a paragraph with a title, both
 * sets of text, and a large graph as an image.
 */

import { Container } from "react-bootstrap";

export default function ArticleWithAltairMap(props) {
  let { title, beforeContent, id, caption, afterContent } = props;
  return (
    <Container fluid className="report-article">
      <Container>
        <h2>{title}</h2>
        <div className="mt-4">
          <div>
            {beforeContent.map((item, i) => (
              <p key={i} className="text-left">
                {item}
              </p>
            ))}
          </div>
          <div className="text-center">
            <div id={id} />
            <figcaption className="text-muted mb-4">{caption}</figcaption>
          </div>
          <div>
            {afterContent.map((item, i) => (
              <p key={i} className="text-left">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}
