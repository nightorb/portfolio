import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-scroll';

import './Contact.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotFielt] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();


  // encode form data
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function onSubmit(e) {
    console.log(e)
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message, botField })
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
      <form
        netlify
        netlify-honeypot="botField"
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
      >
        <div style={{visibility: "hidden"}}>
          <label>Don't fill this out if you're human:</label>
          <input name="botField" onChange={(e) => setBotFielt(e.target.value)} />
        </div>

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
            {...register('name', { required: true, maxLength: 50 })}
            className="contact-form-input"
          />
          {errors.name && <div className="form-error-msg">Please enter your name.</div>}
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
            {...register('email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
            className="contact-form-input"
          />
          {errors.name && <div className="form-error-msg">Please check your email address.</div>}
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
            {...register('message', { required: true })}
            className="contact-form-textarea contact-form-input"
          />
          {errors.name && <div className="form-error-msg">Please enter a message.</div>}
        </div>
        <button
          type="submit"
          className="btn"
        >
          Send
        </button>
      </form>
    </section>
  );
}
