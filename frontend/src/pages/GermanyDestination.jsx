import React from 'react';
import './GermanyDestination.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function GermanyDestination() {
  const whatsappLink = "https://wa.me/917982295530?text=Hi,%20I%20am%20interested%20in%20studying%20in%20Germany.%20Please%20guide%20me%20about%20public%20universities%20and%20the%20visa%20process.";

  return (
    <>
      <Navbar />
      <div className="deu-page-wrapper">

        {/* HERO BANNER */}
        <header className="deu-hero-banner">
          <div className="deu-hero-inner">
            <div className="deu-hero-left">
              <h1 className="deu-hero-title"></h1>
              <nav className="deu-breadcrumb">
                <span></span>
                <span className="deu-arrow"></span>
                <span className="deu-arrow"></span> 
              </nav>
            </div>
            <div className="deu-hero-right">
              <span className="deu-flag-emoji"></span>
            </div>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="deu-main-grid">

          {/* SIDEBAR */}
          <aside className="deu-sidebar">

            <div className="deu-call-card">
              <p>Our Appointment Service call us</p>
              <a href="tel:+917982295530" className="deu-phone-link">
                <span>📞</span> +91-7982295530
              </a>
            </div>

            <div className="deu-wa-card">
              <div className="deu-wa-header">
                <h3>Academic Support</h3>
                <div className="deu-wa-status">
                  <span className="deu-pulse-dot"></span> Online Now
                </div>
              </div>
              <div className="deu-wa-body">
                <p className="deu-wa-intro">
                  Confused about standard applications, requirements, public university pathways, or blocked accounts in Germany?
                </p>
                <div className="deu-wa-highlight">
                  Our dynamic educational counselors are ready to help you with the admission process instantly.
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deu-wa-btn"
                >
                  <span>💬</span> START CHAT NOW
                </a>
              </div>
            </div>

          </aside>

          {/* MAIN CONTENT */}
          <main className="deu-content">

            <section className="deu-info-block">
              <h2>Study in Germany: A World-Class Choice</h2>
              <div className="deu-divider"></div>
              <p>
                Germany is a leading global destination for international students, offering high-quality education,
                tuition-free public universities, and a strong international reputation, especially in fields like
                engineering, computer science, and business.
              </p>
            </section>

            <section className="deu-info-block">
              <h2>Why study in Germany?</h2>
              <div className="deu-divider"></div>

              <div className="deu-nested-block">
                <h3>Strong Focus on Research & Innovation</h3>
                <ul className="deu-bullet-list">
                  <li>Germany invests heavily in research and development (R&D), providing students with cutting-edge facilities.</li>
                  <li>Students often get chances to work on real-world projects with leading companies and research institutes.</li>
                  <li>Ideal for those pursuing careers in STEM, medicine, business, or social sciences.</li>
                </ul>
              </div>

              <div className="deu-nested-block">
                <h3>Excellent Career Opportunities</h3>
                <ul className="deu-bullet-list">
                  <li>Germany has Europe's largest economy, offering numerous job opportunities for international graduates.</li>
                  <li>International graduates can stay for up to 18 months after finishing their studies to find a relevant job.</li>
                  <li>Skilled workers in IT, engineering, healthcare, and business are in high demand across the country.</li>
                </ul>
              </div>
            </section>

            {/* FEATURE CARDS */}
            <section className="deu-features-grid">
              <div className="deu-feature-card">
                <div className="deu-icon-circle"><span>🎓</span></div>
                <h3>Affordable Education</h3>
                <p>Public universities offer tuition-free education for both local and international students alike.</p>
              </div>
              <div className="deu-feature-card">
                <div className="deu-icon-circle"><span>💼</span></div>
                <h3>Career Prospects</h3>
                <p>Strong ties with industries like BMW, Siemens, and SAP ensure excellent job placement horizons.</p>
              </div>
              <div className="deu-feature-card">
                <div className="deu-icon-circle"><span>📜</span></div>
                <h3>Scholarships</h3>
                <p>DAAD and other organizations provide a wide variety of financial support to meritorious students.</p>
              </div>
            </section>

            <section className="deu-info-block">
              <h2>Strong Industry-University Links</h2>
              <div className="deu-divider"></div>
              <p>
                Many German universities collaborate closely with top global companies (e.g., <strong>BMW, Siemens, Bosch, and SAP</strong>).
                This gives students hands-on experience and a significant head start in their professional careers.
              </p>
            </section>

            {/* CTA SECTION */}
            <section className="deu-cta-section">
              <span className="deu-cta-tagline">UNLOCK YOUR FUTURE IN GERMANY</span>
              <h2 className="deu-cta-heading">Explore Universities and Scholarships in Germany</h2>
              <p className="deu-cta-lead">Discover the endless opportunities that await you in Germany.</p>
              <p className="deu-cta-sub">Germany offers world-class education and a vibrant, diverse cultural experience. Are you ready to take the first step towards your academic journey?</p>
              <div className="deu-btn-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="deu-primary-btn">
                  EXPLORE UNIVERSITIES
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="deu-primary-btn">
                  FIND SCHOLARSHIPS
                </a>
              </div>
            </section>

          </main>
        </div>

        

      </div>
      <Footer />
    </>
  );
}