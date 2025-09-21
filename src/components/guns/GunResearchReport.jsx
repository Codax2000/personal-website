/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Page dealing with my research concerning gun violence.
 */

import { Container } from "react-bootstrap";
import GunViolenceCauses from "./GunViolenceCauses.jsx";
import GunViolenceAbout from "./GunViolenceAbout.jsx";
import GunViolenceAreas from "./GunViolenceAreas.jsx";
import GunViolenceAbstract from "./GunResearchAbstract.jsx";
import GunViolenceMap from "./GunViolenceMap.jsx";
import GunViolenceOverTime from "./GunViolenceOverTime.jsx";

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
