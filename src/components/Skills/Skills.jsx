import React from 'react';

import { frontendSkills, backendSkills, otherSkills } from '../../data';
import './Skills.scss';

export default function Skills() {
  return (
    <section id="Skills">
      <h1 className="section-heading">Skills</h1>
      <div className="skills-list">
        <section className="skills-section">
          <h2 className="skills-subheading">Front-End</h2>
          <ul>
            {frontendSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 className="skills-subheading">Back-End</h2>
          <ul>
            {backendSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 className="skills-subheading">Other</h2>
          <ul>
            {otherSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
