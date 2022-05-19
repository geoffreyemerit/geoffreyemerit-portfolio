import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PortfolioList from "../components/PortfolioList";

const Portfolio = () => {
  return (
    <div className="w-screen h-screen portfolioBlack dark:portfolioWhite">
      <Navbar />
      <PortfolioList />
      <Footer />
    </div>
  );
};

export default Portfolio;
