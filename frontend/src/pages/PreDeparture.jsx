import React from 'react';
import './PreDeparture.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PreDeparture = () => {
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20want%20to%20attend%20the%20pre-departure%20sessions.%20Please%20guide%20me%20with%20the%20process.";

  return (
    <>
      <Navbar />
      <div className="visa-page-container">
        
        {/* Hero Banner Section */}
        <header className="visa-hero-banner">
          <div className="hero-content-left">
            <h2>Pre-Departure Guidelines</h2>
            <div className="breadcrumb-trail">
              <span className="home-icon">🏠</span> ➔ <span className="current-page">Pre-departure Guidelines</span>
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
                    <p>Book an Appointment with Our Experts</p>
                    <a href="tel:+911140515555" className="phone-number-banner">
                      <span className="phone-svg-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </span>
                      +91-11 40515555
                    </a>
                  </div>
                </div>
              </div>

              {/* Dynamic Instant WhatsApp Panel */}
              <div className="whatsapp-chat-card-panel">
                <div className="wa-panel-header">
                  <h4>APPOINTMENT FORM</h4>
                  <div className="purple-underline-decor"></div>
                </div>
                
                <div className="wa-panel-body">
                  <p className="wa-panel-text">
                    Skip lengthy forms. Share your destination details and preferences instantly with our team through WhatsApp for quick and personalized pre-departure assistance.
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
                    Connect Via WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            {/* Informational Details Container Right */}
            <section className="visa-details-body">
              
              <div className="shortlist-intro-header">
                <h3>Pre-departure Guidelines</h3>
                <p>
                  Congratulations on your upcoming study abroad adventure! We know it can be daunting to move to a new country, but we are here to help you prepare for services like Flights, Airport Pickup, Accommodation, Currency, Bank Account, Orientation, Enrolment etc. Our pre-departure sessions will cover a variety of topics.
                </p>
              </div>

              {/* Core Offerings Feature Columns Grid */}
              <div className="services-three-column-grid">
                
                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>📋</span>
                  </div>
                  <h4>Packing List</h4>
                  <p>
                    We will help you create a comprehensive packing list that includes everything you need for your new life and academic environment abroad.
                  </p>
                </div>

                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>💬</span>
                  </div>
                  <h4>Arrival Support</h4>
                  <p>
                    We will provide you with vital information about immigration procedures, customs rules, and how to get smoothly to your campus from the airport.
                  </p>
                </div>

                <div className="service-feature-card-premium">
                  <div className="purple-icon-circle-badge">
                    <span style={{ fontSize: '22px', color: '#fff' }}>📜</span>
                  </div>
                  <h4>Banking & Forex</h4>
                  <p>
                    Our financial assistance helps you set up a secure local bank account and conveniently exchange currency at the best available rates.
                  </p>
                </div>

              </div>

              {/* Life as a Student Detailed Checklist Block */}
              <div className="admission-checklist-block">
                <h3>Life as a student in your new country</h3>
                <p className="checklist-lead-text">
                  Our pre-departure guidelines will teach you about local culture, university life, cultural adjustment, support and wellness, working while learning, homesickness, and legal issues in your new study destination. We will also encourage you to network with other students in order to get advice and form a supportive network.
                </p>
                
                <p className="checklist-subheading">The following are some of the specific themes we will discuss:</p>
                
                <ul className="custom-checkmark-list">
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Local culture:</strong> We will inform you of the local traditions, customs, and activities. This will ease the transition into the community and allow you to interact effectively with new friends.
                  </li>
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Student life:</strong> We will talk about diverse methods of learning, class conditions, and the expectations of students in your new nation. As a student, this will help you acclimate to a fresh academic environment and the customs of the community.
                  </li>
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Cultural shock:</strong> We will go over the various phases of adjusting to culture and how to deal with them. This is critical for adapting to your new learning location.
                  </li>
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Working while studying:</strong> We will go over how to follow the rules of your student visa and provide advice on how to discover suitable student employment opportunities. This can improve your study and living environments.
                  </li>
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Homesickness:</strong> We recognize that being separated from family and friends might cause homesickness. Once you reach your study destination, we will provide you with useful hints on how to deal with homesickness.
                  </li>
                  <li>
                    <span className="blue-check-icon">✓</span> 
                    <strong>Legalities:</strong> We will provide you with vital information about your study country's rules and regulations. This will ensure that you understand your rights as an international student.
                  </li>
                </ul>
              </div>

              {/* Global Partnership Endorsement Block */}
              <div className="university-partners-panel">
                <p className="checklist-closing-text" style={{ fontStyle: 'normal', color: '#555' }}>
                  In addition to our comprehensive Pre-Departure Program, <strong>VIEC</strong> proudly recommends the <em>Smart Prep – Student Readiness Program</em> delivered by <strong>Global Education Success</strong>. Smart Prep provides structured guidance, practical tools, and personalised planning to help you arrive confident, focused, and fully prepared for academic and cultural success. It supports a smoother transition, reduces common first-semester mistakes, and ensures you don't just travel overseas, but begin your journey ready to thrive.
                </p>
              </div>

            </section>

          </div>
        </main>

        {/* WhatsApp Pop Floating Icon Widget */}
        <div className="floating-action-widgets">
          <a 
            href="https://wa.me/917982295530" 
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