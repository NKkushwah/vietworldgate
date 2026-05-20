import React from 'react';
import './Footer.css'; 
import { 
  FaRegEnvelopeOpen, 
  FaArrowRight, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaChevronUp,
  FaRegEnvelope
} from 'react-icons/fa';
import { FaLocationDot, FaMobileScreenButton } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-info">
            <FaRegEnvelopeOpen className="newsletter-icon" />
            <p>Get the latest creative news from VIEC about courses, offers, events and many more.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">
              SUBSCRIBE <FaArrowRight />
            </button>
          </form>
        </div>

        <div className="footer-divider"></div>

        {/* Main Footer Links */}
        <div className="footer-content">
          
          {/* Column 1: About */}
          <div className="footer-col">
            <img 
              src="/src/assets/vietworldgate.png" 
              alt="VIEC Logo" 
              className="footer-logo" 
            />
            <p>VIEC is one of the largest international student recruitment companies in South Asia. In the last 28 years, through our vast network of over 400+ Institutions worldwide & 39 Branches, we have placed 44600 + students all over the world.</p>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Network */}
          <div className="footer-col">
            <h4>VIEC NETWORK</h4>
            <ul>
              <li><a href="#india">VIEC India</a></li>
              <li><a href="#bhutan">VIEC Bhutan</a></li>
              <li><a href="#australia">VIEC Australia (Registered Office)</a></li>
              <li><a href="#nepal-ktm">VIEC Nepal - Kathmandu</a></li>
              <li><a href="#nepal-chitwan">VIEC Nepal - Chitwan</a></li>
              <li><a href="#srilanka-cmb">VIEC Sri Lanka - Colombo</a></li>
              <li><a href="#srilanka-kandy">VIEC Sri Lanka - Kandy</a></li>
              <li><a href="#bangladesh">VIEC Bangladesh - Dhaka</a></li>
            </ul>
          </div>

          {/* Column 3: Study Abroad */}
          <div className="footer-col">
            <h4>VIEC STUDY ABROAD</h4>
            <ul>
              <li><a href="#service-student">Service to Students</a></li>
              <li><a href="#service-institution">Service to institutions</a></li>
              <li><a href="#scholarships">Scholarships</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4>GET IN TOUCH</h4>
            <div className="contact-item">
              <FaLocationDot className="contact-icon" />
              <div className="contact-info">
                <strong>Address</strong>
                <span>Block-F, American Plaza,<br />International Trade Tower, New<br />Delhi, Delhi</span>
              </div>
            </div>
            <div className="contact-item">
              <FaMobileScreenButton className="contact-icon" />
              <div className="contact-info">
                <strong>Phone</strong>
                <span>+91-11 40515555</span>
              </div>
            </div>
            <div className="contact-item">
              <FaRegEnvelope className="contact-icon" />
              <div className="contact-info">
                <strong>Email Address</strong>
                <a href="mailto:info@vieceducation.com">info@vieceducation.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="footer-bottom-divider"></div>
        <div className="footer-bottom">
          <div className="copyright">
            Copyright © 2025 All Rights Reserved. VXL India Edu Centre Pvt. Ltd .
          </div>
          <div className="footer-bottom-links">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#branches">Branches</a>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <a href="#top" className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaChevronUp />
      </a>
    </footer>
  );
};

export default Footer;