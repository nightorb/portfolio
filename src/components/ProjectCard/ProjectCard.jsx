import React, { useState } from 'react';

import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './ProjectCard.scss';

export default function ProjectCard(props) {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const onClickHandle = () => {
    !showProjectDetails ? setShowProjectDetails(true) : setShowProjectDetails(false);
  }

  return (
    <div className="ProjectCard">
      <button 
        type="button"
        onClick={onClickHandle}
        key={props.title}
      >
        <img
          src={`../../../img/${props.coverImage}.png`}
          alt={props.title}
          className="project-img"
        />
        <div className="image-tint"></div>
        <div className="image-overlay">
          <h1 className="project-title">{props.title}</h1>
          <h2 className="project-subtitle">{props.subtitle}</h2>
          {/* <a
            href={props.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
          <a
            href={props.ghUrl}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <button
            type="button"
            onClick={onClickHandle}
            text="More Info"
          > 
            More Info
          </button>
          {showProjectDetails && (
            <ProjectDetails showProjectDetails={showProjectDetails} />
          )} */}
        </div>
      </button>
      {showProjectDetails && (
        <ProjectDetails
          showProjectDetails={showProjectDetails}
          onClickHandle={onClickHandle}
          title={props.title}
          subtitle={props.subtitle}
          stack={props.stack}
          overview={props.overview}
          description={props.description}
          coverImage={props.coverImage}
          projectImages={props.projectImages}
          ghUrl={props.ghUrl}
          liveUrl={props.liveUrl}
        />
      )}
      {console.log(props)}
    </div>
  );
}
