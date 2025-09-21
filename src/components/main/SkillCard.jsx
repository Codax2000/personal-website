/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Shows a list of skills under a given category in a card, which then
 * can be stacked side by side for an attractive pseudo-table
 */

import { Card } from 'react-bootstrap';

export default function SkillCard(props) {
  return (
    <Card className="border-0">
      <Card.Body className="pt-0 px-0">
        <Card.Title>
          {props.state.title}
        </Card.Title>
        <ul className="list-unstyled">
          {props.state.skills.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </Card.Body>
    </Card>
  )
}
