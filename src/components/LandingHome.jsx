import React from "react";
import { Link } from "react-router-dom";

const LandingHome = () => {
  return (
    <section className="flex flex-col h-screen lg:flex-row">
      {/* :LANDING PAGE */}
      <div>
        {/* >> Logo + Title */}
        <div className="absolute w-3/4 z-10 -translate-x-[50%] -translate-y-[50%] left-[39%] top-[6%] flex">
          <img
            src="./assets/global/logo.png"
            alt="logo-geoffreyemerit"
            className="flex w-10 h-10 bg-tertiary md:mb-0"
          />
          <span className="flex flex-col ml-3 text-sm font-semibold text-primary">
            Geoffrey Emerit
            <span className="text-xs"> Web développeur</span>
          </span>
        </div>

        <h2 className="pb-2 text-shadow z-10 absolute text-xl w-[90%] text-secondary tracking-wide text-center text-[1.5rem] -translate-x-[50%] translate-y-[50%] left-[50%] top-[41%] sm:text-[2.3rem] lg:tracking-[1rem] lg:w-[55rem] lg:text-[2rem] font-bold uppercase lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:top-[17%] lg:left-[50%]">
          La partie peut commencer
        </h2>
        <h3 className="text-shadow z-10 absolute text-xl w-[90%] text-secondary tracking-wide text-center text-[1.5rem] -translate-x-[50%] translate-y-[50%] left-[50%] top-[52%] sm:text-[2.3rem] lg:tracking-[1rem] lg:w-[55rem] lg:text-[2rem] font-bold uppercase lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:top-[23%] lg:left-[50%]">
          choisis ton camp !
        </h3>
      </div>
      <div className="z-0 flex w-full h-1/2 landingBlack lg:hover:contrast-125 lg:w-1/2 lg:h-full">
        {/* >> Right image - White team */}
        <div className="flex items-center justify-center w-full ">
          <Link to="/home">
            <button
              type="button"
              className="drop-shadow-2xl px-12 py-3 text-xl tracking-[0.5rem] uppercase border-4 rounded cursor-pointer border-primary text-secondary bg-primary lg:hover:bg-secondary lg:hover:border-secondary lg:hover:text-primary"
            >
              Noir
            </button>
          </Link>
        </div>
      </div>
      <div className="z-0 flex w-full h-1/2 landingWhite lg:hover:brightness-125 lg:w-1/2 lg:h-full ">
        {/* >> Left image - Black team */}
        <div className="flex items-center justify-center w-full ">
          <Link to="/home" className="">
            <button
              type="button"
              className="drop-shadow-2xl tracking-[0.5rem] px-12 py-3 text-xl uppercase border-4 rounded cursor-pointer border-secondary text-primary bg-secondary lg:hover:bg-primary lg:hover:border-primary lg:hover:text-secondary"
            >
              Blanc
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingHome;
