import React from "react";
import { Container } from "react-bootstrap";
import data from "./data.json";

export default function GunViolenceAbout() {
  return (
    <Container fluid className="report-article">
      <Container>
        <h2>About This Project</h2>
        <p className="text-left">{data["about"]["methods"]}</p>
        <p className="text-left mb-0">Datasets Used in this Project:</p>
        {data["about"]["databases"].map((item, i) => (
          <p key={i} className="mb-0 px-3">
            {item["name"]}&nbsp; - &nbsp;
            <a href={item["link"]}>{item["source"]}</a>
          </p>
        ))}
        <p className="text-left mt-3">{data["about"]["github"]}</p>
      </Container>
    </Container>
  );
}
