import React from 'react';
import './PreDeparture.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PreDeparture = () => {
  const whatsappFormLink = "https://wa.me/+447500494401?text=Hi,%20I%20want%20to%20attend%20the%20pre-departure%20sessions.%20Please%20guide%20me%20with%20the%20process.";

  return (
    <>
      <Navbar />
      <div className="visa-page-container">
        
        {/* Hero Banner Section */}
        <header className="visa-hero-banner">
          <div className="hero-content-left">
            <h2>Pre-Departure Assistance</h2>
            <div className="breadcrumb-trail">
              <span className="home-icon">🏠</span> ➔ <span className="current-page">Pre-Departure Assistance</span>
            </div>
          </div>
        </header>

        {/* Main Split Layout */}
        <main className="visa-main-content">
          <div className="visa-grid-container">
            
            {/* Sidebar Left Area */}
            <aside className="visa-sidebar">
              
              {/* Call Agent Expert Widget Banner */}
              <div className="appointment-call-widget-banner">
                <div className="widget-banner-image-placeholder">
                  <div className="purple-call-overlay">
                    <p>Speak with Our Study Abroad Experts</p>
                    <a href="tel:+911140515555" className="phone-number-banner">
                      <span className="phone-svg-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </span>
                      +447500494401
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Panel */}
              <div className="whatsapp-chat-card-panel">
                <div className="wa-panel-header">
                  <h4>QUICK CONNECT</h4>
                  <div className="purple-underline-decor"></div>
                </div>
                
                <div className="wa-panel-body">
                  <p className="wa-panel-text">
                    Get instant pre-departure guidance. Share your travel plans, destination, and requirements with our experts via WhatsApp for quick and personalized support.
                  </p>
                  <a 
                    href={whatsappFormLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp-form-tag-btn-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Section */}
            <section className="visa-details-body">
              
              <div className="shortlist-intro-header">
                <h3>Pre-Departure Support</h3>
                <p>
                  Preparing to study abroad is an exciting step, and we ensure you are fully ready before your journey begins. Our pre-departure assistance covers everything from travel arrangements and accommodation to financial planning and on-arrival support, helping you transition smoothly into your new academic environment.
                </p>
              </div>

              {/* Features */}
              <div className="services-three-column-grid">
                
                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>🧳</span>
                  </div>
                  <h4>Packing & Travel Guidance</h4>
                  <p>
                    Receive a complete checklist of essential items, documents, and travel tips to ensure a stress-free departure and smooth journey.
                  </p>
                </div>

                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>✈️</span>
                  </div>
                  <h4>Arrival & Settlement Support</h4>
                  <p>
                    Get detailed guidance on airport procedures, immigration, accommodation check-in, and settling into your new environment.
                  </p>
                </div>

                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>💳</span>
                  </div>
                  <h4>Banking & Financial Setup</h4>
                  <p>
                    Assistance with opening bank accounts, managing foreign exchange, and understanding financial systems in your destination country.
                  </p>
                </div>

              </div>

              {/* Life Section */}
              <div className="admission-checklist-block">
                <h3>Life in Your Study Destination</h3>
                <p className="checklist-lead-text">
                  Our sessions prepare you beyond academics by helping you understand lifestyle, culture, and responsibilities as an international student.
                </p>
                
                <ul className="custom-checkmark-list">
                  <li><span className="blue-check-icon">✓</span> Understanding local culture, traditions, and lifestyle</li>
                  <li><span className="blue-check-icon">✓</span> Adapting to university education systems and expectations</li>
                  <li><span className="blue-check-icon">✓</span> Managing cultural transition and homesickness</li>
                  <li><span className="blue-check-icon">✓</span> Working part-time while studying as per visa rules</li>
                  <li><span className="blue-check-icon">✓</span> Awareness of legal rights and responsibilities</li>
                </ul>
              </div>

              {/* Closing */}
              <div className="university-partners-panel">
                <p className="checklist-closing-text" style={{ fontStyle: 'normal', color: '#555' }}>
                  Our goal is to ensure you are confident, prepared, and fully equipped before starting your international education journey. With expert guidance and practical support, we help you transition smoothly and succeed from day one.
                </p>
              </div>

            </section>

          </div>
        </main>

        {/* Floating WhatsApp */}
        <div className="floating-action-widgets">
          <a 
            href="https://wa.me/+447500494401" 
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

export default PreDeparture;