import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Me</h1>
        <p>Let’s work together or just say hi 👋</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> ellyboywalican@gmail.com</p>
        </div>
      </div>

      {/* ✅ Footer */}
      <div className="footer">
        © 2025 Ellyboy A. Walican. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
