/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Returns a map that renders based on the data passed to it. Supports
 * brushing, panning, and zooming, with tooltips on the map to see
 * the time and magnitude of the quake on the Richter scale.
 */
import React, { useEffect, useRef, useCallback } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import mapTileData from "../data/countries.json";

export default function EfficientQuakeMap({ earthquakes }) {
  // DOM references
  const mapRef = useRef();
  const scatterRef = useRef();

  // constant values
  const MAP_HEIGHT = 475;
  const SCATTER_HEIGHT = 100;
  const WIDTH = 960;
  const TIME_OFFSET = 60 * 30 * 1000;
  const SCATTER_MARGIN = { top: 5, left: 40, right: 5, bottom: 20 };

  // static scaling functions
  const radius = useCallback((d) => d ** 1.7, []);

  const drawBase = useCallback(() => {
    const LEGEND_DATA = [4, 6, 8];

    d3.select(scatterRef.current)
      .append("text")
      .attr("class", "y label")
      .attr("transform", "rotate(-90)")
      .attr(
        "x",
        -(
          SCATTER_MARGIN.top +
          (SCATTER_HEIGHT - SCATTER_MARGIN.top - SCATTER_MARGIN.bottom) / 2
        )
      )
      .attr("y", SCATTER_MARGIN.left / 2 - 1)
      .text("Magnitude");

    // draw map legend
    const legend = d3.select(mapRef.current).append("g").attr("id", "legend");
    legend
      .attr("id", "legend")
      .selectAll("circle")
      .data(LEGEND_DATA)
      .join("circle")
      .attr("cy", (d) => MAP_HEIGHT - 10 - radius(d)) // offset from bottom
      .attr("cx", WIDTH - 10 - radius(d3.max(LEGEND_DATA)))
      .attr("r", radius);

    legend
      .selectAll("text")
      .data(LEGEND_DATA)
      .join("text")
      .text((d) => `${d}R`)
      .attr(
        "transform",
        `translate(${WIDTH - 10 - radius(d3.max(LEGEND_DATA))}, ${
          MAP_HEIGHT - 10
        })`
      )
      .attr("dy", (d) => -radius(d) * 2 + 12);
  }, [SCATTER_MARGIN.left, SCATTER_MARGIN.top, SCATTER_MARGIN.bottom, radius]);

  const drawVariable = useCallback(() => {
    for (let quake of earthquakes) {
      quake.time = new Date(quake.time);
    }

    // constants
    const map = d3.select(mapRef.current);
    const scatterplot = d3.select(scatterRef.current);
    const projection = d3.geoEquirectangular();
    const path = d3.geoPath().projection(projection);
    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
    const STROKE_WIDTH = 0.5;

    // necessary functions for interaction
    function reset() {
      map
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(map.node()).invert([WIDTH / 2, MAP_HEIGHT / 2])
        );
    }

    function zoomed(event) {
      const { transform } = event;
      mapZoom.attr("transform", transform);
      mapTileOutlines.attr("stroke-width", STROKE_WIDTH / transform.k);
    }

    function brushed(event) {
      let { selection } = event;
      let scatterCirclesBrush = scatterplot
        .selectAll("circle")
        .data(earthquakes, (d) => d.id)
        .join("circle");
      let mapCirclesBrush = map
        .select("#map-zoom")
        .selectAll("circle")
        .data(earthquakes, (d) => d.id)
        .join("circle");
      if (selection) {
        scatterCirclesBrush
          .transition()
          .duration(50)
          .attr("stroke", (d) => {
            return isBrushed(d, selection) ? "brown" : null;
          })
          .attr("r", (d) => {
            return isBrushed(d, selection) ? 5 : 3;
          })
          .attr("fill", (d) => {
            return isBrushed(d, selection) ? "orange" : "black";
          });
        mapCirclesBrush
          .transition()
          .duration(50)
          .attr("r", (d) => {
            return isBrushed(d, selection) ? radius(d.magnitude) : 0;
          });
      } else {
        scatterCirclesBrush
          .transition()
          .duration(50)
          .attr("stroke", null)
          .attr("r", 3)
          .attr("fill", "black");
        mapCirclesBrush
          .transition()
          .duration(50)
          .attr("r", (d) => radius(d.magnitude));
      }
    }

    function isBrushed(d, selection) {
      let x = xScale(d.time) + SCATTER_MARGIN.left;
      return x <= selection[1] && x >= selection[0];
    }

    // append tiles to map
    let mapZoom = d3.select("#map-zoom");
    let mapTileTransform = `translate(0, ${-15})`;

    mapZoom
      .select("#tiles")
      .selectAll("path")
      .data(
        topojson.feature(mapTileData, mapTileData.objects.countries).features
      )
      .join("path")
      .attr("d", path)
      .attr("transform", mapTileTransform)
      .append("title")
      .text((d) => d.properties.name);

    let mapTileOutlines = mapZoom
      .select("#tile-outlines")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", STROKE_WIDTH)
      .attr("stroke-linejoin", "round")
      .attr(
        "d",
        path(
          topojson.mesh(
            mapTileData,
            mapTileData.objects.countries,
            (a, b) => a !== b
          )
        )
      )
      .attr("transform", mapTileTransform);

    map.call(zoom);
    map.on("click", reset);

    // append x axis to scatterplot
    let xScale = d3
      .scaleTime()
      .domain([d3.min(earthquakes, (d) => d.time) - TIME_OFFSET, new Date()])
      .range([0, WIDTH - SCATTER_MARGIN.right - SCATTER_MARGIN.left]);

    let xAxis = d3.axisBottom().scale(xScale);
    let yScale = d3
      .scaleLinear()
      .domain([0, 9])
      .range([SCATTER_HEIGHT - SCATTER_MARGIN.top - SCATTER_MARGIN.bottom, 0]);

    let yAxis = d3.axisLeft().scale(yScale).ticks(4);
    d3.select(scatterRef.current)
      .append("g")
      .call(yAxis)
      .attr(
        "transform",
        `translate(${SCATTER_MARGIN.left}, ${SCATTER_MARGIN.top})`
      );

    scatterplot
      .select("#x-axis")
      .attr(
        "transform",
        `translate(${SCATTER_MARGIN.left}, ${
          SCATTER_HEIGHT - SCATTER_MARGIN.bottom
        })`
      )
      .transition()
      .call(xAxis);

    // append quakes to map
    let mapCircles = map
      .select("#quake-locations")
      .selectAll("circle")
      .data(earthquakes, (d) => d.id);

    let mapCircleMerged = mapCircles
      .enter()
      .append("circle")
      .attr("r", 0)
      .attr("transform", (d) => {
        let newLocation = projection([d.longitude, d.latitude]);
        newLocation[1] -= 15; // account for projection
        return `translate(${newLocation})`;
      })
      .merge(mapCircles);

    mapCircleMerged
      .transition()
      .attr("r", (d) => radius(d.magnitude))
      .attr("stroke-width", STROKE_WIDTH)
      .style("opacity", 0.6);

    mapCircleMerged
      .append("title")
      .text(
        (d) =>
          `Magnitude: ${
            d.magnitude
          } on Richter Scale\nTime: ${d.time.toLocaleTimeString()}, ${d.time.toLocaleDateString()}`
      );

    mapCircles.exit().transition().attr("r", 0).remove();

    // append quakes to scatterplot
    let scatterCircles = scatterplot
      .select("#quake-points")
      .selectAll("circle")
      .data(earthquakes, (d) => d.id);

    let scatterCirclesMerged = scatterCircles
      .enter()
      .append("circle")
      .attr("r", 0)
      .attr("cx", (d) => xScale(d.time) + SCATTER_MARGIN.left)
      .attr("cy", SCATTER_HEIGHT - SCATTER_MARGIN.bottom)
      .merge(scatterCircles)
      .transition();

    scatterCirclesMerged
      .attr("r", 3)
      .attr("cy", (d) => yScale(d.magnitude) + SCATTER_MARGIN.top)
      .attr("cx", (d) => xScale(d.time) + SCATTER_MARGIN.left);

    scatterCircles
      .exit()
      .transition()
      .attr("r", 0)
      .attr("cy", SCATTER_HEIGHT - SCATTER_MARGIN.bottom)
      .remove();

    // add brush and link to brushing behavior above
    let brush = d3
      .brushX()
      .extent([
        [SCATTER_MARGIN.left, SCATTER_MARGIN.top],
        [WIDTH - SCATTER_MARGIN.right, SCATTER_HEIGHT - SCATTER_MARGIN.bottom],
      ])
      .on("brush end", brushed);

    scatterplot.select("#brush").call(brush);
  }, [
    earthquakes,
    TIME_OFFSET,
    SCATTER_MARGIN.right,
    SCATTER_MARGIN.left,
    SCATTER_MARGIN.bottom,
    SCATTER_MARGIN.top,
    radius,
  ]);

  useEffect(() => drawBase(), [drawBase]);

  useEffect(() => drawVariable(), [drawVariable, earthquakes]);

  return (
    <div id="viz" className="d-flex flex-column align-items-center mb-2">
      <svg id="map" ref={mapRef} height={MAP_HEIGHT} width={WIDTH}>
        <g id="map-zoom">
          <g id="tiles"></g>
          <path id="tile-outlines"></path>
          <g id="quake-locations"></g>
        </g>
      </svg>
      <svg
        id="scatter"
        ref={scatterRef}
        height={SCATTER_HEIGHT}
        width={WIDTH}
        className="mt-2"
      >
        <g id="quake-points"></g>
        <g id="x-axis"></g>
        <g id="brush"></g>
      </svg>
    </div>
  );
}
