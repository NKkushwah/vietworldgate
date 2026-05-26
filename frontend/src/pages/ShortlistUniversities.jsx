import React from 'react';
import './ShortlistUniversities.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShortlistUniversities = () => {
  const whatsappFormLink = "https://wa.me/917982295530?text=Hi,%20I%20want%20to%20shortlist%20universities%20based%20on%20my%20profile.%20Please%20guide%20me%20with%20the%20process.";

  return (
    <>
    <Navbar />
    <div className="visa-page-container">
      
      <header className="visa-hero-banner">
        <div className="hero-content-left">
          <h2></h2>
          <div className="breadcrumb-trail">
            <span className="home-icon"></span> ➔ <span className="current-page"></span>
          </div>
        </div>
      </header>

      <main className="visa-main-content">
        <div className="visa-grid-container">
          
          <aside className="visa-sidebar">
            
            <div className="appointment-call-widget-banner">
              <div className="widget-banner-image-placeholder">
                <div className="purple-call-overlay">
                  <p>Book an Appointment with Our Experts</p>
                  <a href="tel:+911140515555" className="phone-number-banner">
                    <span className="phone-svg-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    +91-7982295530
                  </a>
                </div>
              </div>
            </div>

            <div className="whatsapp-chat-card-panel">
              <div className="wa-panel-header">
                <h4>APPOINTMENT FORM</h4>
                <div className="purple-underline-decor"></div>
              </div>
              
              <div className="wa-panel-body">
                <p className="wa-panel-text">
                  Skip lengthy forms. Share your academic profile and preferences instantly with our team through WhatsApp for quick and personalized university shortlisting assistance.
                </p>
                <a 
                  href={whatsappFormLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-form-tag-btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  Fill WhatsApp Form
                </a>
              </div>
            </div>
          </aside>

          <section className="visa-details-body">
            
            <div className="shortlist-intro-header">
              <h3>University Shortlisting</h3>
              <p>
                At VIET Worldgate Private Limited, we help students identify the most suitable universities based on their academic profile, career goals, and financial background. Our expert advisors evaluate key factors such as university rankings, course structure, location, tuition fees, and future career opportunities to ensure you make the right decision for your global education journey.
              </p>
            </div>

            <div className="services-three-column-grid">
              
              <div className="service-feature-card-premium">
                <div className="purple-icon-circle-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h4>Country & Destination Selection</h4>
                <p>
                  We guide you in choosing the right study destination such as the UK, Canada, Australia, USA, and more based on your academic goals, budget, and long-term career opportunities.
                </p>
              </div>

              <div className="service-feature-card-premium">
                <div className="purple-icon-circle-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h4>University Selection</h4>
                <p>
                  We provide carefully shortlisted university options that align with your academic profile, increasing your chances of admission and future success.
                </p>
              </div>

              <div className="service-feature-card-premium">
                <div className="purple-icon-circle-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  </svg>
                </div>
                <h4>Application Strategy</h4>
                <p>
                  Our team builds a strong application strategy by reviewing your documents and academic profile to maximize your chances of securing admission.
                </p>
              </div>

            </div>

            <div className="admission-checklist-block">
              <h3>Our University Shortlisting Process</h3>
              <p className="checklist-lead-text">
                Choosing the right university is a critical step in your study abroad journey. Our structured and personalized approach ensures you receive accurate and reliable guidance.
              </p>
              
              <ul className="custom-checkmark-list">
                <li><span className="blue-check-icon">✓</span> Our counselors assess your academic background, interests, and career goals.</li>
                <li><span className="blue-check-icon">✓</span> We shortlist universities that match your profile and budget.</li>
                <li><span className="blue-check-icon">✓</span> Provide detailed comparison of universities, courses, and locations.</li>
                <li><span className="blue-check-icon">✓</span> Assist in preparing SOP, LOR, and required documents.</li>
                <li><span className="blue-check-icon">✓</span> Continuous support throughout the entire application process.</li>
              </ul>

              <p className="checklist-closing-text">
                With our expertise and personalized approach, we ensure every application is strategically prepared and aligned with university requirements, helping you secure admission to globally recognized institutions.
              </p>
            </div>

            <div className="university-partners-panel">
              <h3>Our Global Network</h3>
              <div className="partners-logo-grid">
                
                <div className="logo-card">
                  <div className="mock-logo-title bold-navy">UNITED KINGDOM</div>
                  <div className="mock-logo-sub">Top Universities</div>
                </div>

                <div className="logo-card">
                  <div className="mock-logo-title orange-text">CANADA</div>
                  <div className="mock-logo-sub">Leading Institutions</div>
                </div>

                <div className="logo-card">
                  <div className="mock-logo-title teal-text">AUSTRALIA</div>
                  <div className="mock-logo-sub">Global Education Hub</div>
                </div>

                <div className="logo-card">
                  <div className="mock-logo-title black-bg-white-text">UNITED STATES</div>
                  <div className="mock-logo-sub">Top Ranked Universities</div>
                </div>

                <div className="logo-card">
                  <div className="mock-logo-title modern-deakin">EUROPE</div>
                  <div className="mock-logo-sub">Diverse Opportunities</div>
                </div>

                <div className="logo-card">
                  <div className="mock-logo-title block-ecu">NEW ZEALAND</div>
                  <div className="mock-logo-sub gray-text">Quality Education</div>
                </div>

              </div>
            </div>

          </section>

        </div>
      </main>

      <div className="floating-action-widgets">
        <a 
          href="https://wa.me/7982295530" 
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
};

export default ShortlistUniversities;