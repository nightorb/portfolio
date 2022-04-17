import React, { useState } from 'react';

import './Contact.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // encode form data
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => alert('Message sent'))
      .catch((err) => alert(err));
  }

  return (
    <section id="Contact">
      <div className="contact-details">
        <h1 className="section-heading">Get In Touch</h1>
        <p>
          Anything else you want to know?<br/>
          Feel free to leave me an email or add me on my social media.
        </p>
        {/* <a href="#d">email@popopo.com</a> */}
      </div>
      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div className="contact-form-input-group">
          <label htmlFor="name" className="contact-form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            className="contact-form-input"
          />
        </div>
        <div className="contact-form-input-group">
          <label htmlFor="email" className="contact-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="contact-form-input"
          />
        </div>
        <div className="contact-form-input-group">
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Leave Your Message Here"
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form-textarea contact-form-input"
          />
        </div>
        <button
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
