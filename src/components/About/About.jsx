import React from 'react';

import './About.scss';

export default function About() {
  return (
    <section id="About">
      <h1 className="section-heading">About Me</h1>
      <div className="about-section">
        <div className="text">
          <p className="about-text">
            Hi! My name is Anastasia Nathanailidou, and I'm a full-stack web developer who loves to create unique designs.
            When working on any project, I always strive for a high-quality outcome. I'm an outside-the-box thinker,
            who's driven by curiosity, and willing to learn new software or programming languages. As an educated 3D Game Artist,
            I'm passionate about designing creative and engaging visual experiences.
          </p>
          <p className="about-text">
            A lot has changed in the past few years, so I decided to switch to web development which has interested me for
            a long time. Now I want to utilize my skills to design and code functional websites that stand out.
          </p>
          <p className="about-text">
            My interest in technology reaches back to my childhood: It all started with playing video games on my Super Nintendo and Game Boy Color.
            Back in the day, we couldn't afford a computer, so I would always get excited when I had the chance to use one.
            I loved exploring what I could do with it, even just surfing the internet.
          </p>
          <p className="about-text">
            When I'm not on my computer, I love to cuddle and spend time with my little dog, Gaia, the cutest, loveliest Chihuahua you'll ever meet.
            Apart from that, I'm interested in martial arts and practice Kung Fu regularly. I also like to read, draw, and sleep (typical introvert).
          </p>
        </div>
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + `/img/portrait.jpg`}
            alt="portrait of me"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}
