import React from "react";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black homeBlack dark:homeWhite">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default Home;
