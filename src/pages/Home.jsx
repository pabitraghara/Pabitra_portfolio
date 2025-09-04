import React from "react";
import cv from "../../public/PABITRA_GHARA.pdf";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../css/homeAnimations.css";

const Home = () => {
  const handleDownload = async () => {
    // 1. Open the resume in a new tab first (this preserves the "click" gesture)
    const resumeUrl = cv; // Make sure this is correct (e.g., from public folder)
    window.open(resumeUrl, "_blank");

    // 2. Then asynchronously send the Discord message
    await fetch(
      "https://discord.com/api/webhooks/1361728535047176393/XO14QcOY7DvaQPy2Z8UP3Wrytoy3baKwOS8hg01wA_9A6NENcvNh0MLiLmvLtTgsJfPM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "📄 Someone downloaded your resume!",
        }),
      }
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        id="#"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-center px-4 p-20  relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-orb orb-4"></div>
          <div className="floating-orb orb-5"></div>
          <div className="floating-orb orb-6"></div>
          <div className="floating-orb orb-7"></div>
          <div className="floating-orb orb-8"></div>
        </div>
        <div className="max-w-4xl relative z-10">
          <div className="mb-8">
            <div className="w-50 h-50 mx-auto mb-6 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl profile-glow animate-pulse-glow">
              <img
                src="/pabitra.png"
                alt=""
                className="rounded-full border-4 border-white/20"
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Pabitra Ghara
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A passionate{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            specializing in React, Node.js, and modern web technologies. I
            create digital experiences that make a difference.
          </p>

          <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-400">
            <a
              onClick={handleDownload}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-full hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-7 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:pabitraghara384@gmail.com"
              aria-label="Send Email"
              className="group relative hover:scale-110 transition-all duration-300 bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:shadow-red-500/25"
            >
              <MdEmail className="text-[32px] text-white cursor-pointer group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="tel:+9381935038"
              aria-label="Call Phone"
              className="group relative hover:scale-110 transition-all duration-300 bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/25"
            >
              <FaPhone className="text-[32px] text-white cursor-pointer group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/pabitraghara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group relative hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <FaLinkedin className="text-[32px] text-white cursor-pointer group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://github.com/pabitraghara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group relative hover:scale-110 transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-900 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <FaGithub className="text-[32px] text-white cursor-pointer group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
