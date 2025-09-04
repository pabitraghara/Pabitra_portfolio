import React from "react";
import "../css/borderAnimation.css"; // Ensure this file exists and includes the animation
import "../css/experienceEnhanced.css"; // Enhanced experience styles

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 text-center animate-gradient-text">
          Experience
        </h2>

        <div className="relative card experience-card-glow mb-8">
          <div className="relative z-10 bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 p-8 rounded-2xl shadow-2xl text-white border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Full Stack Developer Intern
            </h3>
            <div className="text-white text-sm mb-4">
              HeyCoach – Internship | <time dateTime="2025-03">Mar 2025</time> –{" "}
              <time dateTime="2025-07">July 2025</time>
            </div>

            <div className="grid md:grid-cols-2 items-start">
              <ol className="list-decimal list-inside text-[#c8c3c3] leading-relaxed space-y-2">
                <li>
                  Worked on the <strong>Sync</strong> project, contributing to
                  end-to-end feature development in a collaborative Agile
                  environment.
                </li>
                <li>
                  Developed a popular <strong>Resume Review</strong> system
                  where mentees could upload resumes and receive personalized
                  mentor feedback within 48 hours.
                </li>
                <li>
                  Implemented <strong>email reminders using BullMQ</strong> for
                  scheduled notifications and background processing.
                </li>
                <li>
                  Developed dynamic and responsive UIs using{" "}
                  <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                  <strong>TypeScript</strong>, <strong>HTML5</strong>,{" "}
                  <strong>CSS3</strong>, and <strong>Tailwind CSS</strong>.
                </li>
                <li>
                  Created and maintained scalable backend services using{" "}
                  <strong>NestJS</strong>, <strong>Node.js</strong>, and{" "}
                  <strong>Express.js</strong>.
                </li>
                <li>
                  Designed and integrated secure <strong>RESTful APIs</strong>{" "}
                  for modules like authentication and resume analysis.
                </li>
                <li>
                  Managed and queried relational data using{" "}
                  <strong>PostgreSQL</strong>.
                </li>
                <li>
                  Used <strong>Git</strong> for version control and collaborated
                  via code reviews and regular deployments.
                </li>
              </ol>

              <img
                src="Pabitra_Internship_Certificate.jpg"
                alt="Internship Certificate from HeyCoach"
                className="rounded-md w-full max-w-md mx-auto border border-gray-300 sm:-mt-14"
              />
            </div>
          </div>
        </div>

        <div className="relative card">
          <div className="relative z-10 bg-black p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold text-blue-500">
              Frontend Developer Intern
            </h3>
            <div className="text-white text-sm mb-4">
              Macv – Internship | <time dateTime="2025-03">Aug 2025</time> –{" "}
              <time dateTime="2025-07">Present</time>
            </div>

            <div className="grid md:grid-cols-1 items-start">
              <ol className="list-decimal list-inside text-[#c8c3c3] leading-relaxed space-y-2">
                <li>
                  Built responsive and interactive user interfaces using{" "}
                  <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                  <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>
                  .
                </li>
                <li>
                  Integrated APIs and implemented secure{" "}
                  <strong>authentication</strong> flows for various modules.
                </li>
                <li>
                  Worked closely with backend developers to ensure smooth{" "}
                  <strong>data fetching</strong> and optimized performance.
                </li>
                <li>
                  Collaborated in an <strong>Agile</strong> environment with
                  daily stand-ups, sprint planning, and peer code reviews.
                </li>
                <li>
                  Managed project code using <strong>Git</strong> and maintained
                  consistent version control practices.
                </li>
                <li>
                  Enhanced cross-browser compatibility and improved{" "}
                  <strong>accessibility</strong> for better user experience.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
