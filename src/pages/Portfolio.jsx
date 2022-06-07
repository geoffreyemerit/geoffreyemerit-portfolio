import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PortfolioPage from "../components/PortfolioPage";

const Portfolio = () => {
  return (
    <div className="min-h-screen font-pat portfolioBlack dark:portfolioWhite">
      <Navbar />
      <PortfolioPage />
      <Footer />
    </div>
  );
};

export default Portfolio;
