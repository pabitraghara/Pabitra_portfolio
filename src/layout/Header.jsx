import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me");
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        const scrollPosition = window.scrollY;

        // Show navbar when scrolled to About Me section (with some offset)
        setShowNavbar(scrollPosition >= aboutSectionTop - 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center bg-black/80 backdrop-blur-md rounded-full shadow-md">
          {/* Brand / Name */}
          {/* <a href="#" className="text-white font-bold text-xl tracking-wide">
            Pabitra Ghara
          </a> */}

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="hover:text-blue-400 transition-colors"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="md:hidden cursor-pointer text-white text-2xl"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <TfiMenuAlt />
          </button>
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
