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
import HomePage from "./components/main/HomePage";
import AvionicsReport from "./components/avionics/AvionicsReport";
import CadathonReport from "./components/cadathon/CadathonReport";
import Cadathon2Report from "./components/cadathon2/Cadathon2Report";
import EarthquakeWatch from "./components/earthquakes/components/EarthquakeWatch";
import BandgapReference from "./components/bandgap_reference/BandgapReferenceReport";
import RubberBandCannon from "./components/rubberband_cannon/RubberBandCannon";
import WirelineTransceiverReport from "./components/transceiver/WirelineTransceiverReport";
import NeuralNetworkReport from "./components/vlsi_capstone/NeuralNetworkReport";
import ChessSetReport from "./components/chess_set/ChessSetReport";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/controls" exact component={AvionicsReport} />
        <Route path="/earthquakewatch" exact component={EarthquakeWatch} />
        <Route path="/cadd" exact component={CadathonReport} />
        <Route path="/bed" exact component={Cadathon2Report} />
        <Route path="/bandgap" exact component={BandgapReference} />
        <Route path="/cannon" exact component={RubberBandCannon} />
        <Route path="/transceiver" exact component={WirelineTransceiverReport} />
        <Route path="/cnn" exact component={NeuralNetworkReport} />
        <Route path="/chess" exact component={ChessSetReport} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
