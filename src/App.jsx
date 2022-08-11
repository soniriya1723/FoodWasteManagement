import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";

import Contact from "./Contact";
import Home from "./Home";
import Volunteer from "./Volunteer";
import Campaign from "./Campaign";
import Bdonate from "./Bdonate";
import Donate from "./Donate";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Join from "./Join";
import Alertc from "./Alertc";
import Alertm from "./Alertm";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/campaign" element={<Campaign />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/bag" element={<Bdonate />} />
        <Route exact path="/donatefood" element={<Donate />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/alertc" element={<Alertc />} />
        <Route exact path="/alertm" element={<Alertm />} />
      </Routes>
    </>
  );
};

export default App;
