import React from 'react';

import './Navbar.scss';

export default function Navbar() {
  return (
    <header id="Navbar">
      <nav className="navbar-nav">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}
