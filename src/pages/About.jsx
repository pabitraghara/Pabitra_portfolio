import React from "react";
import SectionHeading from "../layout/SectionHeading";
import { FiBookOpen, FiBriefcase, FiCode, FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: "35+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
  { value: "1", label: "Year Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const journey = [
  {
    icon: FiBookOpen,
    title: "Education",
    body: "Bachelor of Computer Applications (BCA) from Saroj Mohan Institute of Technology, followed by a Master of Computer Applications (MCA) at Meghnad Saha Institute of Technology, focusing on advanced topics in computer science and technology.",
  },
  {
    icon: FiBriefcase,
    title: "Professional",
    body: "Started as a Full Stack Developer Intern at HeyCoach (4 months on production-ready applications) and currently working as a Frontend Developer Intern at Macv, building responsive interfaces and integrating APIs in an Agile team.",
  },
  {
    icon: FiCode,
    title: "Focus",
    body: "Full-stack and frontend development, lifelong learning, and building meaningful digital experiences that solve real-world problems.",
  },
];

const highlights = [
  "Razorpay Integration Project",
  "Train Reservation System",
  "Bus Reservation System",
  "Online Food Delivery System",
  "Manali Tour Booking Platform",
];

const coreStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "Git",
];

const About = () => {
  return (
    <section
      id="about-me"
      className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// about me" title="Building clean, scalable products.">
          I&apos;m a dedicated developer with a passion for creating innovative
          solutions and beautiful user experiences. With a strong foundation in
          modern web technologies, I thrive on turning ideas into clean,
          scalable, and impactful digital products.
        </SectionHeading>

        {/* Stats */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-4xl font-bold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {s.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Journey */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              My Journey
            </h3>
            {journey.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
              >
                <span className="shrink-0 w-11 h-11 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Icon className="text-xl" />
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Core stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {coreStack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#skills"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                See all skills <FiArrowUpRight />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Project highlights
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                {highlights.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/pabitraghara?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                See more projects <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
