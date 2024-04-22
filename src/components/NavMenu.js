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
            href="https://www.linkedin.com/in/alexander-knowlton/"
            target="_blank"
          >
            <img src={linkedin} height={height} alt="My LinkedIn Profile" />
          </Nav.Link>
          <Nav.Link href="/personal-website">Home</Nav.Link>
          <Nav.Link href="mailto:aknowlt@umich.edu">Contact Me</Nav.Link>
          <NavDropdown title="Featured Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/earthquakewatch">EarthquakeWatch</NavDropdown.Item>
            <NavDropdown.Item href="#/bandgap">Bandgap Reference</NavDropdown.Item>
            <NavDropdown.Item href="#/cannon">Rubber Band Cannon</NavDropdown.Item>
            <NavDropdown.Item href="#/transceiver">Wireline Transceiver</NavDropdown.Item>
            <NavDropdown.Item href="#/cnn">VLSI Capstone</NavDropdown.Item>
            <NavDropdown.Item href="#/amplifier">Switch-Cap Amplifier</NavDropdown.Item>
            <NavDropdown.Item href="#/processor">RISC Microprocessor</NavDropdown.Item>
            <NavDropdown.Item href="#/adc_sims">Matlab ADCs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
