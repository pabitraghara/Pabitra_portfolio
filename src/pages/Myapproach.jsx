import React, { useState } from "react";
import "../css/approachEnhanced.css";

const Myapproach = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const contents = [
    {
      heading: "Planning & Strategy",
      para: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
      heading: "Development & Progress Update",
      para: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    },
    {
      heading: "Development & Launch",
      para: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-28 h-28 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-36 h-36 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-12 animate-gradient-text">
          My Approach
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          My process for bringing your digital vision to life through strategic planning and expert development
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative p-3 lg:p-0">
          {contents.map((content, index) => (
            <div
              key={index}
              className="approach-card group w-full h-[35rem] p-5 rounded-2xl relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30"
              onClick={() => handleCardClick(index)}
            >
              {/* Corner plus icons */}
              <span className="absolute -top-3 left-1 text-[30px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 animate-pulse">+</span>
              <span className="absolute text-[30px] right-1 -top-3 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 animate-pulse animation-delay-500">+</span>
              <span className="absolute text-[30px] right-1 -bottom-1 text-pink-400 group-hover:text-yellow-400 transition-colors duration-300 animate-pulse animation-delay-1000">+</span>
              <span className="absolute text-[30px] left-1 -bottom-1 text-yellow-400 group-hover:text-cyan-400 transition-colors duration-300 animate-pulse animation-delay-1500">+</span>

              {/* Card background and content */}
              <div className="bg-gradient-to-br from-slate-900/90 to-black/90 w-full h-full rounded-2xl flex flex-col items-center justify-center relative border border-purple-500/20">
                {/* Phase title - visible by default, hidden on hover or when active on mobile */}
                <div
                  className={`box relative inline-block rounded-full px-5 py-2 z-20 transition-opacity duration-500 ${
                    activeCard === index
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-0"
                  }`}
                >
                  <div className="glass relative z-10">
                    <h1 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-3xl font-bold animate-pulse">
                      Phase {index + 1}
                    </h1>
                  </div>
                </div>

                {/* Hidden content on hover or click */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center px-6 text-center transition-opacity duration-500 ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <h1 className="text-[32px] font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {content.heading}
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed">{content.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myapproach;
