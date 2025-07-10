import React from "react";
import Card from "../layout/Card";
import { projects } from "../data/projectData";
const Projects = () => {
  return (
    <section id="project" className="bg-white py-20 ">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 p-4 sm:p-4">
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
