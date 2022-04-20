import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './ContactForm.scss';

export default function ContactForm({ props, prefix, message}) {
  const [state, handleSubmit] = useForm('ContactForm');

  if (state.succeeded) {
    return <div>Your message has been sent!</div>
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="contact-form"
      id="contact-form"
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
          className="contact-form-input"
        />
        <ValidationError field="name" prefix="Name" errors={state.errors}>
          <div {...props} className="form-error-msg">{prefix} {message}</div>
        </ValidationError>
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
          className="contact-form-input"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors}>
          <div {...props} className="form-error-msg">{prefix} {message}</div>
        </ValidationError>
      </div>
      <div className="contact-form-input-group">
        <label htmlFor="message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave Your Message Here"
          className="contact-form-textarea contact-form-input"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors}>
          <div {...props} className="form-error-msg">{prefix} {message}</div>
        </ValidationError>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn"
      >
        Send
      </button>
    </form>
  );
}
