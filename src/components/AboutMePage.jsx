import React, { useState } from "react";
import AboutMeSelected from "./AboutMeSelected";
import AboutMeList from "./AboutMeList";
import aboutMeArray from "../../data/aboutMeArray";

const AboutMePage = () => {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(aboutMeArray);

  console.log(selected);

  return (
    <div className="flex flex-col items-center mt-5 ">
      {/* :ABOUTME PAGE */}
      <div className="flex flex-col items-center w-full h-full sm:flex-row sm:w-[80%] sm:h-[25rem] lg:my-5  lg:p-3 lg:w-[80%] lg:h-[24rem]">
        {/* >> Title */}
        <div className="flex flex-col items-center h-full my-2 sm:order-2 sm:w-[90%]">
          <h1 className="flex items-center justify-center title">
            Qui suis-je ?
          </h1>
          {/* >> AboutMe Description */}
          <span className="font-raleway flex items-center w-[90%] h-[80%] p-4 mt-5 text-sm text-justify rounded-xl bg-primary bg-opacity-70 text-secondary sm:text-base lg:text-lg dark:bg-secondary dark:bg-opacity-70 dark:text-primary typewriter">
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
      <div className="flex w-[90%] items-center justify-center mt-2 mb-8 lg:w-full">
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
  );
};

export default AboutMePage;
