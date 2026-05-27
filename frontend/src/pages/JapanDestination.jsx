import React, { useState, useEffect } from 'react';
import './JapanDestination.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function JapanDestination() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom pre-filled link optimized for Japan student counseling
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I'm%20interested%20in%20studying%20in%20Japan.%20Please%20guide%20me%20regarding%20MEXT%20scholarships,%20language%20schools,%20and%20English-taught%20programs.";

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
      
      {/* SECTION 1: Banner Header Component with Japan Aesthetic Layer */}
      <header className="dynamic-hero-banner">
        <div className="hero-grid-max">
          <div className="hero-left-content">
            <h1 className="hero-main-title">Japan</h1>
            <nav className="navigation-breadcrumbs">
              <span className="home-glyph">🏠</span> 
              <span className="split-arrow">→</span> Destinations 
              <span className="split-arrow">→</span> Japan
            </nav>
          </div>
          <div className="hero-right-graphic">
            <div className="avatar-mask-container">
              <span className="country-large-emoji">🇯🇵</span>
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
                <h4>Japan Support</h4>
                <p>Online • Advisors Ready</p>
              </div>
            </div>
            
            <div className="wa-card-body">
              <p>Connect with our expert Japan advisors for personalized guidance on MEXT scholarships, Japanese language proficiency (JLPT), part-time work rights, and technical internships.</p>
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
            <h2 className="section-header-title">Study in Japan: It's easier than you think!</h2>
            <p className="section-body-paragraph">
              Japan is an emerging powerhouse for international students, blending cutting-edge technological innovation with deeply rooted cultural traditions. With the "300,000 International Students Plan," Japan has simplified its visa processes and increased English-taught programs across its top-tier national and private universities.
            </p>
          </section>

          <section className="copywriting-block">
            <h2 className="section-header-title">Why study in Japan ?</h2>
            <p className="section-body-paragraph">
              Beyond its high academic standards, Japan offers one of the safest environments in the world. International students are permitted to work up to 28 hours per week, providing ample opportunity to support living costs. Moreover, the Japanese government offers the prestigious MEXT scholarship, covering full tuition, travel, and providing a monthly stipend for meritorious candidates.
            </p>
          </section>

          {/* SECTION 3: Explicit Triple Feature Cards Grid Row */}
          <section className="dynamic-triple-feature-grid">
            
            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">👥</span>
              </div>
              <h3 className="card-headline-title">Ultra Safe & Secure</h3>
              <p className="card-descriptive-text">
                Consistently ranked among the top 10 safest countries globally, Japan offers peace of mind for students and their families.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">💬</span>
              </div>
              <h3 className="card-headline-title">Tech Innovation</h3>
              <p className="card-descriptive-text">
                Learn at the heart of robotics, automotive engineering, and electronics in world-class research facilities and laboratories.
              </p>
            </div>

            <div className="structural-feature-card">
              <div className="purple-icon-globe-badge">
                <span className="badge-unicode-graphic">📜</span>
              </div>
              <h3 className="card-headline-title">Post-Study Career</h3>
              <p className="card-descriptive-text">
                Japan actively seeks global talent to join its workforce, offering clear pathways for long-term career growth in local industries.
              </p>
            </div>

          </section>

          {/* SECTION 4: Lower End Institutional Conversion Box */}
          <section className="lower-conversion-cta-block">
            <span className="meta-tracking-tagline">UNLOCK YOUR FUTURE IN THE LAND OF THE RISING SUN</span>
            <h2 className="cta-block-main-heading">Explore Universities and Scholarships in Japan</h2>
            
            <p className="cta-block-bold-lead">Discover the endless opportunities that await you across Japanese cities.</p>
            <p className="cta-block-subsidiary-text">
              From the bustling streets of Tokyo to the historic halls of Kyoto, Japan offers a unique academic journey. Are you ready to take the first step towards your academic success in Japan?
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