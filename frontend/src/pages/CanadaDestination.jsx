import React from 'react';
import './CanadaDestination.css'; // Make sure to rename your CSS file accordingly
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CanadaDestination() {
  // WhatsApp Link with a custom pre-filled message for Canada Destination
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20Canada.%20Please%20help%20me%20with%20course%20options,%20universities,%20colleges,%20and%20the%20study%20permit%20process.";

  return (
    <>
      <Navbar />
      <div className="dest-container">
        {/* Top Banner Section with Background Image */}
        <header className="dest-header">
          <div className="header-overlay">
            <div className="header-content">
              <h1>Canada</h1>
              <nav className="breadcrumbs">
                <span className="home-icon">🏠</span> 
                <span className="arrow">→</span> Destinations 
                <span className="arrow">→</span> Canada
              </nav>
            </div>
            <div className="header-student-image">
              <div className="student-wrapper">
                <div className="canada-flag-badge">🇨🇦</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid Content */}
        <div className="dest-layout-grid">
          
          {/* Left Sidebar Content (WhatsApp Card) */}
          <aside className="dest-sidebar">
            <div className="call-service-box">
              <p>Our Appointment Service call us</p>
              <a href="tel:+917982295530" className="phone-link">
                <span className="phone-icon">📞</span> +91-7982295530
              </a>
            </div>

            {/* WhatsApp Chat Card */}
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
                  Confused about DLIs, SDS applications, requirements, or courses in Canada? Connect instantly with our experts for immediate support.
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
              <h2>Study in Canada: Your Pathway to Global Success!</h2>
              <p>
                Canada is globally recognized for its high-quality education system, offering an array of programs across top-tier universities and colleges. With a strong focus on research, practical learning, and co-op programs, Canada equips students with real-world industry experience. Along with affordable tuition fees compared to other major study destinations, students benefit from a high standard of living, excellent healthcare, and diverse post-graduation work opportunities.
              </p>
            </section>

            <section className="info-block">
              <h2>Why study in Canada?</h2>
              <p>
                As an international student, Canada provides an exceptionally welcoming, safe, and multicultural environment. Educational institutions here hold dynamic campus cultures and robust support networks. Moreover, Canada’s Post-Graduation Work Permit (PGWP) program offers a direct avenue to gain invaluable international work experience, making it one of the most attractive destinations for students worldwide to build long-term careers.
              </p>
            </section>

            {/* Core Feature Value Cards */}
            <section className="features-grid">
              <div className="feature-card">
                <div className="icon-circle">🍁</div>
                <div className="icon-circle">👥</div>
                <h3>Student-Friendly Cities</h3>
                <p>Top Canadian cities like Montreal, Toronto, and Vancouver consistently rank among the best student cities globally, offering vibrant cultures and safe environments.</p>
              </div>

              <div className="feature-card">
                <div className="icon-circle">🎓</div>
                <h3>World-Class Institutions</h3>
                <p>Canada boasts numerous universities ranking in the global top 100, providing top-notch degrees, advanced research spaces, and exceptional co-op facilities.</p>
              </div>

              <div className="feature-card">
                <div className="icon-circle">💼</div>
                <h3>Post-Study Work Options</h3>
                <p>The Post-Graduation Work Permit (PGWP) allows eligible international graduates to stay and work in Canada, gaining crucial global industry experience.</p>
              </div>
            </section>

            {/* Dynamic Bottom Explorer CTAs */}
            <section className="explore-footer-cta">
              <span className="sub-tagline">UNLOCK YOUR FUTURE IN CANADA</span>
              <h2>Explore Universities, Colleges, and Scholarships in Canada</h2>
              <p className="lead-text">Discover the endless opportunities that await you in the Great White North.</p>
              <p className="sub-text">Canada offers a world-class education alongside a diverse, inclusive, and breathtaking community experience. Are you ready to take your first step toward your academic journey?</p>
              
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