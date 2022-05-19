import React from "react";
import AboutMeList from "../components/AboutMeList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen aboutMeBlack dark:aboutMeWhite">
      <Navbar />
      <AboutMeList />
      <Footer />
    </div>
  );
};

export default AboutMe;
