import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Toggle from "../contexts/ThemeToggle";

const LandingHome = () => {
  return (
    <section className="flex flex-col h-screen lg:flex-row font-pat">
      {/* :LANDING PAGE */}
      <div>
        {/* >> Logo */}
        <div className="absolute w-3/4 z-10 -translate-x-[50%] -translate-y-[50%] left-[39%] top-[6%] flex">
          <img
            src="./assets/global/logo.png"
            alt="logo-geoffreyemerit"
            className="flex w-10 h-10 bg-tertiary md:mb-0"
          />
          <span className="flex flex-col ml-1 text-base font-semibold text-primary">
            Geoffrey Emerit
            <span className="text-sm"> Web développeur</span>
          </span>
        </div>
        {/* >> Title */}
        <Typist avgTypingDelay={70} stdTypingDelay={0} cursor={{ show: false }}>
          <Typist.Delay ms={300} />
          <h2 className=" text-shadow-nn z-10 absolute text-[1.4rem] sm:text-xl w-[90%] text-secondary tracking-wide text-center  -translate-x-[50%] translate-y-[50%] left-[50%] top-[40%] sm:top-[37%] sm:text-[2.3rem] lg:tracking-[1rem] lg:w-[55rem] lg:text-[2rem] font-bold uppercase lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:top-[10%] lg:left-[50%]">
            Bienvenue
          </h2>
          <h2 className="pb-3 text-shadow-nn z-10 absolute text-[1.4rem] w-[95%] text-secondary tracking-wide text-center -translate-x-[50%] translate-y-[50%] left-[50%] top-[45%] sm:text-xl sm:w-[90%] sm:top-[45%] sm:text-[2.3rem] lg:tracking-[1rem] lg:w-[55rem] lg:text-[2rem] font-bold uppercase lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:top-[18%] lg:left-[50%]">
            La partie peut commencer
          </h2>
          <h3 className="text-shadow-nn z-10 absolute text-[1.4rem] w-[90%] text-secondary tracking-wide text-center  -translate-x-[50%] translate-y-[50%] left-[50%] top-[52%] sm:text-[2.3rem] lg:tracking-[1rem] lg:w-[55rem] lg:text-[2rem] font-bold uppercase lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:top-[24%] lg:left-[50%]">
            choisis ton camp !
          </h3>
        </Typist>
      </div>
      {/* >> Right image - White team */}
      <div className="z-0 flex w-full h-1/2 landingBlack lg:hover:contrast-125 lg:w-1/2 lg:h-full">
        <div className="flex items-center justify-center w-full ">
          <Link to="/home">
            <Toggle mode="dark" />
          </Link>
        </div>
      </div>
      {/* >> Left image - Black team */}
      <div className="z-0 flex w-full h-1/2 landingWhite lg:hover:brightness-125 lg:w-1/2 lg:h-full">
        <div className="flex items-center justify-center w-full ">
          <Link to="/home">
            <Toggle mode="light" />
          </Link>
        </div>
      </div>
      <div />
    </section>
  );
};

export default LandingHome;
