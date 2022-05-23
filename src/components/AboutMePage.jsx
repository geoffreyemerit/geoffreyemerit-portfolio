import React from "react";
import AboutMeSelected from "./AboutMeSelected";
import AboutMeList from "./AboutMeList";
import aboutMeArray from "../../data/aboutMeArray";

const AboutMePage = () => {
  const [selected, setSelected] = React.useState("./assets/aboutMe/me.png");

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
          <span className="flex items-center w-[90%] h-[80%] p-4 mt-5 text-sm text-justify rounded-xl bg-primary bg-opacity-70 text-secondary sm:text-base lg:text-lg dark:bg-secondary dark:bg-opacity-70 dark:text-primary typewriter">
            Après plus de 6ans d&apos;immobilier, j&apos;ai décidé de me
            recentrer sur une passion d&apos;enfance ... l&apos;Informatique !
            Le virage à 90° est lancé et je suis actuellement en formation à la
            Wild Code School.Bientôt en recherche d&apos;un stage dés août 2022,
            je suis disponible pour échanger à ce sujet.
          </span>
        </div>
        <div className="flex items-center justify-center my-2 w-[90%] h-80 sm:h-full sm:order-1">
          {/* >> AboutMe Selected */}
          {aboutMeArray && aboutMeArray.length > 0 && (
            <AboutMeSelected link={selected} />
          )}
        </div>
      </div>
      <div className="flex w-[90%] items-center justify-center mt-2 mb-8 lg:w-full">
        {/* >> AboutMe List */}
        {aboutMeArray && aboutMeArray.length > 0 && (
          <AboutMeList aboutMeArray={aboutMeArray} setSelected={setSelected} />
        )}
      </div>
    </div>
  );
};

export default AboutMePage;
