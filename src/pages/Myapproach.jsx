import React, { useState } from "react";

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
    <section className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          My Approach
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative p-3 lg:p-0">
          {contents.map((content, index) => (
            <div
              key={index}
              className="group w-full h-[35rem] p-5 rounded-[7px] relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              {/* Corner plus icons */}
              <span className="absolute -top-3 left-1 text-[30px]">+</span>
              <span className="absolute text-[30px] right-1 -top-3">+</span>
              <span className="absolute text-[30px] right-1 -bottom-1">+</span>
              <span className="absolute text-[30px] left-1 -bottom-1">+</span>

              {/* Card background and content */}
              <div className="bg-black w-full h-full rounded-[7px] flex flex-col items-center justify-center relative">
                {/* Phase title - visible by default, hidden on hover or when active on mobile */}
                <div
                  className={`box relative inline-block rounded-full px-5 py-2 z-20 transition-opacity duration-500 ${
                    activeCard === index
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-0"
                  }`}
                >
                  <div className="glass relative z-10">
                    <h1 className="text-white text-2xl font-bold">
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
                  <h1 className="text-[30px] font-bold mb-2.5">
                    {content.heading}
                  </h1>
                  <p className="text-gray-300">{content.para}</p>
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
