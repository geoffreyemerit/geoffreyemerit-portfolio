import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Toggle from "../contexts/ThemeToggle";

const LandingHome = () => {
  return (
    <section className="flex flex-col h-screen font-lexend font-regular lg:flex-row ">
      {/* :LANDING PAGE */}
      <div>
        {/* >> Logo */}
        <div className="absolute z-10 flex mt-2 ml-2">
          <img
            src="./assets/global/logo.png"
            alt="logo-geoffreyemerit"
            className="flex w-10 h-10 bg-tertiary "
          />
          <span className="flex flex-col ml-1 text-base font-regular text-secondary">
            Geoffrey Emerit
            <span className="text-sm font-light"> Web développeur</span>
          </span>
        </div>
        {/* >> Title */}
        <Typist avgTypingDelay={70} stdTypingDelay={0} cursor={{ show: false }}>
          <Typist.Delay ms={500} />
          <h2 className="z-10 w-[95%] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] lg:w-[55rem] uppercase lg:-translate-x-[50%] lg:-translate-y-[50%] lg:top-[20%] lg:left-[50%] flex flex-col">
            <span className="z-10 flex justify-center self-center sm:tracking-widest pb-3 text-[1.4rem] w-[90%] text-secondary text-center sm:text-[2rem] lg:text-[2rem] uppercase">
              Bienvenue
            </span>
            <span className="z-10 flex justify-center self-center sm:tracking-widest pb-3 text-[1.4rem] w-[90%] text-secondary text-center sm:text-[2rem] lg:text-[2rem] uppercase">
              La partie peut commencer
            </span>
            <span className="z-10 flex justify-center self-center sm:tracking-widest pb-3 text-[1.4rem] w-full text-secondary text-center sm:text-[2rem] lg:text-[2rem] uppercase">
              choisis ton camp !
            </span>
          </h2>
        </Typist>
      </div>
      {/* >> Right image - White team */}
      <Link
        to="/home"
        className="z-0 flex w-full duration-500 h-1/2 landingBlack hover:brightness-150 lg:w-1/2 lg:h-full"
      >
        <div className="flex items-center justify-center w-full ">
          <Toggle mode="dark" />
        </div>
      </Link>
      {/* >> Left image - Black team */}
      <Link
        to="/home"
        className="z-0 flex w-full duration-500 h-1/2 landingWhite hover:brightness-150 lg:w-1/2 lg:h-full"
      >
        <div className="flex items-center justify-center w-full ">
          <Toggle mode="light" />
        </div>
      </Link>
      <div />
    </section>
  );
};

export default LandingHome;
