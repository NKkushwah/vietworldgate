import React, { useState, useEffect } from 'react';
import './DubaiDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function DubaiDestination() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom pre-filled link optimized for Dubai counseling requirements
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I'm%20interested%20in%20studying%20in%20Dubai.%20Please%20help%20me%20with%20courses%20and%20university%20options.";

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
      
      {/* SECTION 1: Banner Header Component with Dubai Image Layer */}
      <header className="dynamic-hero-banner">
        <div className="hero-grid-max">
          <div className="hero-left-content">
            <h1 className="hero-main-title">Dubai</h1>
            <nav className="navigation-breadcrumbs">
              <span className="home-glyph">🏠</span> 
              <span className="split-arrow">→</span> Destinations 
              <span className="split-arrow">→</span> Dubai
            </nav>
          </div>
          <div className="hero-right-graphic">
            <div className="avatar-mask-container">
              <span className="country-large-emoji">🇦🇪</span>
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

          {/* Form Removed: Clean Form-Style WhatsApp Integration Box */}
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
              <p>Connect with our expert Dubai advisors for personalized guidance on international branch campuses, English-taught courses, visa systems, and job scopes.</p>
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
            <h2 className="section-header-title">Study in Dubai: It's easier than you think!</h2>
            <p className="section-body-paragraph">
              Dubai offers a rapidly growing educational hub with top international branch campuses from the UK, Australia, 
              and the US. Its world-class infrastructure, high quality of life, and strategic geographical location make it an 
              incredibly attractive destination for students looking for global corporate exposure.
            </p>
          </section>

          <section className="copywriting-block">
            <h2 className="section-header-title">Why study in Dubai ?</h2>
            <p className="section-body-paragraph">
              Dubai has successfully transformed into a leading multi-cultural hub offering globally recognized degree options 
              bypassing complicated visa regulations. With flexible part-time internship setups across vast multi-national corridors, 
              it provides modern training, extensive safety, and highly dynamic career options after graduation.
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
                Dubai scores exceptionally high on global safety standards, presenting an active, safe and deeply welcoming 
                multicultural lifestyle for international students.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💬</span>
              </div>
              <h3 className="card-headline-title">World-Class Degrees</h3>
              <p className="card-descriptive-text">
                Home to elite global universities offering verified fast-track degree validation paths identical to their western home campuses.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">📜</span>
              </div>
              <h3 className="card-headline-title">Diversity Inclusive</h3>
              <p className="card-descriptive-text">
                Embraces cosmopolitan diversity across nationalities, unlocking continuous industry connectivity for global applicants.
              </p>
            </div>

          </section>

          {/* SECTION 4: Lower End Institutional Conversion Box */}
          <section className="lower-conversion-cta-block">
            <span className="meta-tracking-tagline">UNLOCK YOUR FUTURE IN DUBAI</span>
            <h2 className="cta-block-main-heading">Explore Universities and Scholarships in Dubai</h2>
            
            <p className="cta-block-bold-lead">Discover the endless opportunities that await you in the Middle East's Hub.</p>
            <p className="cta-block-subsidiary-text">
              Dubai offers high-end international training paired with direct corporate networking. Are you ready to take the first step towards your academic journey in Dubai?
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