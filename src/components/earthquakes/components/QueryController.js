/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Controller that retrieves data from the database based on
 * parameters provided by the user. sets the overall data of the app
 * based on the result from the backend
 */
import React from "react";
import { Container, Form, Col, Button, Spinner } from "react-bootstrap";

export default function QueryController({ setData }) {
  let timeOptions = ["Hour", "Day", "Week", "Month"];
  let sortOptions = ["Magnitude", "Time"];
  const API_URL = "https://earthquake-api.azurewebsites.net";

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
    let queryUrl = `${API_URL}/earthquakes?min=${minOption}&max=${maxOption}&sortByMagnitude=${sortOption}&time=${getOffsetTime(
      timeOption
    )}`;
    fetch(queryUrl)
      .then((res) => res.json())
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

  /*function checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw Error(response);
  }*/

  return (
    <Container className="mt-3 mb-1">
      <Form onSubmit={earthquakeQuery}>
        <Form.Group>
          <Form.Row className="d-flex align-items-center justify-content-center">
            <Col xs="auto" className="pl-0">
              <Form.Label className="pt-2">Earthquakes from:&nbsp;</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Control as="select" custom id="time-select">
                {timeOptions.map((value, index) => (
                  <option value={value} key={index}>
                    {"Last " + value.charAt(0).toUpperCase() + value.slice(1)}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col xs="auto">
              <Form.Label className="pt-2"> &nbsp;Magnitude &nbsp;</Form.Label>
            </Col>
            <Col xs="auto">
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
              <Form.Label className="pt-2">&nbsp;To&nbsp;</Form.Label>
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
            <Form.Label className="pt-2">&nbsp;Sort By&nbsp;</Form.Label>
            <Col xs="auto">
              <Form.Control as="select" custom id="sort-select">
                {sortOptions.map((value, index) => (
                  <option value={value} key={index}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </option>
                ))}
              </Form.Control>
            </Col>
            &nbsp;
            <Button id="query-submit-btn" type="submit" disabled>
              Submit
            </Button>
            <Spinner
              id="loading-spinner"
              animation="border"
              variant="primary"
              hidden
            />
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
  );
}
