import React, { useState } from 'react';
import './Footer.css';

// Import các biểu tượng mạng xã hội từ assets
import facebookIcon from '../../assets/images/Facebook_icon.png';
import instagramIcon from '../../assets/images/Instagram_icon.png';
import twitterIcon from '../../assets/images/X_icon.png';
import linkedinIcon from '../../assets/images/Line_icon.png';

// Import Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing! You will receive notifications soon.');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: About Us */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            HVN is a store that sells the world's top-quality bike. <br />
            "Your satisfaction is our pleasure"
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Cột 2: Working Time */}
        <div className="footer-column">
          <h3>Working Time</h3>
          <ul>
            <li>Monday <span>9h30 - 18h30</span></li>
            <li>Tuesday <span>9h30 - 18h30</span></li>
            <li>Wednesday <span>9h30 - 18h30</span></li>
            <li>Thursday <span>9h30 - 18h30</span></li>
            <li>Friday <span>9h30 - 18h30</span></li>
            <li>Saturday <span>9h30 - 18h30</span></li>
            <li>Sunday <span>9h30 - 18h30</span></li>
          </ul>
        </div>

        {/* Cột 3: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Hà Nội branch <br />
            (+84) 1234-5678 <br />
            giauhuy11@gmail.com
          </p>
          <p>
            Hồ Chí Minh branch <br />
            (+84) 6666-8888 <br />
            vannam22@gmail.com
          </p>
          <p>
            Los Angeles branch <br />
            (213) 054-2004 <br />
            xuanviet33@gmail.com
          </p>
        </div>

        {/* Cột 4: Subscribe Us */}
        <div className="footer-column">
          <h3>Subscribe Us</h3>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Enter your email to subscribe"
            />
            <button type="submit">Send</button>
          </form>
          <p>Sign up now to receive notifications as soon as a new product is added.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Copyright 2025 | Design by HVN</p>
      </div>

      {/* ToastContainer để hiển thị thông báo */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;
