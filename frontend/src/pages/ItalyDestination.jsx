import React, { useState, useEffect } from 'react';
import './ItalyDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function ItalyDestination() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom pre-filled link optimized for Italy student counseling and regional scholarships
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I'm%20interested%20in%20studying%20in%20Italy.%20Please%20help%20me%20with%20English-taught%20courses,%20EDISU%20scholarships,%20and%20the%20visa%20process.";

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
      
      {/* SECTION 1: Banner Header Component with Italy Aesthetic Layer */}
      <header className="dynamic-hero-banner">
        <div className="hero-grid-max">
          <div className="hero-left-content">
            <h1 className="hero-main-title">Italy</h1>
            <nav className="navigation-breadcrumbs">
              <span className="home-glyph">🏠</span> 
              <span className="split-arrow">→</span> Destinations 
              <span className="split-arrow">→</span> Italy
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
              <p>Connect with our expert Italy advisors for explicit guidance on fully-funded regional scholarships, 100% tuition waivers, block visa processing, and university pre-enrollments.</p>
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
            <h2 className="section-header-title">Study in Italy: It's easier than you think!</h2>
            <p className="section-body-paragraph">
              Italy is rapidly becoming the top destination for global students seeking world-class education with minimal financial burden. Offering thousands of entirely English-taught bachelors and masters programs, Italian public universities combine historic academic excellence with massive state-sponsored financial frameworks.
            </p>
          </section>

          <section className="copywriting-block">
            <h2 className="section-header-title">Why study in Italy ?</h2>
            <p className="section-body-paragraph">
              Italy stands unique in Europe due to its generous regional scholarship structure (such as DSU, EDISU, and LazioDisco). Eligible international students can secure completely zero-tuition education along with a yearly cash stipend ranging from €6,000 to €7,000 to cover accommodation and meals comfortably, all while exploring a rich Mediterranean culture.
            </p>
          </section>

          {/* SECTION 3: Explicit Triple Feature Cards Grid Row */}
          <section className="dynamic-triple-feature-grid">
            
            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💶</span>
              </div>
              <h3 className="card-headline-title">Affordable / Funded</h3>
              <p className="card-descriptive-text">
                Access extensive regional scholarship programs that grant full tuition waivers and provide yearly cash maintenance funds.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💬</span>
              </div>
              <h3 className="card-headline-title">English-Taught</h3>
              <p className="card-descriptive-text">
                No Italian language barrier—choose from hundreds of programs tailored specifically for global applicants in top public sectors.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">🇪🇺</span>
              </div>
              <h3 className="card-headline-title">Schengen Mobility</h3>
              <p className="card-descriptive-text">
                A student visa from Italy grants you restriction-free travel and corporate internship access across 29 European countries.
              </p>
            </div>

          </section>

          {/* SECTION 4: Lower End Institutional Conversion Box */}
          <section className="lower-conversion-cta-block">
            <span className="meta-tracking-tagline">UNLOCK YOUR FUTURE IN EUROPE</span>
            <h2 className="cta-block-main-heading">Explore Universities and Scholarships in Italy</h2>
            
            <p className="cta-block-bold-lead">Launch your higher education with zero tuition fees across historic Italian cities.</p>
            <p className="cta-block-subsidiary-text">
              From Milan's business avenues to Rome's engineering hubs, Italy offers high-reputation qualifications without the premium debt. Ready to file your pre-enrollment applications?
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