import React from 'react';
import { Link } from 'react-scroll';

import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';

export default function Contact() {
  return (
    <section id="Contact">
      <div className="contact-details">
        <h1 className="section-heading">Get In Touch</h1>
        <p>
          Anything else you want to know?<br/>
          Feel free to leave me an
          <a href="mailto:ana-nath@gmx.de" className="contact-links">
            email
          </a>
          or add me on my
          <Link
            to="Footer"
            smooth={true}
            duration={1500}
            delay={100}
            className="contact-links"
          >
            social media
          </Link>
          .
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
