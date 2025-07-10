import React from "react";

const Job = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Open for Job Roles
        </h2>
        <p className="text-xl text-blue-600 font-semibold mb-2">
          On-Site, Hybrid, Remote
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Reach out to me today and let's discuss how I can contribute to your
          team.
        </p>

        <a
          href="mailto:pabitraghara384@gmail.com"
          className="relative inline-block px-10 py-3 text-white bg-black rounded-[7px] overflow-hidden animated-border"
        >
          <span className="relative z-10">Let's get in touch</span>
        </a>
      </div>
    </section>
  );
};

export default Job;
