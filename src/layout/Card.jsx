import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ image, name, logos, githublink, githubrepolink, livelink }) => {
  return (
    // <div className="p-5 bg-black/10 backdrop-blur-lg rounded-2xl">
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300 w-full max-w-md mx-auto">
      {/* Image */}
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-white space-y-4 bg-white h-[100%]">
        {/* Title */}
        <h2 className="text-2xl text-black font-bold">{name}</h2>

        {/* Tags */}
        <div className="flex flex-wrap">
          {logos.map((logo, idx) => {
            const isObject = typeof logo === "object" && logo.icon;
            const Icon = isObject ? logo.icon : null;
            const color = isObject ? logo.color : "bg-gray-800";
            const label = isObject ? logo.name : logo;

            return (
              <div
                key={idx}
                className={`flex items-center gap-1 px-4 py-4 rounded-full text-sm font-medium shadow-sm text-white ${color} -mr-4 mb-2`}
              >
                {Icon && <Icon size={25} />}
                {label}
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between items-center gap-3 mt-4">
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={githubrepolink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            <FaGithub /> Repo
          </a>
          <a
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;
