import React from "react";
import "../css/skillsEnhanced.css";
import { FaNodeJs } from "react-icons/fa";
import {
  SiNestjs,
  SiMysql,
  SiRedis,
  SiPostman,
  SiFigma,
  SiSequelize,
  SiApollographql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const frontendSkills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
];

const backendSkills = [
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Sequelize", icon: SiSequelize, color: "text-indigo-600" },
  { name: "REST APIs", icon: SiApollographql, color: "text-pink-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "SQL", icon: SiMysql, color: "text-blue-700" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-900" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
];

const tools = [
  { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-600" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-purple-400/20 rounded-full blur-2xl animate-bounce-slow animation-delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-bounce-slow animation-delay-2000"></div>
        <div className="absolute bottom-32 right-20 w-18 h-18 bg-yellow-400/20 rounded-full blur-2xl animate-bounce-slow animation-delay-3000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-glow">
          My Skills
        </h2>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent category-header">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {frontendSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className={`text-4xl mb-2 ${skill.color}`} />
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent category-header">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {backendSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className={`text-4xl mb-2 ${skill.color}`} />
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent category-header">
            Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className={`text-4xl mb-2 ${tool.color}`} />
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
