import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioList = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex items-center justify-center cursor-pointer title">
        Projets
      </h1>

      <PortfolioCard />
    </div>
  );
};

export default PortfolioList;
