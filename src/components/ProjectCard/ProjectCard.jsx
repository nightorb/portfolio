import React from 'react';

import './ProjectCard.scss';

export default function ProjectCard(props) {
  return (
    <div id="ProjectCard">
      <img
        src={`../../../img/${props.coverImage}.png`}
        alt={props.title}
        className="project-img"
      />
      <div className="image-tint"></div>
      <div className="project-card-content">
        <h1 className="project-title">{props.title}</h1>
        <h2 className="project-subtitle">{props.subtitle}</h2>
        <ul>
          {props.stack.map((details) => (
            <li key={details.stack}>{details}</li>
          ))}
        </ul>
        <p className="project-description">{props.description}</p>
        <div className="project-link-container">
          <a href={props.liveUrl} target="_blank" rel="noreferrer" className="btn btn-project-card">
            Live Demo
          </a>
          <a href={props.ghUrl} target="_blank" rel="noreferrer" className="btn btn-project-card">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
