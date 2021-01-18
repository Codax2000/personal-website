/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Page dealing with my research concerning gun violence.
 */
import React from "react";
import { Container } from "react-bootstrap";
import GunViolenceCauses from "./GunViolenceCauses";
import GunViolenceAbout from "./GunViolenceAbout";
import GunViolenceAreas from "./GunViolenceAreas";
import GunViolenceAbstract from "./GunResearchAbstract";
import GunViolenceMap from "./GunViolenceMap";
import GunViolenceOverTime from "./GunViolenceOverTime";

export default function GunResearchReport() {
  return (
    <Container fluid className="report-article">
      <h1 className="text-center">Gun Violence Research, Winter 2020</h1>
      <GunViolenceAbstract />
      <GunViolenceOverTime />
      <GunViolenceAreas />
      <GunViolenceMap />
      <GunViolenceCauses />
      <GunViolenceAbout />
    </Container>
  );
}
