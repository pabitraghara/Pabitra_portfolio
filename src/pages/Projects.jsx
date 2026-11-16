import React, { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../layout/Card";
import { projects, githubRepositories } from "../data/projectData";
import SectionHeading from "../layout/SectionHeading";

const ALL = "All";

/** Tech names ordered by how many projects use them (most first). */
const getFilters = (list) => {
  const counts = new Map();
  list.forEach((p) =>
    p.logos.forEach((t) => counts.set(t.name, (counts.get(t.name) || 0) + 1))
  );
  return [...counts.entries()]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name]) => name);
};

const Projects = () => {
  const [active, setActive] = useState(ALL);
  const filters = useMemo(() => [ALL, ...getFilters(projects)], []);

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

  const renderCard = (project, isFeatured = false) => (
    <Card
      key={project.name}
      index={projects.indexOf(project)}
      featured={isFeatured}
      name={project.name}
      image={project.image}
      description={project.description}
      logos={project.logos}
      githublink={project.githublink}
      livelink={project.livelink}
    />
  );

  return (
    <section
      id="project"
      className="relative overflow-hidden py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="// projects" title="Things I've built" center>
          A selection of full-stack and frontend projects — from live, deployed
          apps to backend-heavy systems.
        </SectionHeading>

        {/* Stats */}
        <dl className="mx-auto -mt-6 mb-10 flex max-w-md justify-center divide-x divide-slate-200 dark:divide-slate-800 font-mono text-sm">
          <div className="px-5 text-center">
            <dt className="text-slate-500 dark:text-slate-400">projects</dt>
            <dd className="text-2xl font-bold text-slate-900 dark:text-white">
              {projects.length}
            </dd>
          </div>
          <div className="px-5 text-center">
            <dt className="text-slate-500 dark:text-slate-400">live demos</dt>
            <dd className="text-2xl font-bold text-slate-900 dark:text-white">
              {projects.filter((p) => p.livelink).length}
            </dd>
          </div>
          <div className="px-5 text-center">
            <dt className="text-slate-500 dark:text-slate-400">technologies</dt>
            <dd className="text-2xl font-bold text-slate-900 dark:text-white">
              {new Set(projects.flatMap((p) => p.logos.map((t) => t.name))).size}
            </dd>
          </div>
        </dl>

        {/* Filters */}
        <div
          role="group"
          aria-label="Filter projects by technology"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => {
            const selected = f === active;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
                  selected
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {`Showing ${filtered.length} project${filtered.length === 1 ? "" : "s"}${
            active === ALL ? "" : ` using ${active}`
          }`}
        </p>

        {featured.length > 0 && (
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featured.map((p) => renderCard(p, true))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <h3 className="mb-6 flex items-center gap-4 font-mono text-sm text-slate-500 dark:text-slate-400">
                more projects
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </h3>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {rest.map((p) => renderCard(p))}
            </div>
          </>
        )}

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
