import React from 'react';
import './GermanyDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function GermanyDestination() {
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20Germany.%20Please%20guide%20me%20about%20public%20universities%20and%20the%20visa%20process.";

  return (
    <>
    <Navbar />
    <div className="dest-container">
      {/* 1. Header Banner Block */}
      <header className="dest-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Germany</h1>
            <nav className="breadcrumbs">
              <span className="home-icon">🏠</span> 
              <span className="arrow">→</span> Destinations 
              <span className="arrow">→</span> Germany
            </nav>
          </div>
          {/* Dynamic Graphic Space mapping your layout banner design */}
          <div className="header-graphic-side">
            <div className="country-badge-circle">🇩🇪</div>
          </div>
        </div>
      </header>

      {/* 2. Main Structural Grid */}
      <div className="dest-layout-grid">
        
        {/* Left Sidebar Layout */}
        <aside className="dest-sidebar">
          {/* Help Desk Call Box */}
          <div className="call-service-box">
            <p>Our Appointment Service call us</p>
            <a href="tel:+917982295530" className="phone-link">
              <span className="phone-icon">📞</span> +91-7982295530
            </a>
          </div>

          {/* WhatsApp Card styled matching original form container dimensions */}
          <div className="whatsapp-form-card">
            <div className="wa-form-header">
              <h3>Academic Support</h3>
              <div className="wa-status-badge">
                <span className="pulse-dot"></span> Online Now
              </div>
            </div>
            
            <div className="wa-form-body">
              <p className="wa-intro-text">
                Confused about standard applications, requirements, public university pathways, or blocked accounts in Germany?
              </p>
              
              <div className="wa-info-highlight">
                Our dynamic educational counselors are ready to help you with the admission process instantly.
              </div>

              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="wa-action-submit-btn"
              >
                <span className="wa-icon">💬</span> START CHAT NOW
              </a>
            </div>
          </div>
        </aside>

        {/* Right Info Details */}
        <main className="dest-main-content">
          
          <section className="info-block">
            <h2>Study in Germany: A World-Class Choice</h2>
            <div className="purple-divider"></div>
            <p>
              Germany is a leading global destination for international students, offering high-quality education, 
              tuition-free public universities, and a strong international reputation, especially in fields like 
              engineering, computer science, and business.
            </p>
          </section>

          <section className="info-block">
            <h2>Why study in Germany?</h2>
            <div className="purple-divider"></div>
            
            <div className="nested-content-section">
              <h3>Strong Focus on Research & Innovation</h3>
              <ul className="custom-bullet-list">
                <li>Germany invests heavily in research and development (R&D), providing students with cutting-edge facilities.</li>
                <li>Students often get chances to work on real-world projects with leading companies and research institutes.</li>
                <li>Ideal for those pursuing careers in STEM, medicine, business, or social sciences.</li>
              </ul>
            </div>

            <div className="nested-content-section">
              <h3>Excellent Career Opportunities</h3>
              <ul className="custom-bullet-list">
                <li>Germany has Europe's largest economy, offering numerous job opportunities for international graduates.</li>
                <li>International graduates can stay for up to 18 months after finishing their studies to find a relevant job.</li>
                <li>Skilled workers in IT, engineering, healthcare, and business are in high demand across the country.</li>
              </ul>
            </div>
          </section>

          {/* Value Cards Feature Block */}
          <section className="features-grid">
            <div className="feature-card">
              <div className="icon-circle">🎓</div>
              <h3>Affordable Education</h3>
              <p>Public universities offer tuition-free education for both local and international students alike.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle">💼</div>
              <h3>Career Prospects</h3>
              <p>Strong ties with industries like BMW, Siemens, and SAP ensure excellent job placement horizons.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle">📜</div>
              <h3>Scholarships</h3>
              <p>DAAD and other organizations provide a wide variety of financial support to meritorious students.</p>
            </div>
          </section>

          <section className="info-block">
            <h2>Strong Industry-University Links</h2>
            <div className="purple-divider"></div>
            <p>
              Many German universities collaborate closely with top global companies (e.g., <strong>BMW, Siemens, Bosch, and SAP</strong>). 
              This gives students hands-on experience and a significant head start in their professional careers.
            </p>
          </section>

          {/* Lower Section Action Box */}
          <section className="explore-footer-cta">
            <span className="sub-tagline">UNLOCK YOUR FUTURE IN GERMANY</span>
            <h2>Explore Universities and Scholarships in Germany</h2>
            <p className="lead-text">Discover the endless opportunities that await you in Germany.</p>
            <p className="sub-text">Germany offers world-class education and a vibrant, diverse cultural experience. Are you ready to take the first step towards your academic journey?</p>
            
            <div className="cta-button-group">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
                EXPLORE UNIVERSITIES
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
                FIND SCHOLARSHIPS
              </a>
            </div>
          </section>

        </main>
      </div>

      {/* Floating Interactive Elements */}
      <div className="floating-action-widgets">
        <a href={whatsappLink} className="whatsapp-bubble-widget" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9z"/>
          </svg>
        </a>
      </div>
   
    </div>
    <Footer />
    </>
  );
}