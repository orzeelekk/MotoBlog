import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Film from "./components/pages/Film"
import Trip from "./components/pages/Trip"
import TripChorwacja from "./components/pages/TripChorwacja";
import AboutMe from "./components/pages/Aboutme";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Map" element={<Map /> } />
        <Route path="/Film" element={<Film /> } />
        <Route path="/Trip" element={<Trip /> } />
        <Route path="/Chorwacja" element={<TripChorwacja /> } />
        <Route path="/AboutMe" element={<AboutMe /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
