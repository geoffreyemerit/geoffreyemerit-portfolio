import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* :HOME PAGE */}
      <div className="flex flex-col m-20 w-[90%] tracking-[0.2rem]">
        {/* >> Title */}
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold text-center text-shadow text-secondary sm:text-[2.5rem] md:flex-row lg:text-[3rem] dark:text-primary">
          Bonjour, je suis
          <strong className="pl-2 text-3xl font-bold text-tertiary sm:text-[2.5rem] sm:pt-2 md:pt-0 lg:text-[3rem]">
            Geoffrey Emerit
          </strong>
        </h1>
        <h2 className="m-5 text-sm italic font-semibold text-center text-shadow text-secondary sm:text-[1.5rem] sm:mt-8 md:text-[2rem] dark:text-primary">
          Développeur Web / Web Mobile
        </h2>
      </div>
      {/* >> Button + Link */}
      <Link to="/aboutme">
        <button
          type="button"
          className="cursor-pointer hover:scale-[1.02] hover:bg-opacity-95 title"
        >
          En savoir plus
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
