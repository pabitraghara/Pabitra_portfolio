import React from "react";

const Job = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Open for Job Roles
        </h2>
        <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
          On-Site, Hybrid, Remote
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
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
