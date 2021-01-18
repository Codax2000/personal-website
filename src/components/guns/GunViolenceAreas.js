import React, { useEffect } from "react";
import ArticleWithAltairPlot from "../templates/ArticleWithAltairPlot";
import embed from "vega-embed";
import data from "./data.json";
import countyDistribution from "./json_plots/incidents_histogram.vg.json";

export default function GunViolenceAreas() {
  const HIST_ID = "count-dist";
  useEffect(() => {
    embed("#" + HIST_ID, countyDistribution);
  }, []);

  return (
    <ArticleWithAltairPlot
      title="What Does 'Unusually Violent' Mean?"
      content={data["county_distribution"]["content"]}
      id={HIST_ID}
      caption={data["county_distribution"]["caption"]}
    />
  );
}
