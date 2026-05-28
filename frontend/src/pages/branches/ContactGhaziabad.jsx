import React from 'react';
import './ContactGhaziabad.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


const ContactGhaziabad = () => {
  // WhatsApp Link specifically configured for Ghaziabad branch requests
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20abroad%20from%20Ghaziabad.%20Please%20help%20me%20with%20course%20options,%20universities,%20and%20the%20visa%20process.";

  return (
    <>
      <Navbar />
      <div className="contact-page-container">
        {/* Top Banner Section */}
        <header className="contact-banner">
          <div className="banner-overlay">
            <div className="banner-content">
              <h1>Ghaziabad</h1>
              <p className="breadcrumb">
                <span className="home-icon">🏠</span> → Ghaziabad
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Card */}
        <main className="contact-card">
          <div className="card-header">
            <span className="subtitle">CONTACT US</span>
            <h2>Get in <strong>touch</strong></h2>
          </div>

          {/* Integrated Premium WhatsApp box */}
          <div className="whatsapp-chat-card">
            <div className="wa-card-header">
              <div className="wa-header-icon">
                <svg viewBox="0 0 448 512" width="24" height="24" fill="#ffffff">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
                </svg>
              </div>
              <div className="wa-header-meta">
                <h4>Academic Support</h4>
                <p>Online • Advisors Ready</p>
              </div>
            </div>
            
            <div className="wa-card-body">
              <p className="wa-welcome-msg">
                Confused about standard applications, requirements, or courses in Ghaziabad? Connect instantly with our experts for immediate support.
              </p>
              <a 
                href={whatsappFormLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="wa-action-btn"
              >
                Start Chat Now
              </a>
            </div>
          </div>

          <hr className="section-divider" />

          {/* Directions / Info Grid Section - Premium 4-Card layout centered perfectly */}
          <section className="directions-section">
            <h3>How to Reach VIET Study Abroad Ghaziabad</h3>
            
            <div className="info-grid-premium">
              {/* Card 1: Our Address */}
              <div className="info-card-premium">
                <div className="icon-circle-premium">
                  <span className="icon-emoji">📍</span>
                </div>
                <h4>Our Address</h4>
                <p className="bold-text">C/o VIET Ghaziabad International Center</p>
                <p className="detail-text">RDC, Raj Nagar, Near Shaheed Sthal Metro Station, Above ICICI Bank, Ghaziabad, Uttar Pradesh - 201002</p>
              </div>

              {/* Card 2: Name */}
              <div className="info-card-premium">
                <div className="icon-circle-premium">
                  <span className="icon-emoji">👤</span>
                </div>
                <h4>Name</h4>
                <p className="detail-text">Navneet Kaur</p>
              </div>

              {/* Card 3: Designation */}
              <div className="info-card-premium">
                <div className="icon-circle-premium">
                  <span className="icon-emoji">💼</span>
                </div>
                <h4>Designation</h4>
                <p className="detail-text">Ghaziabad Regional Admissions Director</p>
              </div>

              {/* Card 4: Phone Number */}
              <div className="info-card-premium">
                <div className="icon-circle-premium">
                  <span className="icon-emoji">📞</span>
                </div>
                <h4>Phone Number</h4>
                <p className="detail-text">+91 79822 95530</p>
              </div>
            </div>

            {/* Interactive Centered Map Wrapper configured for Ghaziabad */}
            <div className="map-container">
       <iframe
    src="https://www.google.com/maps?q=28.6739,77.3646&z=17&output=embed"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
              <div className="map-overlay-instruction">
                <span>Use ctrl + scroll to zoom the map</span>
              </div>
            </div>
          </section>
        </main>

        {/* Floating Quick Action Widgets */}
        <div className="floating-action-widgets">
          <a 
            href={whatsappFormLink}
            className="whatsapp-bubble-widget" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 448 512" width="26" height="26" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9z"/>
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactGhaziabad;