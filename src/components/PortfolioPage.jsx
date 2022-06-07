import React, { useState } from "react";
import { Animated } from "react-animated-css";
import Logo from "./Logo";
import portfolioArray from "../../data/portfolioArray";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

const PortfolioPage = () => {
  const [modalToOpen, setModalToOpen] = useState(-1);
  // par défaut à null, et chaque portfolioCard
  // le met à l'id en cours
  return (
    <>
      {modalToOpen > -1 && (
        <PortfolioModal
          id={modalToOpen}
          {...portfolioArray[modalToOpen]}
          setModalToOpen={setModalToOpen}
        />
      )}
      <Animated
        animationIn="zoomInUp"
        animationOut="zoomInUp"
        animationInDelay={1}
        animationInDuration={1000}
      >
        <div className="flex flex-col items-center">
          <h1 className="flex items-center justify-center title">Projets</h1>
          <div className="container relative w-[90%] lg:w-full h-full mt-5 overflow-hidden ">
            <h2 className="mx-auto p-2 w-[90%] font-bold rounded-lg text-sm text-center border-[#FC4B3A] bg-[#FC4B3A] bg-opacity-70 text-primary dark:text-secondary sm:text-lg md:text-xl lg:text-2xl lg:w-[50%] lg:mt-10">
              Début de mon aventure : Février 2022
            </h2>
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#E67140] mt-2" />
            {/* <!-- right timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#E67140] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-pawn"
                  id="logos-pawn"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 flex justify-center items-center w-5/12 ml-1 sm:px-6 bg-[#E67140] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[0]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>
            {/* <!-- left timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#E6B455]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#E6B455] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-bishop"
                  id="logos-bishop"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 flex justify-center items-center mr-1 w-5/12 sm:px-6 bg-[#E6B455] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[1]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>

            {/* <!-- right timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#FCD642]" />
            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#FCD642] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-knight"
                  id="logos-knight"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 flex justify-center items-center ml-1 w-5/12 sm:px-6 bg-[#FCD642] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[2]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>

            {/* <!-- left timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#A7D570]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#A7D570] rounded-full shadow-xl">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-rock"
                  id="logos-rock"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 flex justify-center items-center mr-1 w-5/12 sm:px-6 bg-[#A7D570] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[3]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>

            {/* <!-- right timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#53D57B]" />
            <div className="flex items-center justify-between w-full mb-8 right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#53D57B] rounded-full shadow-xl">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-queen"
                  id="logos-queen"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 flex justify-center items-center ml-1 w-5/12 sm:px-6 bg-[#53D57B] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[4]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>

            {/* <!-- left timeline --> */}
            {/* <!-- line + logo --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#4BCFCD]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-10 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#4BCFCD] rounded-full shadow-xl justify-cenetr">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-king"
                  id="logos-king"
                />
              </div>
              {/* <!-- Card --> */}
              <div className="order-1 mr-1 w-5/12 sm:px-6 bg-[#4BCFCD] bg-opacity-70 rounded-lg shadow-xl">
                {portfolioArray && (
                  <PortfolioCard
                    {...portfolioArray[5]}
                    setModalToOpen={setModalToOpen}
                  />
                )}
              </div>
            </div>
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#56AAD0] mb-10" />
          </div>
        </div>
      </Animated>
    </>
  );
};

export default PortfolioPage;
