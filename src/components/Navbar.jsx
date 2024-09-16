import React from "react";
import logo from "../assets/SC1.png";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="  mb-20 flex item-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className="text-2xl border-b border-neutral-300  tracking-tight  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
          href="https://drive.google.com/file/d/144554HfZ7bpCZu3To7QOcfbY9_s9BoKy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Downloadd Resume
        </a>

        <a
          href="https://www.linkedin.com/in/shiva-chauhan-860361211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ishivachauhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
