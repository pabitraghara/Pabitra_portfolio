import React from "react";

const SectionHeading = ({ eyebrow, title, children, center = false }) => (
  <div className={`max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
    <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-3">
      {eyebrow}
    </p>
    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
      {title}
    </h2>
    {children && (
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        {children}
      </p>
    )}
  </div>
);

export default SectionHeading;
