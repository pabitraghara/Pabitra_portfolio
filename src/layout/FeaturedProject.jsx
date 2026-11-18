import React from "react";
import { FiLock } from "react-icons/fi";
import useReveal from "../hooks/useReveal";
import { displayUrl, trackSpotlight } from "../utils/projectLinks";
import {
  Description,
  LiveBadge,
  ProjectImage,
  ProjectLinks,
  TechList,
} from "./ProjectParts";

/**
 * Large, alternating showcase row for `featured` projects: the screenshot sits
 * in a browser-window frame whose address bar shows the project's own URL.
 */
const FeaturedProject = ({
  name,
  image,
  description,
  logos,
  githublink,
  livelink,
  index = 0,
  reverse = false,
}) => {
  const [ref, visible] = useReveal();
  const number = String(index + 1).padStart(2, "0");
  const primaryHref = livelink || githublink;
  const address = displayUrl(primaryHref);

  return (
    <article
      ref={ref}
      className={`reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
        visible ? "is-visible" : ""
      }`}
    >
      {/* Browser-frame preview */}
      <div
        className={`group relative isolate lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-500/25 via-sky-400/15 to-fuchsia-500/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          onPointerMove={trackSpotlight}
          className="spotlight relative block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 dark:shadow-black/40 transition duration-500 group-hover:-translate-y-1 group-hover:border-indigo-400/60"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <span className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white dark:bg-slate-800/80 px-3 py-1 font-mono text-[11px] text-slate-500 dark:text-slate-400">
              <FiLock className="shrink-0" />
              <span className="truncate">{address}</span>
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
            <ProjectImage
              image={image}
              name={name}
              className="group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            {livelink && <LiveBadge className="absolute right-4 top-4" />}
          </div>
        </a>
      </div>

      {/* Details */}
      <div className={`relative lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-2 select-none font-display text-8xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgb(99_102_241/0.25)]"
        >
          {number}
        </span>
        <p className="relative mb-3 font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Featured project
        </p>
        <h3 className="relative text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          {name}
        </h3>
        <div className="relative mt-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm backdrop-blur">
          <Description text={description} />
        </div>
        <TechList logos={logos} className="relative mt-5" />
        <ProjectLinks
          name={name}
          livelink={livelink}
          githublink={githublink}
          className="relative mt-7"
        />
      </div>
    </article>
  );
};

export default FeaturedProject;
