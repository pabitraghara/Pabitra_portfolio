import React from "react";
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
      className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Skills
        </h2>

        {/* Frontend Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
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
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Backend</h3>
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
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Tools</h3>
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
