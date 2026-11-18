import React from "react";
import useReveal from "../hooks/useReveal";
import { trackSpotlight } from "../utils/projectLinks";
import {
  Description,
  LiveBadge,
  ProjectImage,
  ProjectLinks,
  TechList,
} from "./ProjectParts";

/**
 * Compact project card with scroll reveal, a cursor-following spotlight,
 * image fallback and an optional live link.
 */
const Card = ({
  image,
  name,
  description,
  logos = [],
  githublink,
  livelink,
  index = 0,
}) => {
  const [ref, visible] = useReveal();
  const number = String(index + 1).padStart(2, "0");
  const primaryHref = livelink || githublink;

  return (
    // Outer wrapper owns the scroll-reveal transition; the article owns hover.
    <div
      ref={ref}
      className={`reveal h-full ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <article
        onPointerMove={trackSpotlight}
        className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Media */}
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800"
        >
          <ProjectImage
            image={image}
            name={name}
            className="group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
            {number}
          </span>
          {livelink && <LiveBadge className="absolute right-4 top-4" />}
        </a>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {name}
          </h3>
          <Description text={description} className="mt-3" />
          <TechList logos={logos} className="mt-5" />
          <ProjectLinks
            name={name}
            livelink={livelink}
            githublink={githublink}
            className="mt-auto pt-6"
          />
        </div>
      </article>
    </div>
  );
};

export default Card;
