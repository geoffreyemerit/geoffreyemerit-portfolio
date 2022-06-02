import React, { useState } from "react";
import { Animated } from "react-animated-css";
import AboutMeSelected from "./AboutMeSelected";
import AboutMeList from "./AboutMeList";
import aboutMeArray from "../../data/aboutMeArray";

const AboutMePage = () => {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(aboutMeArray);

  return (
    <Animated
      animationIn="zoomInDown"
      animationOut="zoomInDown"
      animationInDelay={1}
      animationInDuration={1000}
    >
      <div className="flex flex-col items-center mt-5 ">
        {/* :ABOUTME PAGE */}
        <div className="flex flex-col items-center w-full h-full sm:flex-row sm:w-[80%] sm:h-[25rem] lg:my-5  lg:p-3 lg:w-[80%] lg:h-[24rem]">
          {/* >> Title */}
          <div className="flex flex-col items-center h-full my-2 sm:order-2 sm:w-[90%]">
            <h1 className="flex items-center justify-center title">
              Qui suis-je ?
            </h1>
            {/* >> AboutMe Description */}
            <span className="flex items-center w-[90%] h-52 sm:h-[90%] p-4 mt-5 text-base text-justify rounded-xl bg-primary bg-opacity-70 text-secondary sm:text-lg md:text-xl lg:text-2xl dark:bg-secondary dark:bg-opacity-70 dark:text-primary">
              {data && data.find((info) => info.id === selected).desc}
            </span>
          </div>
          <div className="flex items-center justify-center my-2 w-[90%] h-80 sm:h-full sm:order-1">
            {/* >> AboutMe Selected */}
            {aboutMeArray && aboutMeArray.length > 0 && (
              <AboutMeSelected
                aboutme={data.find((info) => info.id === selected)}
              />
            )}
          </div>
        </div>
        <div className="flex w-[90%] items-center justify-center mt-2 mb-14 lg:w-full">
          {/* >> AboutMe List */}
          {data && data.length > 0 && (
            <AboutMeList
              data={data}
              selected={selected}
              setSelected={setSelected}
              setData={setData}
            />
          )}
        </div>
      </div>
    </Animated>
  );
};

export default AboutMePage;
