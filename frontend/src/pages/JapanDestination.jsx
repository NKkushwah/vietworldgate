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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />
      <div className="jpn-page-wrapper">
        
        {/* HERO BANNER */}
        <header className="jpn-hero-banner">
          <div className="jpn-hero-inner">
            <div className="jpn-hero-left">
              <h1 className="jpn-hero-title"></h1>
             
            </div>
            <div className="jpn-hero-right">
              <span className="jpn-flag-emoji"></span>
            </div>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="jpn-main-grid">
          
          {/* SIDEBAR */}
          <aside className="jpn-sidebar">
            
            {/* Call Card */}
            <div className="jpn-call-card">
              <span className="jpn-call-label">Our Appointment Service call us</span>
              <a href="tel:+917982295530" className="jpn-phone-link">
                <span>📞</span> +91-7982295530
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="jpn-wa-card">
              <div className="jpn-wa-header">
                <div className="jpn-wa-icon">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="#ffffff">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
                  </svg>
                </div>
                <div className="jpn-wa-meta">
                  <h4>Japan Support</h4>
                  <p>Online • Advisors Ready</p>
                </div>
              </div>
              
              <div className="jpn-wa-body">
                <p>Connect with our expert Japan advisors for personalized guidance on MEXT scholarships, Japanese language proficiency (JLPT), part-time work rights, and technical internships.</p>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="jpn-wa-btn"
                >
                  START CHAT NOW
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="jpn-content">
            
            <section className="jpn-info-block">
              <h2>Study in Japan: It's easier than you think!</h2>
              <p>
                Japan is an emerging powerhouse for international students, blending cutting-edge technological innovation with deeply rooted cultural traditions. With the "300,000 International Students Plan," Japan has simplified its visa processes and increased English-taught programs across its top-tier national and private universities.
              </p>
            </section>

            <section className="jpn-info-block">
              <h2>Why study in Japan?</h2>
              <p>
                Beyond its high academic standards, Japan offers one of the safest environments in the world. International students are permitted to work up to 28 hours per week, providing ample opportunity to support living costs. Moreover, the Japanese government offers the prestigious MEXT scholarship, covering full tuition, travel, and providing a monthly stipend for meritorious candidates.
              </p>
            </section>

            {/* FEATURE CARDS */}
            <section className="jpn-features-grid">
              
              <div className="jpn-feature-card">
                <div className="jpn-icon-circle">
                  <span>👥</span>
                </div>
                <h3>Ultra Safe & Secure</h3>
                <p>
                  Consistently ranked among the top 10 safest countries globally, Japan offers peace of mind for students and their families.
                </p>
              </div>

              <div className="jpn-feature-card">
                <div className="jpn-icon-circle">
                  <span>💬</span>
                </div>
                <h3>Tech Innovation</h3>
                <p>
                  Learn at the heart of robotics, automotive engineering, and electronics in world-class research facilities and laboratories.
                </p>
              </div>

              <div className="jpn-feature-card">
                <div className="jpn-icon-circle">
                  <span>📜</span>
                </div>
                <h3>Post-Study Career</h3>
                <p>
                  Japan actively seeks global talent to join its workforce, offering clear pathways for long-term career growth in local industries.
                </p>
              </div>

            </section>

            {/* CTA SECTION */}
            <section className="jpn-cta-section">
              <span className="jpn-cta-tagline">UNLOCK YOUR FUTURE IN THE LAND OF THE RISING SUN</span>
              <h2 className="jpn-cta-heading">Explore Universities and Scholarships in Japan</h2>
              <p className="jpn-cta-lead">Discover the endless opportunities that await you across Japanese cities.</p>
              <p className="jpn-cta-sub">
                From the bustling streets of Tokyo to the historic halls of Kyoto, Japan offers a unique academic journey. Are you ready to take the first step towards your academic success in Japan?
              </p>

              <div className="jpn-btn-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="jpn-primary-btn">
                  EXPLORE UNIVERSITIES
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="jpn-primary-btn">
                  FIND SCHOLARSHIPS
                </a>
              </div>
            </section>

          </main>
        </div>

        {/* FLOATING WHATSAPP */}
        <a href={whatsappLink} className="jpn-wa-bubble" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 448 512" width="26" height="26" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
          </svg>
        </a>

      </div>
      <Footer />
    </>
  );
}