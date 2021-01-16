/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * (Hopefully) attractive front page for this website.
 */
import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
export default function Home() {
  return (
    <Jumbotron fluid className="d-flex align-items-center mb-0" id="home">
      <Container className="text-white text-left">
        <h2 className="display-4">
          Hi, I'm Alex
          </h2>
        <p>
          I'm an Electrical Engineering student at the University of Washington.
          </p>
      </Container>
    </Jumbotron>
  )
}
