import React from 'react';
import './AustraliaDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AustraliaDestination() {
  // WhatsApp Link with a custom pre-filled message for Australia Destination
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20Australia.%20Please%20help%20me%20with%20course%20options,%20universities,%20and%20the%20visa%20process.";

  return (
    <>
    <Navbar />
    <div className="dest-container">
      {/* Top Banner Section */}
      <header className="dest-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Australia</h1>
            <nav className="breadcrumbs">
              <span className="home-icon">🏠</span> 
              <span className="arrow">→</span> Destinations 
              <span className="arrow">→</span> Australia
            </nav>
          </div>
          <div className="header-student-image">
            <div className="student-wrapper">
              <div className="australia-flag-badge">🇦🇺</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="dest-layout-grid">
        
        {/* Left Sidebar Content */}
        <aside className="dest-sidebar">
          <div className="call-service-box">
            <p>Our Appointment Service call us</p>
            <a href="tel:+917982295530" className="phone-link">
              <span className="phone-icon">📞</span> +91-7982295530
            </a>
          </div>

          {/* WhatsApp Chat Card replacing the old traditional form */}
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
                Confused about standard applications, requirements, or courses in Australia? Connect instantly with our experts for immediate support.
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
        </aside>

        {/* Right Info Section */}
        <main className="dest-main-content">
          <section className="info-block">
            <h2>Study in Australia: It's easier than you think!</h2>
            <p>
              Australia offers a wide range of educational opportunities with over 1,100 universities and institutions providing 
              22,000+ courses. Their innovative teaching and internship opportunities make it an attractive choice. Additionally, the 
              country boasts one of the best healthcare systems globally and extends post-study work options for up to three 
              years. Eligible students can also access numerous scholarships, and Australia is known for its welcoming and 
              inclusive environment for international students.
            </p>
          </section>

          <section className="info-block">
            <h2>Why study in Australia ?</h2>
            <p>
              Australia offers a wide range of educational opportunities with over 1,100 universities and institutions providing 
              22,000+ courses. Their innovative teaching and internship opportunities make it an attractive choice. Additionally, the 
              country boasts one of the best healthcare systems globally and extends post-study work options for up to three 
              years. Eligible students can also access numerous scholarships, and Australia is known for its welcoming and 
              inclusive environment for international students.
            </p>
          </section>

          {/* Core Feature Value Cards */}
          <section className="features-grid">
            <div className="feature-card">
              <div className="icon-circle">👥</div>
              <h3>Student-Friendly</h3>
              <p>Six cities in Australia score among the top 50 in the QS Best Student Cities 2023 Rankings, indicating that Australian universities provide a welcoming and helpful atmosphere.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle">💬</div>
              <h3>World-Class Universities</h3>
              <p>43 Australian universities provide globally recognized degrees, with five of them ranked among the top 50 in the world by QS in 2023.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle">📜</div>
              <h3>Diversity Inclusive</h3>
              <p>Australia embraces international students with open arms, promoting a safe and harmonious environment for everyone.</p>
            </div>
          </section>

          {/* Dynamic Bottom Explorer CTAs */}
          <section className="explore-footer-cta">
            <span className="sub-tagline">UNLOCK YOUR FUTURE IN AUSTRALIA</span>
            <h2>Explore Universities and Scholarships in Australia</h2>
            <p className="lead-text">Discover the endless opportunities that await you in the Land Down Under.</p>
            <p className="sub-text">Australia offers a world-class education and a vibrant, diverse cultural experience. Are you ready to take the first step towards your academic journey in Australia?</p>
            
            <div className="cta-button-group">
              <a 
                href={whatsappFormLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn action-purple-link"
              >
                EXPLORE UNIVERSITIES
              </a>
              <a 
                href={whatsappFormLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn action-purple-link"
              >
                FIND SCHOLARSHIPS
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Floating WhatsApp Quick Action Widgets */}
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
}