import React from "react";
import "../css/borderAnimation.css"; // Make sure to import the custom CSS

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
            <div className="text-white text-sm mb-2">
              HeyCoach – Internship | Mar 2025 – July 2025
            </div>

            <ul className="list-disc list-inside text-[#c8c3c3] leading-relaxed space-y-2 mt-4">
              <li>
                Worked on the <strong>Sync</strong> project, contributing to
                end-to-end feature development in a collaborative Agile
                environment.
              </li>
              <li>
                Developed a popular <strong>Resume Review</strong> system where
                mentees could upload resumes and receive personalized mentor
                feedback within 48 hours.
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
                Designed and integrated secure <strong>RESTful APIs</strong> for
                modules like authentication and resume analysis.
              </li>
              <li>
                Managed and queried relational data using{" "}
                <strong>PostgreSQL</strong>.
              </li>
              <li>
                Used <strong>Git</strong> for version control and collaborated
                via code reviews and regular deployments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
