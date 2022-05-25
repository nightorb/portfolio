import React from 'react';

import './ProjectCard.scss';

export default function ProjectCard(props) {
  return (
    <div id="ProjectCard">
      <img
        src={process.env.PUBLIC_URL + `/img/${props.coverImage}.png`}
        alt={props.title}
        className="project-img"
      />
      <div className="image-tint"></div>
      <div className="image-overlay">
        <h1 className="project-title">{props.title}</h1>
        <h2 className="project-subtitle">{props.subtitle}</h2>
      </div>
      <div className="project-link-container">
        { props.liveUrl === null ? null : (
          <a href={props.liveUrl} target="_blank" rel="noreferrer" className="btn btn-project-card">
            Demo
          </a>
        )}
        <a href={props.ghUrl} target="_blank" rel="noreferrer" className="btn btn-project-card">
          Code
        </a>
        { props.caseStudy === null ? null : (
          <a
            href={process.env.PUBLIC_URL + `/docs/${props.caseStudy}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-project-card"
          >
            Case Study
          </a>
        )}
      </div>
    </div>
  );
}
