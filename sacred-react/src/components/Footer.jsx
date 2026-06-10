import React from 'react';
import '../style/comp_css/footer.css'; // Import your CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Sacred Heart Academy</h3>
          <p>
            Sacred Heart Academy is dedicated to providing quality education and fostering holistic development for our students. Join us in shaping a brighter future.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/news-events">News & Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="virginia@dawamu.ac.ke">virginia@dawamu.ac.ke</a>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <a href="tel:+254 722 450 173">+254 722 450 173</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="hhttps://www.facebook.com/DawamuSchool/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://x.com/dawamuschool" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/dawamu_school/profilecard/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/dawamu-school/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2026 Dawamu Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}