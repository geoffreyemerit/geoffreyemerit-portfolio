import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      {/* :HOME PAGE */}
      <div className="flex flex-col items-center self-center justify-center w-full h-[50%] mt-10">
        {/* >> Title + Name */}

        <h2 className="flex flex-row w-full text-2xl no-wrap">
          <Animated
            animationIn="fadeInLeftBig"
            animationOut="fadeInLeftBig"
            animationInDelay={500}
            animationInDuration={1000}
            className="flex flex-row w-full text-2xl no-wrap"
          >
            <hr className="flex w-[15%] h-1 mt-4 bg-black rounded-full" />
            <span className="mt-[-5px] ml-[-4px] text-black text-shadow-bb font-bold sm:text-4xl sm:mt-[-13px] sm:ml-[-6px] md:text-5xl md:mt-[-24px] md:ml-[-8px]">
              Bonjour, je suis
            </span>
          </Animated>
        </h2>
        <h1 className="flex flex-col self-center m-5 md:m-10 leading-[4rem] text-center text-tertiary text-shadow-nn sm:flex-row">
          <Animated
            animationIn="fadeInLeftBig"
            animationOut="fadeInLeftBig"
            animationInDelay={500}
            animationInDuration={1000}
          >
            <span className="text-[5rem] md:text-[6rem]">Geoffrey</span>
          </Animated>
          <Animated
            animationIn="fadeInRightBig"
            animationOut="fadeInRightBig"
            animationInDelay={500}
            animationInDuration={1000}
          >
            <span className="text-[5rem] sm:ml-8 md:text-[6rem]">Emerit</span>
          </Animated>
        </h1>

        <h2 className="flex flex-row justify-end w-full mt-5 text-2xl no-wrap">
          <Animated
            animationIn="fadeInRightBig"
            animationOut="fadeInRightBig"
            animationInDelay={500}
            animationInDuration={1000}
            className="flex flex-row justify-end w-full mt-5 text-2xl no-wrap"
          >
            <span className="mt-[-5px] mr-[-2px] font-bold text-black text-shadow-bb sm:text-4xl sm:mt-[-15px] sm:mr-[-6px] md:text-5xl md:mt-[-24px] md:mr-[-8px]">
              Développeur Web
            </span>
            <hr className="flex w-[15%] h-1 mt-4 bg-black rounded-full" />
          </Animated>
        </h2>
      </div>
      {/* >> Button + Link */}
      <div className="flex flex-col flex-wrap justify-center items-center w-[80%] h-[40%] gap-10 sm:flex-row sm:justify-around ">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeIn"
          animationInDelay={1000}
          animationInDuration={500}
          className="flex flex-wrap justify-center items-center w-[80%] h-[40%] gap-10 sm:flex-row sm:justify-around"
        >
          <Link to="/aboutme">
            <button
              type="button"
              className="cursor-pointer hover:scale-[1.02] hover:bg-opacity-95 title "
            >
              En savoir plus
            </button>
          </Link>
          <a href="./assets/global/cv-geoffrey-emerit.pdf" download>
            <button
              type="button"
              className="cursor-pointer hover:scale-[1.02] hover:bg-opacity-95 title"
            >
              Télécharger CV
            </button>
          </a>
        </Animated>
      </div>
      {/* >> Date */}
      <span className="flex items-center justify-center w-full text-2xl font-bold text-black h-[10%] sm:text-3xl text-shadow-bb">
        2022
      </span>
    </div>
  );
};

export default HomePage;
