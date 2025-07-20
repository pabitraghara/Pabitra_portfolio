import React from "react";
import cv from "../../public/PABITRA_GHARA.pdf";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-4 p-20 mt-6"
      >
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="w-50 h-50 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              <img src="/pabitra.png" alt="" className="rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Pabitra Ghara</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate{" "}
            <span className="font-semibold text-blue-600">
              Full Stack Developer
            </span>{" "}
            specializing in React, Node.js, and modern web technologies. I
            create digital experiences that make a difference.
          </p>

          <div className="flex justify-center mb-8">
            <a
              onClick={handleDownload}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer relative resume-button"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-7">
            <a
              href="mailto:pabitraghara384@gmail.com"
              aria-label="Send Email"
              className="hover:scale-110 transition-transform bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <MdEmail className="text-[30px] text-red-700 cursor-pointer" />
            </a>
            <a
              href="tel:+9381935038"
              aria-label="Call Phone"
              className="hover:scale-110 transition-transform bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <FaPhone className="text-[30px] text-green-500 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/pabitraghara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:scale-110 transition-transform bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <FaLinkedin className="text-[30px] text-blue-700 cursor-pointer " />
            </a>
            <a
              href="https://github.com/pabitraghara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:scale-110 transition-transform bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <FaGithub className="text-[30px] text-gray-800 cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
