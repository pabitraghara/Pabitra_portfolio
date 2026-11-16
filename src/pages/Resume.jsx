import React from "react";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";
import {
  notifyResumeDownload,
  openResume,
  resumeFileName,
  resumeUrl,
} from "../utils/resume";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-8 sm:p-12 text-white shadow-2xl">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl"
          />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <span className="w-16 h-16 inline-flex items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <FiFileText className="text-3xl" />
            </span>

            <div>
              <p className="font-mono text-sm text-indigo-200 mb-2">
                {"// curriculum vitae"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Grab a copy of my CV
              </h2>
              <p className="text-indigo-100/90 max-w-xl leading-relaxed">
                A one-stop summary of my education, internships at Macv and
                HeyCoach, projects and technical skills. Available as a PDF.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href={resumeUrl}
                download={resumeFileName}
                onClick={notifyResumeDownload}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                <FiDownload />
                Download PDF
              </a>
              <button
                type="button"
                onClick={openResume}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <FiEye />
                View online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
