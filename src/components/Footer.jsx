import React from "react";
import footLinks from "../../data/footLinks";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer class="flex flex-col p-4  text-secondary bg-primary sm:flex-row sm:items-center">
      {/* :FOOTER */}
      {/* >> Social Networks */}
      <ul className="flex flex-wrap sm:w-2/3">
        {footLinks.map((link, index) => (
          <a key={index} href={link.href} target={link.target}>
            <li className="m-4 ">
              <Logo myStyle="w-6 h-6" name={link.name} id={link.id} />
            </li>
          </a>
        ))}
      </ul>
      {/* >> Copyright */}
      <span className="flex justify-end text-base sm:w-1/3">
        &copy; Geoffrey Emerit
      </span>
    </footer>
  );
};

export default Footer;
