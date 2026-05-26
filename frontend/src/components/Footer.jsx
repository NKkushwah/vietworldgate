import React from 'react';
import './Footer.css'; 
import logo from '../assets/vietworldgate1.png';
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
            <p>Get the latest creative news from VIET WORLDGATE about courses, offers, events and many more.</p>
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
              src={logo} 
              alt="VIET WORLDGATE Logo" 
              className="footer-logo" 
            />
            <p>VIET WORLDGATE is one of the largest international student recruitment companies in South Asia. In the last 6+ years, through our vast network of over 200+ Institutions worldwide & 7+ Branches, we have placed 2600+ students all over the world.</p>
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
            <h4>VIET WORLDGATE</h4>
            <ul>
              <li><a href="#india">VIET WORLDGATE Delhi</a></li>
              <li><a href="#bhutan">VIET WORLDGATE Ghaziabad(Registered Office)</a></li>
              <li><a href="#australia">VIET WORLDGATE Noida</a></li>
              <li><a href="#nepal-ktm">VIET WORLDGATE International branch London</a></li>
            </ul>
          </div>

          {/* Column 3: Study Abroad */}
          <div className="footer-col">
            <h4>VIET WORLDGATE STUDY ABROAD</h4>
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
            
            {/* Domestic Address */}
            <div className="contact-item">
              <FaLocationDot className="contact-icon" />
              <div className="contact-info">
                <strong>Domestic Address</strong>
                <span>36, Block H, Sector 63, <br />Uttar Pradesh 201301 , Noida<br />Delhi, Delhi</span>
              </div>
            </div>

            {/* Domestic Phone */}
            <div className="contact-item">
              <FaMobileScreenButton className="contact-icon" />
              <div className="contact-info">
                <strong>Phone</strong>
                <span>+91 79822 95530</span>
              </div>
            </div>

            {/* International Address */}
            <div className="contact-item">
              <FaLocationDot className="contact-icon" />
              <div className="contact-info">
                <strong>International Address</strong>
                <span>401, A Oxford <br />Street London<br />United Kingdom</span>
              </div>
            </div>

            {/* International Phone */}
            <div className="contact-item">
              <FaMobileScreenButton className="contact-icon" />
              <div className="contact-info">
                <strong>Phone</strong>
                <span>+447500494401</span>
              </div>
            </div>

            {/* Email Address */}
            <div className="contact-item">
              <FaRegEnvelope className="contact-icon" />
              <div className="contact-info">
                <strong>Email Address</strong>
                <a href="mailto:info@vietworldgate.com">info@vietworldgate.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="footer-bottom-divider"></div>
        <div className="footer-bottom">
          <div className="copyright">
            Copyright © 2020 All Rights Reserved. VIET WORLDGATE Pvt. Ltd . company
          </div>
          <div className="footer-bottom-links">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#branches">Branches</a>
          </div>
          
          {/* Scroll to Top Trigger */}
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;