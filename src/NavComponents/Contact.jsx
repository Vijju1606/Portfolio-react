import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

const Contact = () => (
  <div className="contact-layout">
    <div className="contact-left">
      <img src="src/Images/devi.jpg" alt="Your Name" className="contact-photo" />
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/deviprasad-setti-54b358220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/Vijju1606" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
         <a href="https://www.instagram.com/deviprasad.vijju/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        
        
        <a href="https://www.facebook.com/prasad.setti.31" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
      </div>
    </div>
    <div className="contact-right">
      <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="dc077c88-5c5e-4c12-bdf2-a52685a08a99" />
        <h2>Contact Me</h2>
        <input type="text" name='Name' placeholder="Name"  required />
        <input type="email" name='Email' placeholder="Email"  required />
        <input type="tel" name='Phone' placeholder="Phone"  required />
        <textarea  name='Message' placeholder="Your Message" rows={5}  required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default Contact;