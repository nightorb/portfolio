import React from 'react';
import { Link } from 'react-scroll';

import './Hero.scss';

export default function Hero() {
  return (
    <section id="Hero">
      <h2 className="big-heading">Hi there, I'm Ana.</h2>
      <h1 className="big-heading">
        Full-Stack Web Developer & 3D Game Artist.
      </h1>
      <h2 className="sub-heading">
        I'm specialized in designing and coding engaging visual experiences.
      </h2>
      <div className="hero-link-container">
        <Link
          to="Contact"
          smooth={true}
          duration={2000}
          delay={100}
          offset={100}
          className="btn btn-hero"
        >
          Get In Touch
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={1500}
          delay={100}
          className="btn btn-hero"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
