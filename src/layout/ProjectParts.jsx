import React, { useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { initials, isRepoLink, isTodo } from "../utils/projectLinks";

/** Shown when a project has no screenshot (or the image fails to load). */
export const ImageFallback = ({ name }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/15 via-sky-400/10 to-transparent dark:from-indigo-500/25 dark:via-sky-400/10">
    <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
    <div className="relative flex flex-col items-center gap-3 text-indigo-600 dark:text-indigo-300">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/30 bg-white/70 dark:bg-slate-900/70 font-display text-2xl font-bold shadow-sm backdrop-blur">
        {initials(name)}
      </span>
      <span className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
        <FaCode aria-hidden="true" /> preview coming soon
      </span>
    </div>
  </div>
);

/** Screenshot with a graceful fallback; fills its (relative) parent. */
export const ProjectImage = ({ image, name, className = "" }) => {
  const [failed, setFailed] = useState(false);
  if (!image || failed) return <ImageFallback name={name} />;
  return (
    <img
      src={image}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out ${className}`}
    />
  );
};

export const TechChip = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <li className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-800/60 px-2.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
      {Icon && (
        <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${tech.color}`} />
      )}
      {tech.name}
    </li>
  );
};

export const TechList = ({ logos = [], className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tech stack">
    {logos.map((tech) => (
      <TechChip key={tech.name} tech={tech} />
    ))}
  </ul>
);

export const Description = ({ text, className = "" }) =>
  text ? (
    <p
      className={`leading-relaxed ${
        isTodo(text)
          ? "font-mono text-xs text-amber-600 dark:text-amber-400"
          : "text-slate-600 dark:text-slate-400"
      } ${className}`}
    >
      {text}
    </p>
  ) : null;

/** "Live demo" (only when a live link exists) + "Source"/"GitHub" buttons. */
export const ProjectLinks = ({ name, livelink, githublink, className = "" }) => {
  const repo = isRepoLink(githublink);
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {livelink && (
        <a
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${name} (opens in a new tab)`}
          className="group/btn inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:bg-indigo-500 hover:shadow-indigo-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Live demo
          <FiArrowUpRight
            aria-hidden="true"
            className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
          />
        </a>
      )}
      {githublink && (
        <a
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${repo ? "Source code" : "GitHub profile"} for ${name} (opens in a new tab)`}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <FaGithub aria-hidden="true" />
          {repo ? "Source" : "GitHub"}
        </a>
      )}
    </div>
  );
};

export const LiveBadge = ({ className = "" }) => (
  <span
    className={`flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow backdrop-blur ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-pulse" />
    Live
  </span>
);
