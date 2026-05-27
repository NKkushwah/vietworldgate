import React, { useState, useEffect } from 'react';
import './UKDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function UKDestination() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom pre-filled link optimized for UK student counseling requirements
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I'm%20interested%20in%20studying%20in%20the%20UK.%20Please%20guide%20me%20regarding%20universities,%20intakes,%20and%20the%20Graduate%20Route%20visa.";

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
      
      {/* SECTION 1: Banner Header Component with UK Image Layer */}
      <header className="dynamic-hero-banner">
        <div className="hero-grid-max">
          <div className="hero-left-content">
            <h1 className="hero-main-title">United Kingdom</h1>
            <nav className="navigation-breadcrumbs">
              <span className="home-glyph">🏠</span> 
              <span className="split-arrow">→</span> Destinations 
              <span className="split-arrow">→</span> United Kingdom
            </nav>
          </div>
          <div className="hero-right-graphic">
            <div className="avatar-mask-container">
              <span className="country-large-emoji"></span>
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

          {/* Form Replaced: Clean Form-Style WhatsApp Integration Box */}
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
              <p>Connect with our expert UK advisors for personalized guidance on Russell Group universities, 1-year Masters programs, Graduate Route (PSW) visas, and CAS requirements.</p>
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
            <h2 className="section-header-title">Study in UK: It's easier than you think!</h2>
            <p className="section-body-paragraph">
              The United Kingdom houses some of the world's oldest and most prestigious academic institutions. With highly 
              efficient 1-year Masters modules and globally recognized research standards, it offers international students a fast-paced, 
              intense, and incredibly rewarding academic journey.
            </p>
          </section>

          <section className="copywriting-block">
            <h2 className="section-header-title">Why study in UK?</h2>
            <p className="section-body-paragraph">
              UK degrees are intensely valued across business sectors globally. Under the current post-study framework, international graduates 
              can transition effortlessly into the European job sector through the Graduate Route visa, providing up to 2 years of unrestricted 
              professional work rights right after graduation.
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
                The UK boast historic student cities with rich cultural heritage, dynamic student unions, and highly inclusive multicultural networks.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💬</span>
              </div>
              <h3 className="card-headline-title">World-Class Degrees</h3>
              <p className="card-descriptive-text">
                Home to globally benchmarked educational standards that consistently lead global research indexes and corporate job market demands.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">📜</span>
              </div>
              <h3 className="card-headline-title">Diversity Inclusive</h3>
              <p className="card-descriptive-text">
                Universities offer comprehensive student support, rolling scholarship blocks, and dynamic workspaces for international candidates.
              </p>
            </div>

          </section>

          {/* SECTION 4: Lower End Institutional Conversion Box */}
          <section className="lower-conversion-cta-block">
            <span className="meta-tracking-tagline">UNLOCK YOUR FUTURE IN UNITED KINGDOM</span>
            <h2 className="cta-block-main-heading">Explore Universities and Scholarships in UK</h2>
            
            <p className="cta-block-bold-lead">Discover the endless opportunities that await you across British institutions.</p>
            <p className="cta-block-subsidiary-text">
              The United Kingdom offers unmatched heritage paired with practical modern career readiness. Are you prepared to launch your foundational admission and visa workflow today?
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