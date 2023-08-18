/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard navbar for the entire site.
 */
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default function NavMenu() {
  let height = 14;

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/Codax2000" target="_blank">
            <img src={github} height={height} alt="My GitHub Page" />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/alexander-knowlton-2b0b4418b/"
            target="_blank"
          >
            <img src={linkedin} height={height} alt="My LinkedIn Profile" />
          </Nav.Link>
          <Nav.Link href="/personal-website">Home</Nav.Link>
          <Nav.Link href="mailto:aknowlti2000@gmail.com">Contact Me</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/controls">Avionics</NavDropdown.Item>
            <NavDropdown.Item href="#/earthquakewatch">EarthquakeWatch</NavDropdown.Item>
            <NavDropdown.Item href="#/cadd">UW CADathon</NavDropdown.Item>
            <NavDropdown.Item href="#/cnn">Radio Cancellation CNN</NavDropdown.Item>
            <NavDropdown.Item href="#/transceiver">Wireline Transceiver</NavDropdown.Item>
            <NavDropdown.Item href="#/amplifier">Switch-Cap Amplifier</NavDropdown.Item>
            <NavDropdown.Item href="#/bed">CADathon Year 2</NavDropdown.Item>
            <NavDropdown.Item href="#/cannon">Rubber Band Cannon</NavDropdown.Item>
            <NavDropdown.Item href="#/chess">CNC Chess Set</NavDropdown.Item>
            <NavDropdown.Item href="#/plane">SNC Internship</NavDropdown.Item>
            <NavDropdown.Item href="#/ros">Robotics Controls</NavDropdown.Item>
            <NavDropdown.Item href="#/guns">Gun Research</NavDropdown.Item> 
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
