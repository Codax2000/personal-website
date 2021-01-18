import React, { useEffect } from "react";
import embed from "vega-embed";
import incidentsOverTime from "./json_plots/incidents_over_time.vg.json";
import ArticleWithAltairPlot from "../templates/ArticleWithAltairPlot";
import data from "./data.json";

export default function GunViolenceOverTime() {
  useEffect(() => {
    embed("#" + ID, incidentsOverTime);
  });

  const ID = "change-over-time";

  return (
    <ArticleWithAltairPlot
      title="Change Over Time"
      content={data["change_over_time"]["content"]}
      id={ID}
      caption={data["change_over_time"]["caption"]}
    />
  );
}
