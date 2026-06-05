import React from 'react';
import './CanadaDestination.css'; // Make sure to sync your CSS file with these class names
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CanadaDestination() {
  // WhatsApp Link with a custom pre-filled message for Canada Destination
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20Canada.%20Please%20help%20me%20with%20course%20options,%20universities,%20colleges,%20and%20the%20study%20permit%20process.";

  return (
    <>
      <Navbar />
      <div className="destination-page-container">
        
        {/* Top Banner Section with Background Image */}
        <header className="destination-hero-header">
          <div className="hero-overlay-flex">
            <div className="hero-text-content">
              <h1>Canada</h1>
              <nav className="breadcrumb-nav">
                <span className="breadcrumb-home-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </span> 
                <span className="breadcrumb-arrow">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </span> 
                Destinations 
                <span className="breadcrumb-arrow">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </span> 
                Canada
              </nav>
            </div>
            
            <div className="hero-badge-container">
              <div className="flag-badge-wrapper">
                <div className="canada-round-flag-badge">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF0000">
                    <path d="M12 .43l2.21 4.54 4.95.14-3.87 3.12 1.3 4.77L12 10.32l-4.59 2.68 1.3-4.77-3.87-3.12 4.95-.14zm-1 14.57h2v9h-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid Content */}
        <div className="destination-main-layout-grid">
          
          {/* Left Sidebar Content */}
          <aside className="destination-sidebar-area">
            <div className="sidebar-call-box">
              <p>Our Appointment Service call us</p>
              <a href="tel:+917982295530" className="sidebar-phone-link">
                <span className="phone-svg-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span> 
                +91-7982295530
              </a>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="sidebar-whatsapp-card">
              <div className="whatsapp-card-header">
                <div className="whatsapp-header-svg">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="#ffffff">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div className="whatsapp-header-text">
                  <h4>Academic Support</h4>
                  <p>Online • Advisors Ready</p>
                </div>
              </div>
              
              <div className="whatsapp-card-body">
                <p className="whatsapp-welcome-message">
                  Confused about DLIs, SDS applications, requirements, or courses in Canada? Connect instantly with our experts for immediate support.
                </p>
                <a 
                  href={whatsappFormLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-chat-now-btn"
                >
                  Start Chat Now
                </a>
              </div>
            </div>
          </aside>

          {/* Right Info Section */}
          <main className="destination-content-container">
            <section className="content-info-block">
              <h2>Study in Canada: Your Pathway to Global Success!</h2>
              <p>
                Canada is globally recognized for its high-quality education system, offering an array of programs across top-tier universities and colleges. With a strong focus on research, practical learning, and co-op programs, Canada equips students with real-world industry experience. Along with affordable tuition fees compared to other major study destinations, students benefit from a high standard of living, excellent healthcare, and diverse post-graduation work opportunities.
              </p>
            </section>

            <section className="content-info-block">
              <h2>Why study in Canada?</h2>
              <p>
                As an international student, Canada provides an exceptionally welcoming, safe, and multicultural environment. Educational institutions here hold dynamic campus cultures and robust support networks. Moreover, Canada’s Post-Graduation Work Permit (PGWP) program offers a direct avenue to gain invaluable international work experience, making it one of the most attractive destinations for students worldwide to build long-term careers.
              </p>
            </section>

            {/* Core Feature Value Cards */}
            <section className="highlights-features-grid">
              <div className="highlight-feature-card">
                <div className="feature-card-icons-row">
                  <div className="feature-icon-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="feature-icon-circle">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 3s1.34 3 8 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                </div>
                <h3>Student-Friendly Cities</h3>
                <p>Top Canadian cities like Montreal, Toronto, and Vancouver consistently rank among the best student cities globally, offering vibrant cultures and safe environments.</p>
              </div>

              <div className="highlight-feature-card">
                <div className="feature-icon-circle badge-spacing-bottom">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                  </svg>
                </div>
                <h3>World-Class Institutions</h3>
                <p>Canada boasts numerous universities ranking in the global top 100, providing top-notch degrees, advanced research spaces, and exceptional co-op facilities.</p>
              </div>

              <div className="highlight-feature-card">
                <div className="feature-icon-circle badge-spacing-bottom">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <h3>Post-Study Work Options</h3>
                <p>The Post-Graduation Work Permit (PGWP) allows eligible international graduates to stay and work in Canada, gaining crucial global industry experience.</p>
              </div>
            </section>

            {/* Dynamic Bottom Explorer CTAs */}
            <section className="explorer-footer-cta-section">
              <span className="cta-sub-tagline">UNLOCK YOUR FUTURE IN CANADA</span>
              <h2>Explore Universities, Colleges, and Scholarships in Canada</h2>
              <p className="cta-lead-heading-text">Discover the endless opportunities that await you in the Great White North.</p>
              <p className="cta-sub-supporting-text">Canada offers a world-class education alongside a diverse, inclusive, and breathtaking community experience. Are you ready to take your first step toward your academic journey?</p>
              
              <div className="cta-action-buttons-group">
                <a 
                  href={whatsappFormLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button cta-green-btn"
                >
                  EXPLORE UNIVERSITIES
                </a>
                <a 
                  href={whatsappFormLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button cta-green-btn"
                >
                  FIND SCHOLARSHIPS
                </a>
              </div>
            </section>
          </main>
        </div>

        {/* Floating WhatsApp Quick Action Widgets */}
        <div className="floating-sticky-widgets-container">
          <a 
            href={whatsappFormLink}
            className="floating-whatsapp-bubble" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 448 512" width="26" height="26" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </a>
        </div>
        
      </div>

      <Footer />
    </>
  );
}