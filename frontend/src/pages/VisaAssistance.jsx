import React from 'react';
import './VisaAssistance.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VisaAssistance = () => {
  return (
    <>
    <Navbar />
    <div className="visa-page-container">
      
      {/* Hero Banner Section */}
      <header className="visa-hero-banner">
        <h2>Visa Assistance Services</h2>
        <div className="hero-overlay">
          <div className="hero-content">
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="visa-main-content">
        <div className="visa-grid-container">
          
          <aside className="visa-sidebar">
            
            {/* Call Widget */}
            <div className="appointment-call-widget">
              <div className="widget-flex">
                <div className="headset-icon">🎧</div>
                <div className="widget-text">
                  <p>Book an Appointment with Our Experts</p>
                  <a href="tel:+917982295530" className="phone-number">+91-7982295530</a>
                </div>
              </div>
              <div className="white-arrow-decor">➔</div>
            </div>

            {/* WhatsApp Chat */}
            <div className="whatsapp-chat-card">
              <div className="wa-card-header">
                <div className="wa-header-icon">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="#ffffff">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
                  </svg>
                </div>
                <div className="wa-header-meta">
                  <h4>WhatsApp Support</h4>
                  <p>Online • Ready to Assist</p>
                </div>
              </div>
              
              <div className="wa-card-body">
                <p className="wa-welcome-msg">
                  Need expert guidance for your visa application? Connect instantly with our advisors for quick and reliable assistance.
                </p>
                <a 
                  href="https://wa.me/7982295530" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="wa-action-btn"
                >
                  Start Chat Now
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <section className="visa-details-body">
            <div className="workspace-preview-holder">
              <div className="mock-laptop-workspace">
                <div className="passport-overlay-tag">PASSPORT</div>
                <div className="application-form-tag">VISA APPLICATION</div>
              </div>
            </div>

            <div className="intro-text-block">
              <p>
                We guide you through every step of the visa application process, ensuring all your documents are accurate, complete, and ready for successful submission.
              </p>
            </div>

            {/* Services Grid */}
            <div className="services-three-column-grid">
              
              {/* Card 1 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">👥</div>
                <h4>Visa Documentation Guidance</h4>
                <p>
                  Visa documentation requirements vary by country. Our experts ensure you have the correct and complete set of documents tailored to your study destination.
                </p>
              </div>

              {/* Card 2 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">💬</div>
                <h4>Financial Planning & Proof of Funds</h4>
                <p>
                  We help you understand financial requirements and prepare the necessary proof of funds based on the specific guidelines of your chosen country.
                </p>
              </div>

              {/* Card 3 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">📜</div>
                <h4>Medical & Background Requirements</h4>
                <p>
                  Certain countries require medical examinations and police clearance certificates. We guide you through these requirements to ensure compliance.
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="visa-footer-bar">
        <p>
          As our student, you will always stay informed about the latest visa rules, requirements, and updates for a smooth application process.
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <div className="floating-action-widgets">
        <a 
          href="https://wa.me/7982295530" 
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

export default VisaAssistance;