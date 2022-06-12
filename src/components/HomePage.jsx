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
            <span className="text-[4rem] md:text-[6rem] group-hover:animate-bounce">
              Geoffrey
            </span>
          </Animated>
          <Animated
            animationIn="fadeInRightBig"
            animationOut="fadeInRightBig"
            animationInDelay={500}
            animationInDuration={1000}
          >
            <span className="text-[4rem] sm:ml-8 md:text-[6rem]">Emerit</span>
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
            <span className="mt-[-3rem] mr-[-3px] font-bold text-black text-shadow-bb sm:text-4xl sm:mt-[-1rem] sm:mr-[-6px] md:text-5xl md:mt-[-3rem] md:mr-[-8px]">
              Développeur Web
            </span>
            <hr className="flex mt-[-1.6rem] sm:mt-[-0.5rem] w-[15%] h-1 bg-black rounded-full" />
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
          className="flex flex-wrap justify-center items-center w-[100%] h-[40%] gap-10 sm:flex-row sm:justify-around"
        >
          <Link to="/aboutme">
            <button
              type="button"
              className="relative w-52 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-regular transition-all rounded bg-primary dark:bg-secondary hover:bg-primary group border-[1px] border-tertiary dark:border-primary"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-tertiary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-sm text-center transition-colors duration-300 ease-in-out sm:text-base text-tertiary dark:text-primary group-hover:text-primary">
                EN SAVOIR PLUS
              </span>
            </button>
          </Link>
          <a
            href="./assets/global/cv-geoffrey-emerit.pdf"
            target="_blank"
            download
            className="relative w-52 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-regular transition-all rounded bg-primary dark:bg-secondary hover:bg-primary group border-[1px] border-tertiary dark:border-primary"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-tertiary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
            <span className="relative w-full text-sm text-center transition-colors duration-300 ease-in-out sm:text-base text-tertiary dark:text-primary group-hover:text-primary ">
              TÉLÉCHARGER CV
            </span>
          </a>
        </Animated>
      </div>
      {/* >> Date */}
      <span className="flex mt-[3rem] items-center justify-center w-full text-2xl font-bold text-black h-[10%] sm:text-3xl text-shadow-bb">
        2022
      </span>
    </div>
  );
};

export default HomePage;
