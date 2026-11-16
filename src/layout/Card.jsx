import React, { useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import useReveal from "../hooks/useReveal";

const isTodo = (text) => typeof text === "string" && text.startsWith("TODO(");

/** Is this a link to a specific repository (github.com/<user>/<repo>)? */
const isRepoLink = (url) => {
  try {
    const { hostname, pathname } = new URL(url);
    return hostname === "github.com" && pathname.split("/").filter(Boolean).length >= 2;
  } catch {
    return false;
  }
};

/** Shown when a project has no screenshot (or the image fails to load). */
const ImageFallback = ({ name }) => {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/15 via-sky-400/10 to-transparent dark:from-indigo-500/25 dark:via-sky-400/10">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-3 text-indigo-600 dark:text-indigo-300">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/30 bg-white/70 dark:bg-slate-900/70 font-display text-2xl font-bold shadow-sm backdrop-blur">
          {initials}
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
          <FaCode aria-hidden="true" /> preview coming soon
        </span>
      </div>
    </div>
  );
};

const TechChip = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <li className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
      {Icon && <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${tech.color}`} />}
      {tech.name}
    </li>
  );
};

/**
 * Project card with scroll reveal, image fallback and optional live link.
 * `featured` adds a "Featured project" label and a larger title.
 */
const Card = ({
  image,
  name,
  description,
  logos = [],
  githublink,
  livelink,
  index = 0,
  featured = false,
}) => {
  const [ref, visible] = useReveal();
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(image) && !imgFailed;
  const number = String(index + 1).padStart(2, "0");
  const primaryHref = livelink || githublink;

  return (
    // Outer wrapper owns the scroll-reveal transition; the article owns hover.
    <div
      ref={ref}
      className={`reveal h-full ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* Media */}
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800"
      >
        {showImage ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ImageFallback name={name} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
          {number}
        </span>
        {livelink && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
        )}
      </a>

      {/* Content */}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-8" : ""}`}>
        {featured && (
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Featured project
          </p>
        )}
        <h3
          className={`font-bold text-slate-900 dark:text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {name}
        </h3>

        {description && (
          <p
            className={`mt-3 leading-relaxed ${
              isTodo(description)
                ? "font-mono text-xs text-amber-600 dark:text-amber-400"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            {description}
          </p>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {logos.map((tech) => (
            <TechChip key={tech.name} tech={tech} />
          ))}
        </ul>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${name} (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Live demo <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {githublink && (
            <a
              href={githublink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${isRepoLink(githublink) ? "Source code" : "GitHub profile"} for ${name} (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <FaGithub aria-hidden="true" />
              {isRepoLink(githublink) ? "Source" : "GitHub"}
            </a>
          )}
        </div>
      </div>
    </article>
    </div>
  );
};

export default Card;
