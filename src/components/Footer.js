/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Standard footer, shows tools used and requisite kudos for the page logo
 */
import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-left text-muted bg-light p-2">
      <p className="clear-spacing">
        Site created with React, React-Bootstrap, D3.js, and Spring Boot
      </p>
      <p className="clear-spacing">
        Parts of the research report are out of date, and requests to my
        earthquake API are currently being blocked by CORS. I apologize for
        these problems and will fix them as soon as I can.
      </p>
    </footer>
  );
}
