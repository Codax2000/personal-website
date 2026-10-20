/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard navbar for the entire site.
 * Desktop keeps the Bootstrap bar. Below md, the toggle opens a full-screen sheet
 * that uses the same heading, label, and surface tokens as the homepage sections.
 */
import { useEffect, useRef, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const featured = [
  ["#/lstm", "LSTM Acceleration"],
  ["#/constellations_nn", "Constellations Neural Network"],
  ["#/adc_sims", "Matlab ADCs"],
  ["#/sc_amp", "Switch-Cap Amplifier"],
  ["#/processor", "RISC Microprocessor"],
  ["#/cnn", "VLSI Capstone"],
  ["#/transceiver", "Wireline Transceiver"],
  ["#/bandgap", "Bandgap Reference"],
];

export default function NavMenu() {
  const height = 14;
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <Navbar bg="light" expand="md">
      <button
        type="button"
        className="navbar-toggler d-md-none"
        aria-controls="nav-sheet"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-flex">
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
          <Nav.Link href="/personal-website/">Home</Nav.Link>
          <Nav.Link href="mailto:aknowlt@umich.edu">Contact Me</Nav.Link>
          <NavDropdown title="Featured Projects" id="basic-nav-dropdown">
            {featured.map(([href, label]) => (
              <NavDropdown.Item key={href} href={href}>
                {label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {open ? (
        <div
          className="nav-sheet"
          id="nav-sheet"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            className="nav-sheet-close"
            ref={closeRef}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <a className="nav-sheet-link" href="/personal-website/" onClick={() => setOpen(false)}>
            Home
          </a>
          <a className="nav-sheet-link" href="mailto:aknowlt@umich.edu">
            Contact Me
          </a>
          <p className="meta-label nav-sheet-label">Featured Projects</p>
          {featured.map(([href, label]) => (
            <a
              key={href}
              className="nav-sheet-project"
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="nav-sheet-social">
            <a href="https://github.com/Codax2000" target="_blank" rel="noreferrer">
              <img src={github} height={height} alt="My GitHub Page" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-knowlton/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} height={height} alt="My LinkedIn Profile" />
            </a>
          </div>
        </div>
      ) : null}
    </Navbar>
  );
}
