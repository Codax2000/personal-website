/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard article, takes a String title and an array of paragraphs,
 * laying them out nicely for reading. A paragraph is a string, or
 * { text, link: { phrase, href } } when one phrase should be a link.
 */

import { Container } from "react-bootstrap";
import ParagraphText from "./ParagraphText";

export default function Article(props) {
  let { title, content } = props;

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>{title}</h2>
        {content.map((item, i) => (
          <p key={i} className="text-start">
            <ParagraphText item={item} />
          </p>
        ))}
      </Container>
    </Container>
  );
}
