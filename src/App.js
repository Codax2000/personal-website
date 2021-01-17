/**
 * Alex Knowlton
 * 9/14/2020
 *
 * Main page for the website. Routes to different projects using
 * React-Router, and has a standard nav menu and footer
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AvionicsReport from "./components/AvionicsReport";
import CadathonReport from "./components/cadathon/CadathonReport";
import GunResearchReport from "./components/GunResearchReport";
import EarthquakeWatch from "./components/earthquakes/components/EarthquakeWatch";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/controls" exact component={AvionicsReport} />
        <Route path="/earthquakewatch" exact component={EarthquakeWatch} />
        <Route path="/cadd" exact component={CadathonReport} />
        <Route path="/guns" exact component={GunResearchReport} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
