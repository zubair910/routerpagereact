import React, { useEffect, useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import image from "./images/img4.jpg";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
         <Route path="*" element={  <img src={image}  width="100%" /> } />
      </Routes>
      {/* <WeatherApp />
      <Home /> */}
    </div>
  );
}

export default App;