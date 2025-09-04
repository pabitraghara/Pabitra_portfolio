import React from "react";
import "../css/abouteAnimation.css"; // Make sure to import the custom CSS
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about-me" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated developer with a passion for creating innovative
              solutions and beautiful user experiences. With a strong foundation
              in modern web technologies, I thrive on turning ideas into clean,
              scalable, and impactful digital products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I completed my graduation in Bachelor of Computer Applications
                (BCA) from Saroj Mohan Institute of Technology, where I built a
                strong foundation in software development and problem-solving.
                To deepen my expertise, I pursued a Master of Computer
                Applications (MCA) at Meghnad Saha Institute of Technology,
                focusing on advanced topics in computer science and technology.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                After completing my studies, I began my professional journey as
                a Full Stack Developer Intern at HeyCoach, where I gained 4
                months of hands-on experience working on production-ready
                applications. I worked with modern technologies including
                Next.js, React, NestJS, TypeScript, Node.js, JavaScript,
                Tailwind CSS, and Git.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Currently, I’m working as a Frontend Developer Intern at Macv,
                where I focus on building responsive, user-friendly interfaces
                and integrating APIs using React.js, Next.js, TypeScript, and
                Tailwind CSS. I collaborate with backend teams, ensure smooth
                data handling, and contribute to delivering seamless user
                experiences in an Agile environment.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                This journey has shaped me into a confident and capable
                developer who thrives on solving real-world challenges through
                technology. I'm passionate about full-stack and frontend
                development, lifelong learning, and building meaningful digital
                experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* One Card */}
              <div className="card-flip group w-full max-w-sm mx-auto">
                <div className="card-inner relative w-full h-72 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* FRONT SIDE — visible by default (Projects Completed) */}
                  <div className="card-front absolute inset-0 bg-blue-50 p-6 rounded-lg text-center backface-hidden flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      35+
                    </div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>

                  {/* BACK SIDE — visible on hover (Experience card) */}
                  <div className="card-back absolute inset-0 p-[3px] rounded-2xl backface-hidden rotate-y-180 transition-transform duration-500">
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-xl text-white h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-5">
                          Projects
                        </h1>
                        <ul className="list-disc list-inside space-y-1 text-[16px] sm:text-[16px] leading-relaxed text-gray-200">
                          <li>Razorpay Integration Project</li>
                          <li>Train Reservation System</li>
                          <li>Bus Reservation System</li>
                          <li>Online Food Delivery System</li>
                          <li>Manali Tour Booking Platform</li>
                        </ul>
                      </div>

                      <div className="mt-5">
                        <a
                          href="https://github.com/pabitraghara?tab=repositories"
                          target="_blank"
                          className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:underline hover:text-cyan-300 transition-colors duration-300"
                        >
                          See More Projects
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-right"
                          >
                            <path d="M18 8L22 12L18 16"></path>
                            <path d="M2 12H22"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Card */}
              <div className="card-flip group w-full max-w-sm mx-auto">
                <div className="card-inner relative w-full h-72 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* FRONT SIDE — visible by default (Projects Completed) */}
                  <div className="card-front absolute inset-0 bg-[#00b4d8] p-6 rounded-lg text-center backface-hidden flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600">Technologies</div>
                  </div>

                  {/* BACK SIDE — visible on hover (Experience card) */}
                  <div className="card-back absolute inset-0 p-[3px] rounded-2xl backface-hidden rotate-y-180 transition-transform duration-500">
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-lg text-white h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-[18px] sm:text-4xl font-bold text-cyan-400 mb-2 text-wrap">
                          Technologies
                        </h1>

                        <ul className="list-disc list-inside text-[14px] sm:text-[16px] text-gray-200 leading-relaxed">
                          <li>HTML5</li>
                          <li>CSS3</li>
                          <li>JavaScript</li>
                          <li>React</li>
                          <li>Tailwind CSS</li>
                          <li>Next.js</li>
                          <li>NestJS</li>
                        </ul>
                      </div>

                      <div className="">
                        <a
                          href="#skills"
                          className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:underline hover:text-cyan-300 transition-colors duration-300"
                        >
                          See More Skills
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-right"
                          >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Card */}
              <div className="card-flip group w-full max-w-sm mx-auto">
                <div className="card-inner relative w-full h-72 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* FRONT SIDE — visible by default (Projects Completed) */}
                  <div className="card-front absolute inset-0 bg-[#ffccd5] p-6 rounded-lg text-center backface-hidden flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      1
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>

                  {/* BACK SIDE — visible on hover (Experience card) */}
                  <div className="card-back  absolute inset-0 p-[3px] rounded-lg backface-hidden rotate-y-180">
                    <div className="relative bg-black p-6 rounded-lg shadow-md text-white h-full">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-500">
                          Full Stack Developer Intern
                        </h3>
                        <div className="text-white text-sm mb-2">
                          HeyCoach – Internship | Mar 2025 – July 2025
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-500">
                          Frontend Developer Intern
                        </h3>
                        <div className="text-white text-sm mb-2">
                          Macv - Internship | Aug 2025 – Present
                        </div>
                      </div>
                      {/* Your bullet list can go here */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Four Card */}
              <div className="card-flip group w-full max-w-sm mx-auto">
                <div className="card-inner relative w-full h-72 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* FRONT SIDE — visible by default (Projects Completed) */}
                  <div className="card-front absolute inset-0 bg-[#A9E190] p-6 rounded-lg text-center backface-hidden flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>

                  {/* BACK SIDE — visible on hover (Experience card) */}
                  <div className="card-back  absolute inset-0 p-[3px] rounded-lg backface-hidden rotate-y-180">
                    <div className="relative bg-black p-6 rounded-lg shadow-md text-white h-full">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-500">
                          Full Stack Developer Intern
                        </h3>
                        <div className="text-white text-sm mb-2">
                          HeyCoach – Internship | Mar 2025 – July 2025
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-500">
                          Frontend Developer Intern
                        </h3>
                        <div className="text-white text-sm mb-2">
                          Macv - Internship | Aug 2025 – Present
                        </div>
                      </div>
                      {/* Your bullet list can go here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
