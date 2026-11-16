import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { openResume } from "../utils/resume";

const socials = [
  {
    href: "mailto:pabitraghara384@gmail.com",
    label: "Send Email",
    icon: MdEmail,
  },
  { href: "tel:+9381935038", label: "Call Phone", icon: FaPhone },
  {
    href: "https://www.linkedin.com/in/pabitraghara/",
    label: "LinkedIn Profile",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://github.com/pabitraghara",
    label: "GitHub Profile",
    icon: FaGithub,
    external: true,
  },
];

const Str = ({ children }) => (
  <span className="text-emerald-600 dark:text-emerald-400">"{children}"</span>
);

const CodeCard = () => (
  <div className="relative w-full max-w-md mx-auto lg:mx-0">
    <div
      aria-hidden="true"
      className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-sky-400/20 to-fuchsia-500/30 blur-2xl"
    />
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          developer.js
        </span>
      </div>
      <pre className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 overflow-x-auto">
        <code>
          <span className="text-fuchsia-600 dark:text-fuchsia-400">const</span>{" "}
          <span className="text-sky-600 dark:text-sky-400">developer</span> = {"{"}
          {"\n  "}name: <Str>Pabitra Ghara</Str>,
          {"\n  "}role: <Str>Full Stack Developer</Str>,
          {"\n  "}current: <Str>Frontend Developer Intern @ Macv</Str>,
          {"\n  "}stack: [<Str>React</Str>, <Str>Next.js</Str>,
          {"\n          "}<Str>Node.js</Str>, <Str>NestJS</Str>,
          {"\n          "}<Str>TypeScript</Str>],
          {"\n  "}openTo: [<Str>On-Site</Str>, <Str>Hybrid</Str>,{" "}
          <Str>Remote</Str>],
          {"\n"}
          {"};"}
          <span className="caret inline-block w-2 h-4 ml-1 align-middle bg-indigo-500" />
        </code>
      </pre>
    </div>
  </div>
);

const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div className="text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
            <img
              src="/pabitra.png"
              alt="Portrait of Pabitra Ghara"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-500/20 shadow-lg"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              Open for On-Site, Hybrid &amp; Remote roles
            </span>
          </div>

          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-3">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] mb-4">
            Pabitra Ghara
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Specializing in React, Node.js, and modern web technologies. I
            create digital experiences that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <button
              type="button"
              onClick={openResume}
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <FiDownload />
              Download CV
            </button>
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-7 py-3.5 font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
            >
              View Experience
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start">
            {socials.map(({ href, label, icon: Icon, external }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                title={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
};

export default Home;
