import React from 'react';

import { projects } from '../../data';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss';

export default function Projects() {
  return (
    <section id="Projects">
      <div className="projects-section">
        <h1 className="section-heading">Projects</h1>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              stack={project.stack}
              overview={project.overview}
              description={project.description}
              coverImage={project.coverImage}
              projectImages={project.projectImages}
              ghUrl={project.ghUrl}
              liveUrl={project.liveUrl}
              key={project.title}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
