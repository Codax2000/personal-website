/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard navbar for the entire site.
 * Below the md breakpoint the menu opens as a full-screen sheet.
 */
import { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const PROJECTS = [
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
  const [open, setOpen] = useState(false);
  const height = 14;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <Navbar bg="light" expand="md" className="d-none d-md-flex desktop-nav">
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
            <Nav.Link href="/personal-website/">Home</Nav.Link>
            <Nav.Link href="mailto:aknowlt@umich.edu">Contact Me</Nav.Link>
            <NavDropdown title="Featured Projects" id="basic-nav-dropdown">
              {PROJECTS.map(([href, label]) => (
                <NavDropdown.Item key={href} href={href}>
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="d-md-none mobile-topbar">
        <span className="mobile-wordmark">Alex Knowlton</span>
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={open}
          aria-controls="mobile-sheet"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div
          id="mobile-sheet"
          className="mobile-sheet mobile-sheet-directory"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <header className="sheet-header">
            <div>
              <p className="sheet-name">Alex Knowlton</p>
              <p className="sheet-kicker">Electrical engineer</p>
            </div>
            <button type="button" className="mobile-sheet-close" onClick={() => setOpen(false)}>
              Close
            </button>
          </header>
          <nav className="sheet-links" aria-label="Primary">
            <a href="/personal-website/" onClick={() => setOpen(false)}>Home</a>
            <a href="mailto:aknowlt@umich.edu">Contact</a>
          </nav>
          <p className="sheet-group">Featured projects</p>
          <nav className="sheet-links" aria-label="Featured projects">
            {PROJECTS.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="sheet-footer">
            <a href="https://github.com/Codax2000" target="_blank" rel="noreferrer">
              <img src={github} alt="My GitHub Page" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-knowlton/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="My LinkedIn Profile" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
