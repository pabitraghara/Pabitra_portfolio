import React from "react";
import Card from "../layout/Card";
import { projects } from "../data/projectData";
import SectionHeading from "../layout/SectionHeading";
const Projects = () => {
  return (
    <section
      id="project"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="// projects" title="Things I've built" center />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8 p-4 sm:p-4">
          {projects.map((project) => (
            <Card
              key={project.name} // Add key
              name={project.name}
              image={project.image}
              logos={project.logos}
              githublink={project.githublink}
              githubrepolink={project.githubrepolink}
              livelink={project.livelink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
