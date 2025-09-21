/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * (Hopefully) attractive front page for this website.
 */
import React from 'react'
import { Container } from 'react-bootstrap';
export default function Home() {
  return (
    <div fluid className="d-flex align-items-center mb-0" id="home">
      <Container className="text-white text-left">
        <h2 className="display-4">
          Hi, I'm Alex
        </h2>
        <p>
          I'm an Electrical Engineer doing IC Design and Verification.
        </p>
      </Container>
    </div>
  )
}
