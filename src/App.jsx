
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./components/main/HomePage"
import AvionicsReport from "./components/avionics/AvionicsReport.jsx"
import CadathonReport from "./components/cadathon/CadathonReport.jsx"
import Cadathon2Report from "./components/cadathon2/Cadathon2Report.jsx";
import BandgapReference from "./components/bandgap_reference/BandgapReferenceReport.jsx";
import RubberBandCannon from "./components/rubberband_cannon/RubberBandCannon.jsx";
import WirelineTransceiverReport from "./components/transceiver/WirelineTransceiverReport.jsx";
import NeuralNetworkReport from "./components/vlsi_capstone/NeuralNetworkReport.jsx";
import ChessSetReport from "./components/chess_set/ChessSetReport.jsx";
import SwitchCapAmplifier from "./components/switch_cap_amp/SwitchCapAmplifier.jsx";
import Microprocessor from "./components/microprocessor/Microprocessor.jsx";
import ADCSims from "./components/adc_sims/ADCSims.jsx";
import GunResearchReport from "./components/guns/GunResearchReport.jsx";
import EarthquakeWatch from "./components/earthquakes/components/EarthquakeWatch.jsx";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/controls" element={<AvionicsReport />} />
        <Route path="/cadd" element={<CadathonReport />} />
        <Route path="/bed" element={<Cadathon2Report />} />
        <Route path="/bandgap" element={<BandgapReference />} />
        <Route path="/cannon" element={<RubberBandCannon />} />
        <Route path="/transceiver" element={<WirelineTransceiverReport />} />
        <Route path="/cnn" element={<NeuralNetworkReport />} />
        <Route path="/chess" element={<ChessSetReport />} />
        <Route path="/sc_amp" element={<SwitchCapAmplifier />} />
        <Route path="/processor" element={<Microprocessor />} />
        <Route path="/adc_sims" element={<ADCSims />} />
        <Route path="/guns" element={<GunResearchReport />} />
        <Route path="/earthquakewatch" element={<EarthquakeWatch />} />
      </Routes>
      <Footer />
    </div>
  );
}
