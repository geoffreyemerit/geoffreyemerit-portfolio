import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillsTech from "../../data/skillsTech";
import Logo from "./Logo";
import skillsPers from "../../data/skillsPers";

const SkillsList = () => {
  /* >> Carousel Package */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="font-montserrat">
      {/* :SKILLS PAGE */}
      <div className="flex flex-col items-center">
        {/* >> Title */}
        <h1 className="flex items-center justify-center mt-5 title sm:mt-0">
          Compétences
        </h1>
      </div>
      {/* :CAROUSEL */}
      <div className="flex items-center justify-center mx-10 my-5">
        <Slider
          {...settings}
          className="flex w-[80%] rounded-3xl bg-primary bg-opacity-70 sm:w-[70%] dark:bg-secondary dark:bg-opacity-80"
        >
          {/* >> Skills Technic */}
          <div>
            <h2 className="flex tracking-[0.2rem] text-sm mt-5 justify-center text-center uppercase text-secondary sm:text-xl dark:text-primary">
              Compétences Techniques
            </h2>
            <ul className="flex flex-wrap justify-center gap-16 mx-3 my-5 sm:gap-20 ">
              {skillsTech.map((skill) => (
                <li
                  key={skill.id}
                  className="flex flex-col items-center h-20 w-14 sm:w-20"
                >
                  <Logo
                    myStyle="h-20 w-14 sm:w-20"
                    name={skill.name}
                    id={skill.id}
                  />
                  <span className="flex items-center justify-center mt-1 text-xs italic uppercase text-secondary dark:text-primary">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* >> Skills Personal */}
          <div>
            <h2 className="flex tracking-[0.2rem] text-sm mt-5 justify-center text-center uppercase text-secondary sm:text-xl dark:text-primary">
              Compétences Personnelles
            </h2>
            <ul className="flex flex-wrap justify-center gap-16 m-5 sm:gap-20 ">
              {skillsPers.map((skill) => (
                <li
                  key={skill.id}
                  className="flex flex-col items-center h-20 m-5 w-42"
                >
                  <Logo
                    myStyle="h-20 w-20 text-secondary dark:text-primary"
                    name={skill.name}
                    id={skill.id}
                  />
                  <span className="text-xs italic text-center uppercase text-secondary dark:text-primary">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SkillsList;
