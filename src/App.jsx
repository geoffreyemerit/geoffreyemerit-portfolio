/* eslint-disable import/no-unresolved */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
