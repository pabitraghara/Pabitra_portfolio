import React, { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../layout/Card";
import FeaturedProject from "../layout/FeaturedProject";
import { projects, githubRepositories } from "../data/projectData";
import SectionHeading from "../layout/SectionHeading";

const ALL = "All";

/**
 * Tech filters as { name, count }, ordered by how many projects use them
 * (most first). Techs used by a single project are left out.
 */
const getFilters = (list) => {
  const counts = new Map();
  list.forEach((p) =>
    p.logos.forEach((t) => counts.set(t.name, (counts.get(t.name) || 0) + 1))
  );
  return [...counts.entries()]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count }));
};

const stats = [
  { label: "projects", value: projects.length },
  { label: "live demos", value: projects.filter((p) => p.livelink).length },
  {
    label: "technologies",
    value: new Set(projects.flatMap((p) => p.logos.map((t) => t.name))).size,
  },
];

const cardProps = (p) => ({
  name: p.name,
  image: p.image,
  description: p.description,
  logos: p.logos,
  githublink: p.githublink,
  livelink: p.livelink,
  index: projects.indexOf(p),
});

const Projects = () => {
  const [active, setActive] = useState(ALL);
  const filters = useMemo(
    () => [{ name: ALL, count: projects.length }, ...getFilters(projects)],
    []
  );

  const filtered = useMemo(
    () =>
      active === ALL
        ? projects
        : projects.filter((p) => p.logos.some((t) => t.name === active)),
    [active]
  );

  // Only split into "featured" / "more" when showing everything.
  const featured = active === ALL ? filtered.filter((p) => p.featured) : [];
  const rest = active === ALL ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <section
      id="project"
      className="relative overflow-hidden py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="// projects" title="Things I've built" center>
          A selection of full-stack and frontend projects — from live, deployed
          apps to backend-heavy systems.
        </SectionHeading>

        {/* Stats */}
        <dl className="mx-auto -mt-6 mb-20 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 font-mono text-sm shadow-sm backdrop-blur divide-x divide-slate-200 dark:divide-slate-800">
          {stats.map((s) => (
            // dt precedes dd in the DOM (valid <dl>); flex-col-reverse shows the number first.
            <div key={s.label} className="flex flex-col-reverse px-4 py-4 text-center">
              <dt className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {s.label}
              </dt>
              <dd className="font-display text-3xl font-bold bg-gradient-to-br from-indigo-600 to-sky-500 dark:from-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {featured.length > 0 && (
          <div className="mb-28 space-y-24 lg:space-y-32">
            {featured.map((p, i) => (
              <FeaturedProject
                key={p.name}
                reverse={i % 2 === 1}
                {...cardProps(p)}
              />
            ))}
          </div>
        )}

        {/* Archive header + filters */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {featured.length > 0 ? "More projects" : "Projects"}
            </h3>
            <p className="mt-2 font-mono text-sm text-slate-500 dark:text-slate-400">
              {active === ALL
                ? "filter by technology →"
                : `${filtered.length} project${
                    filtered.length === 1 ? "" : "s"
                  } using ${active}`}
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by technology"
            className="flex flex-wrap gap-2 lg:justify-end"
          >
            {filters.map(({ name, count }) => {
              const selected = name === active;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive(name)}
                  aria-pressed={selected}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
                    selected
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                      : "border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                  }`}
                >
                  {name}
                  <span
                    aria-hidden="true"
                    className={`rounded-full px-1.5 text-[10px] leading-4 ${
                      selected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {`Showing ${filtered.length} project${filtered.length === 1 ? "" : "s"}${
            active === ALL ? "" : ` using ${active}`
          }`}
        </p>

        {/* Keyed by filter so cards replay their reveal animation. */}
        <div
          key={active}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {rest.map((p) => (
            <Card key={p.name} {...cardProps(p)} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={githubRepositories}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <FaGithub aria-hidden="true" />
            See all repositories on GitHub
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
