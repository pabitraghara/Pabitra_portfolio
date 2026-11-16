import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-8">
        {/* Branding */}
        <div className="text-lg font-display font-semibold tracking-tight">
          © {new Date().getFullYear()} Pabitra Ghara
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pabitraghara/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-gray-700 hover:bg-blue-600 transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            href="https://github.com/pabitraghara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-gray-700 hover:bg-gray-900 transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaGithub className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
