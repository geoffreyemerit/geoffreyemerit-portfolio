import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../data/navLinks";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="w-full mb-4 bg-transparent shadow-sm text-secondary dark:text-primary">
      {/* :DESKTOP MENU */}
      <div className="flex items-center justify-between px-5 mx-auto py-7">
        {/* >> Site logo and Name */}
        <NavLink to="/">
          <div className="flex">
            <img
              src="./assets/global/logo.png"
              alt="logo-geoffreyemerit"
              className="flex w-10 h-10 bg-tertiary md:mb-0"
            />
            <span className="flex flex-col ml-3 text-sm font-semibold">
              Geoffrey Emerit
              <span className="text-xs"> Web développeur</span>
            </span>
          </div>
        </NavLink>
        {/* >> Navbar */}
        <nav className="flex-wrap items-center justify-center hidden text-base tracking-wide md:ml-auto md:flex">
          <ul className="flex">
            {navLinks.map((link) => (
              <NavLink key={link.id} to={link.path}>
                <li className="mr-10 hover:text-tertiary">{link.title}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* >> Menu Burger Icon */}
        <button
          type="button"
          className="rounded-md md:hidden"
          onClick={() => setIsOpened(!isOpened)}
        >
          <Logo
            myStyle="w-10 h-10 text-secondary"
            name="logos-menu-burger"
            id="logos-menu-burger"
          />
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpened && (
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-primary md:hidden">
          <ul>
            {navLinks.map((link) => (
              <NavLink key={link.id} to={link.path}>
                <li className="h-20 text-xl">{link.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
