import React from "react";
import SectionHeading from "../layout/SectionHeading";
import useReveal from "../hooks/useReveal";
import { experiences } from "../data/experienceData";

const DateRange = ({ start, end }) => (
  <>
    <time dateTime={start.dateTime}>{start.label}</time> –{" "}
    {end.dateTime ? <time dateTime={end.dateTime}>{end.label}</time> : end.label}
  </>
);

const TimelineItem = ({ item, index }) => {
  const [ref, visible] = useReveal();

  return (
    <li
      ref={ref}
      className={`reveal relative pl-12 sm:pl-16 pb-14 last:pb-0 ${
        visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className={`absolute left-[9px] sm:left-[17px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 ${
          item.current
            ? "bg-indigo-500 timeline-dot-current"
            : "bg-slate-400 dark:bg-slate-600"
        }`}
      />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 font-mono text-sm text-slate-500 dark:text-slate-400">
        <span>
          <DateRange start={item.start} end={item.end} />
        </span>
        {item.current && (
          <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
            Current
          </span>
        )}
      </div>

      <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-indigo-400/50 transition-all duration-300">
        <header className="mb-5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.role}
          </h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {item.company}{" "}
            <span className="text-slate-500 dark:text-slate-400 font-normal">
              · {item.type}
            </span>
          </p>
        </header>

        <div
          className={`grid gap-8 ${
            item.certificate ? "lg:grid-cols-[1.5fr_1fr]" : ""
          }`}
        >
          <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {item.certificate && (
            <a
              href={item.certificate.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block self-start"
            >
              <img
                src={item.certificate.src}
                alt={item.certificate.alt}
                loading="lazy"
                className="rounded-xl w-full border border-slate-200 dark:border-slate-700 shadow-md group-hover:shadow-lg transition-shadow"
              />
            </a>
          )}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((t) => (
            <li
              key={t}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
};

const Experience = () => {
  const [lineRef, lineVisible] = useReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="// experience" title="Where I've worked">
          Hands-on experience shipping production features across the frontend
          and backend.
        </SectionHeading>

        <div className="relative">
          {/* Vertical line */}
          <span
            ref={lineRef}
            aria-hidden="true"
            className={`timeline-line absolute left-4 sm:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-sky-400 to-slate-300 dark:to-slate-700 ${
              lineVisible ? "is-visible" : ""
            }`}
          />
          <ol className="relative">
            {experiences.map((item, i) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                index={i}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
