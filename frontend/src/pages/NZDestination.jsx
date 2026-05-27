import React, { useState, useEffect } from 'react';
import './NZDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function NZDestination() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Pre-filled WhatsApp api link configured for New Zealand counseling
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20New%20Zealand.%20Please%20guide%20me%20about%20universities,%20level%20pathways,%20and%20work%20rights.";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navbar />
    <div className="global-destination-wrapper">
      
      {/* SECTION 1: Banner Header Component with NZ Flag Layer */}
      <header className="dynamic-hero-banner">
        <div className="hero-grid-max">
          <div className="hero-left-content">
            <h1 className="hero-main-title">New Zealand</h1>
            <nav className="navigation-breadcrumbs">
              <span className="home-glyph">🏠</span> 
              <span className="split-arrow">→</span> Destinations 
              <span className="split-arrow">→</span> New Zealand
            </nav>
          </div>
          <div className="hero-right-graphic">
            <div className="avatar-mask-container">
              <span className="country-large-emoji">🇳🇿</span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: Master Body Layout Grid */}
      <div className="master-content-layout-grid">
        
        {/* Left Hand Sidebar Widget Stack */}
        <aside className="fixed-width-sidebar">
          
          {/* Top Embedded Callback Banner */}
          <div className="callback-cta-container">
            <span className="cta-meta-text">Our Appointment Service call us</span>
            <a href="tel:+917982295530" className="phone-interactive-anchor">
              <span className="phone-vector-icon">📞</span> +91-7982295530
            </a>
          </div>

          {/* Clean Form-Style WhatsApp Advisor Box */}
          <div className="sidebar-whatsapp-card">
            <div className="wa-card-header">
              <div className="wa-icon-box">
                <svg viewBox="0 0 448 512" width="24" height="24" fill="#ffffff">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
                </svg>
              </div>
              <div className="wa-header-text">
                <h4>Academic Support</h4>
                <p>Online • Advisors Ready</p>
              </div>
            </div>
            
            <div className="wa-card-body">
              <p>Connect with our expert New Zealand counselors for explicit evaluation on Level 7, 8 & 9 courses, post-study work paths up to 3 years, and intake cycles.</p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="wa-action-btn"
              >
                START CHAT NOW
              </a>
            </div>
          </div>
        </aside>

        {/* Right Hand Informative Content Panel */}
        <main className="variable-content-panel">
          
          <section className="copywriting-block">
            <h2 className="section-header-title">Study in New Zealand: It's easier than you think!</h2>
            <p className="section-body-paragraph">
              New Zealand is world-famous for its high educational parameters, offering an excellent standard of living, beautiful natural landscapes, 
              and an extremely supportive atmosphere for global students. All 8 of its state-funded universities are ranked within the top 3% 
              globally on the QS World University Rankings.
            </p>
          </section>

          <section className="copywriting-block">
            <h2 className="section-header-title">Why study in New Zealand?</h2>
            <p className="section-body-paragraph">
              With an education system heavily based on the prestigious British framework, degrees obtained from New Zealand universities open 
              unparalleled pathways worldwide. The country provides competitive tuition brackets, generous post-study open work rights, and excellent 
              career growth indexes in thriving industries.
            </p>
          </section>

          {/* SECTION 3: Explicit Triple Feature Cards Grid Row */}
          <section className="dynamic-triple-feature-grid">
            
            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">👥</span>
              </div>
              <h3 className="card-headline-title">Student-Friendly</h3>
              <p className="card-descriptive-text">
                Ranked among the safest countries in the world, NZ offers a deeply secure, highly supportive environment for international candidates.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💬</span>
              </div>
              <h3 className="card-headline-title">World-Class Degrees</h3>
              <p className="card-descriptive-text">
                Programs are rigidly scrutinized under the New Zealand Qualifications Authority (NZQA), matching global premium status.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">📜</span>
              </div>
              <h3 className="card-headline-title">Diversity Inclusive</h3>
              <p className="card-descriptive-text">
                Promotes real-time cross-cultural experiences, flexible part-time hours, and easy access to standard financial bursaries.
              </p>
            </div>

          </section>

          {/* SECTION 4: Lower End Institutional Conversion Box */}
          <section className="lower-conversion-cta-block">
            <span className="meta-tracking-tagline">UNLOCK YOUR FUTURE IN NEW ZEALAND</span>
            <h2 className="cta-block-main-heading">Explore Universities and Scholarships in New Zealand</h2>
            
            <p className="cta-block-bold-lead">Discover the endless opportunities that await you across Kiwiland.</p>
            <p className="cta-block-subsidiary-text">
              New Zealand offers exceptional practical academic curricula paired with clear career advancement timelines. Are you ready to initialize your documentation today?
            </p>

            <div className="cta-dual-action-row">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="primary-conversion-btn-anchor">
                EXPLORE UNIVERSITIES
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="primary-conversion-btn-anchor">
                FIND SCHOLARSHIPS
              </a>
            </div>
          </section>

        </main>
      </div>

      {/* Floating Action Trigger Widgets */}
      <a href={whatsappLink} className="fixed-chat-trigger-bubble" target="_blank" rel="noopener noreferrer">
        <span className="chat-bubble-inner-icon">💬</span>
      </a>

    </div>
    <Footer />
    </>
  );
}