import React, { useEffect } from "react";
import ArticleWithAltairMap from "../templates/ArticleWithAltairMap.jsx";
import embed from "vega-embed";
import data from "./data.json";
import countyMap from "./json_plots/incidents_map.vg.json";

export default function GunViolenceAreas() {
  const MAP_ID = "violence-map";

  useEffect(() => {
    embed("#" + MAP_ID, countyMap);
  });

  return (
    <ArticleWithAltairMap
      title="Where Does the Most Gun Violence Occur?"
      beforeContent={data["county_map"]["before"]}
      id={MAP_ID}
      caption="Figure 4.1 - Number of Gun-related Crimes by County, 2014-2018"
      afterContent={data["county_map"]["after"]}
    />
  );
}
