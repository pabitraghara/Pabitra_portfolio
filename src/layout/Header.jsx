import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-white font-bold text-2xl">
            Pabitra Ghara
          </a>

          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <TfiMenuAlt className="text-white text-2xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-[60] transition-all duration-300">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <IoMdClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col items-center gap-6 text-white text-xl font-medium">
            <li onClick={() => setIsOpen(false)}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#about-me">About Me</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#experience">Experience</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#project">Projects</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
