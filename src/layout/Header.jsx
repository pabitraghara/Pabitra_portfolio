import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const links = [
  { href: "#about-me", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "CV" },
];

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
  >
    {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
  </button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-white"
          >
            <span className="text-indigo-500">&lt;</span>
            pabitra.ghara
            <span className="text-indigo-500"> /&gt;</span>
          </a>

          <div className="flex items-center gap-2">
            <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 mr-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-2 rounded-full hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              className="md:hidden w-10 h-10 inline-flex items-center justify-center cursor-pointer text-slate-800 dark:text-white text-xl"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <TfiMenuAlt />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-[60]">
          <div className="flex justify-end p-4">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="text-slate-800 dark:text-white text-3xl cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-6 text-slate-800 dark:text-white text-xl font-medium">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
