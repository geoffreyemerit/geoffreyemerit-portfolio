import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillsList from "../components/SkillsList";

const Skills = () => {
  return (
    <div className="min-h-screen font-pat skillsBlack dark:skillsWhite">
      <Navbar />
      <SkillsList />
      <Footer />
    </div>
  );
};

export default Skills;
