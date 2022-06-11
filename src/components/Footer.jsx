import React from "react";
import footLinks from "../../data/footLinks";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 font-pat bg-opacity-30 text-secondary bg-primary sm:flex-row sm:items-center dark:text-primary dark:bg-secondary dark:bg-opacity-30">
      {/* :FOOTER */}
      {/* >> Social Networks */}
      <ul className="flex flex-wrap justify-center w-full">
        {footLinks.map((link) => (
          <li
            key={link.id}
            className="m-1 duration-500 sm:m-3 hover:text-tertiary"
          >
            <a href={link.href} target={link.target}>
              <Logo myStyle="w-6 h-6 mx-2" name={link.name} id={link.id} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
