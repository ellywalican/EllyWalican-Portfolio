import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> ellyboywalican@gmail.com</p>
          <p><strong>Phone:</strong> +63 968 247 1142</p>
          <p><strong>Location:</strong> Inanama Llanera Nueva Ecija, Philippines</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com/ellyboyawalican" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/elly.erichan/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@ErichanPlays" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
