import React from "react";
import AboutMePage from "../components/AboutMePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMe = () => {
  return (
    <div className="font-pat aboutMeBlack dark:aboutMeWhite">
      <Navbar />
      <AboutMePage />
      <Footer />
    </div>
  );
};

export default AboutMe;
