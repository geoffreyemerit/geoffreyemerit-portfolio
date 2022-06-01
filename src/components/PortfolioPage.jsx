import React, { useState } from "react";
import Logo from "./Logo";
import PortfolioModal from "./PortfolioModal";
import portfolioArray from "../../data/portfolioArray";

const PortfolioPage = () => {
  const [modal, setModal] = useState();
  return (
    <>
      {portfolioArray && (
        <div className="flex flex-col items-center">
          <h1 className="flex items-center justify-center title">Projets</h1>
          <div className="container relative w-[90%] lg:w-full h-full mt-5 overflow-hidden ">
            <h2 className="mx-auto p-2 w-[90%] font-bold rounded-lg text-sm text-center border-[#FC4B3A] bg-[#FC4B3A] bg-opacity-70 text-primary dark:text-secondary lg:text-base lg:w-[50%] lg:mt-10">
              Commencement de mon aventure : Février 2022
            </h2>
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#E67140] mt-2" />
            {/* <!-- right timeline --> */}
            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#E67140] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-pawn"
                  id="logos-pawn"
                />
              </div>

              <div className="order-1 w-5/12 ml-1 sm:px-6 bg-[#E67140] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[0])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[0].title}
                  </h3>
                  <p className="py-1 text-xs italic leading-snug tracking-wide text-opacity-100 lg:text-base text-primary dark:text-secondary">
                    Projet personnel: Création de mon premier site web en
                    autodidacte.
                  </p>
                </button>
              </div>
            </div>
            {/* <!-- left timeline --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#E6B455]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#E6B455] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-bishop"
                  id="logos-bishop"
                />
              </div>
              <div className="order-1 mr-1 w-5/12 sm:px-6 bg-[#E6B455] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[1])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[1].title}
                  </h3>
                  <p className="py-1 text-xs italic font-medium leading-snug tracking-wide text-opacity-100 lg:text-base text-primary dark:text-secondary">
                    Premier projet: Création du site web du jeu Pierre, Feuille,
                    Ciseaux.
                  </p>
                </button>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#FCD642]" />
            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 bg-[#FCD642] rounded-full shadow-xl my-5">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-knight"
                  id="logos-knight"
                />
              </div>
              <div className="order-1 ml-1 w-5/12 sm:px-6 bg-[#FCD642] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[2])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[2].title}
                  </h3>
                  <p className="py-1 text-xs italic leading-snug tracking-wide text-opacity-100 lg:text-base text-primary dark:text-secondary">
                    Deuxième projet: Création du site web d&apos;une agence de
                    voyage fictive.
                  </p>
                </button>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#A7D570]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#A7D570] rounded-full shadow-xl">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-rock"
                  id="logos-rock"
                />
              </div>
              <div className="order-1 mr-1 w-5/12 sm:px-6 bg-[#A7D570] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[3])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[3].title}
                  </h3>
                  <p className="py-1 text-xs italic font-medium leading-snug tracking-wide text-opacity-100 lg:text-base text-primary dark:text-secondary">
                    Projet réalisé dans le cadre d&apos;un Hackathon de 36h sur
                    le thème de l&apos;écologie.
                  </p>
                </button>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#53D57B]" />
            <div className="flex items-center justify-between w-full mb-8 right-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#53D57B] rounded-full shadow-xl">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-queen"
                  id="logos-queen"
                />
              </div>
              <div className="order-1 ml-1 w-5/12 sm:px-6 bg-[#53D57B] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[4])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[4].title}
                  </h3>
                  <p className="py-1 text-xs italic font-medium leading-snug tracking-wide text-opacity-100 lg:text-base text-primary dark:text-secondary">
                    Projet réalisé dans le cadre du deuxième Hackathon de 50h
                  </p>
                </button>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#4BCFCD]" />
            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center justify-center order-1 w-10 h-10 sm:w-16 sm:h-16 my-5 bg-[#4BCFCD] rounded-full shadow-xl justify-cenetr">
                <Logo
                  myStyle="w-5 h-5 sm:w-8 sm:h-8 text-primary dark:text-secondary"
                  name="logos-king"
                  id="logos-king"
                />
              </div>
              <div className="order-1 mr-1 w-5/12 sm:px-6 bg-[#4BCFCD] bg-opacity-70 rounded-lg shadow-xl">
                <button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => setModal(portfolioArray[5])}
                >
                  <h3 className="font-bold underline text-md sm:text-xl text-primary dark:text-secondary">
                    {portfolioArray[5].title}
                  </h3>
                  <p className="py-1 text-xs italic font-medium tracking-wide text-opacity-100 text-primary dark:text-secondary lg:text-base">
                    Troisième projet: Création du site web d&apos;un restaurant
                    à Biarritz(64).
                  </p>
                </button>
              </div>
            </div>
            <div className="mx-[50%] h-20 rounded-xl border-4 border-[#56AAD0] mb-10" />
          </div>
        </div>
      )}

      {modal && <PortfolioModal {...modal} setModal={setModal} />}
    </>
  );
};

export default PortfolioPage;
