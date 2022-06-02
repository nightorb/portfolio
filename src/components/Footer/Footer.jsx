import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer id="Footer">
      <div className="footer">
        <div className="footer-text">
          <p>Don't forget to add me on my social media</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/anastasia-n-945661227" className="footer-icons" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/icons/linkedin_icon.svg"} alt="LinkedIn logo" />          
          </a>
          <a href="https://github.com/nightorb" className="footer-icons" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/icons/github_icon.svg"} alt="GitHub logo" />
          </a>
          <a href="https://www.artstation.com/nightorb" className="footer-icons" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/icons/artstation_icon.svg"} alt="Artstation logo" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Designed & Built by Anastasia Nathanailidou</p>
      </div>
    </footer>
  );
}
