import React from 'react';
import { Link } from 'react-scroll';

import './Navbar.scss';

export default function Navbar() {
  return (
    <header id="Navbar">
      <nav className="navbar-nav">
        <Link
          to="About"
          smooth={true}
          duration={1000}
          delay={100}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={1500}
          delay={100}
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          to="Projects"
          className="nav-link"
        >
          Resume
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={2000}
          delay={100}
          offset={100}
          className="nav-link"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
