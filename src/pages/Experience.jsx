import React from "react";
import "../css/borderAnimation.css"; // Ensure this file exists and includes the animation

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Experience
        </h2>

        <div className="relative card">
          <div className="relative z-10 bg-black p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold text-blue-500">
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
