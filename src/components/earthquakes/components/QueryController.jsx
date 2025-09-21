/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Controller that retrieves data from the database based on
 * parameters provided by the user. sets the overall data of the app
 * based on the result from the backend
 */

import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";

export default function QueryController({ setData }) {
  let timeOptions = ["Hour", "Day", "Week", "Month"];
  let sortOptions = ["Magnitude", "Time"];

  function earthquakeQuery(event) {
    event.preventDefault();
    document.getElementById("query-submit-btn").classList.add("hidden");
    document.getElementById("loading-spinner").hidden = false;
    let timeOption = document.querySelector("#time-select option:checked")
      .value;
    let sortOption = sortOptions.indexOf(
      document.querySelector("#sort-select option:checked").value
    );
    let minOption = document.querySelector("#min-select").value;
    let maxOption = document.querySelector("#max-select").value;
    sortOption = sortOption === 0; // /earthquakes?time=12312312&min=1.4&max=6.0&sortByMagnitude=false
    
    let queryUrl = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson`;

    fetch(queryUrl)
      .then(checkStatus)
      .then((res) => res.json())
      .then((res) => processEarthquakes(res, minOption, maxOption, getOffsetTime(timeOption), sortOption))
      .then((res) => {
        setData(res);
        document.getElementById("query-submit-btn").classList.remove("hidden");
        document.getElementById("loading-spinner").hidden = true;
      })
      .catch(console.log);
  }

  function getOffsetTime(time) {
    let now = new Date();
    if (time === "Hour") {
      return now.getTime() - 60 * 60 * 1000;
    } else if (time === "Day") {
      return now.setDate(now.getDate() - 1);
    } else if (time === "Week") {
      return now.setDate(now.getDate() - 7);
    }
    return now.setMonth(now.getMonth() - 1);
  }

  function checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw Error(response);
  }

  function processEarthquakes(data, min, max, minTime, sortByMagnitude) {
    data = data.features;
    let result = [];
    for (let quake of data) {
      let time = quake.properties.time;
      let longitude = quake.geometry.coordinates[0];
      let latitude = quake.geometry.coordinates[1];
      let magnitude = quake.properties.mag;
      let id = quake.id;
      if (magnitude >= min & magnitude <= max & time >= minTime) {
        result.push({"id": id, "time": time, "longitude": longitude, "latitude": latitude, "magnitude": magnitude})
      }
    }
    if (sortByMagnitude) {
      result = result.sort((a, b) => b.magnitude - a.magnitude);
    } else {
      result = result.sort((a, b) => b.time - a.time)
    }
    return result;
  }

  return (
    <Container className="mt-3 mb-1">
      <Form onSubmit={earthquakeQuery}>
        <p>Earthquake Query: Find Recent Earthquakes!</p>
        <Form.Group as={Row}>
          <Form.Label column>Earthquake Search Period</Form.Label>
          <Col>
            <Form.Control as="select" custome id="time-select">
              {timeOptions.map((value, index) => (
                <option value={value} key={index}>
                  {"Last " + value.charAt(0).toUpperCase() + value.slice(1)}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column>Min and Max Magnitude for Query</Form.Label>
          <Col>
            <Form.Control 
              id="min-select"
              type="number"
              step="0.1"
              min="1"
              max="10"
              placeholder="Min"
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label className="pt-2">To</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Control
              id="max-select"
              type="number"
              step="0.1"
              min="1"
              max="10"
              placeholder="Max"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column className="pt-2">Sort Query Table By</Form.Label>
          <Col xs="auto">
            <Form.Control as="select" custom id="sort-select">
              {sortOptions.map((value, index) => (
                <option value={value} key={index}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Button id="query-submit-btn" type="submit">
          Submit
        </Button>
        <Spinner
          id="loading-spinner"
          animation="border"
          variant="primary"
          hidden
        />
      </Form>
    </Container>
  );
}
