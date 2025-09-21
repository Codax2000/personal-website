/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard article, takes a String title and Array of Strings as props,
 * laying them out nicely for reading.
 */

import { Container } from "react-bootstrap";

export default function Article(props) {
  let { title, content } = props;

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>{title}</h2>
        {content.map((item, i) => (
          <p key={i} className="text-left">
            {item}
          </p>
        ))}
      </Container>
    </Container>
  );
}
