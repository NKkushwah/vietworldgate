import React from 'react';
import './OurTeam.css'; // Link to your separate CSS sheet
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/vietworldgate1.png'; // Import your company logo

const OurTeam = () => {
  // Structured data for team roles
  const teamRoles = [
    {
      title: "Education Counselors",
      description: "Our counselors are trained experts who understand global education systems and help students choose the right country, course, and university based on their goals, academic background, and budget.",
      icon: "🎓"
    },
    {
      title: "Admission Specialists",
      description: "They ensure that every student application is professionally prepared, error-free, and aligned with university requirements to maximize admission success.",
      icon: "📄"
    },
    {
      title: "Visa Experts",
      description: "Our visa team provides complete support for documentation, application filing, and interview preparation to ensure a smooth and successful visa process.",
      icon: "🛡️"
    },
    {
      title: "Career Advisors",
      description: "They guide students in selecting career-oriented courses and help align education with long-term global career opportunities.",
      icon: "🧭"
    }
  ];

  const approaches = [
    "Personalized one-on-one guidance",
    "Transparent and ethical consultation",
    "Up-to-date knowledge of global education trends",
    "End-to-end student support",
    "Focus on long-term success, not just admissions"
  ];

  const differentiators = [
    "Strong industry experience",
    "Student-first approach",
    "High success rate in admissions and visas",
    "Continuous learning and improvement",
    "Commitment to quality service"
  ];

  return (
    <>
      <Navbar />
      <div className="team-page">
        
        {/* Industry-Level Hero Section */}
        <section className="hero-section">
          <div className="container-max">
            <div className="hero-grid">
              
              {/* Left Column: Authoritative Brand Messaging */}
              <div className="hero-content-left">
                
                {/* BRAND HEADER: Logo and Subtitle aligned together perfectly */}
                <div className="brand-header-inline">
                  <div className="company-logo-wrapper">
                    <img 
                      src={logo} 
                      alt="VIET Worldgate Logo" 
                      className="company-logo-img" 
                    />
                  </div>
                  <p className="company-subtitle">VIET Worldgate Private Limited</p>
                </div>

                <h1 className="hero-title">Our Team</h1>
                <p className="hero-description">
                  At VIET Worldgate Private Limited, our strength lies in our people. We are a team of experienced 
                  professionals dedicated to guiding students and professionals toward successful international careers.
                  Our team combines expertise in education counseling, university admissions, visa processing, and career 
                  planning to provide accurate, transparent, and result-oriented guidance at every stage of the journey.
                </p>
              </div>

              {/* Right Column: Premium Geometric Value Card */}
              <div className="hero-badge-right">
                <p className="badge-tagline">Result-Oriented Global Guidance</p>
                <div className="mini-stats-row">
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Transparency</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">End-to-End</span>
                    <span className="stat-label">Student Support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Grid Section: Who makes up our team */}
        <section className="team-roles-section">
          <div className="container-max">
            <h2 className="section-title">Who Makes Up Our Team</h2>
            
            <div className="grid-layout">
              {teamRoles.map((role, index) => (
                <div key={index} className="role-card">
                  <span className="card-icon">{role.icon}</span>
                  <div>
                    <h3 className="card-title">{role.title}</h3>
                    <p className="card-text">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Operations & Support Highlight */}
            <div className="support-box">
              <span className="card-icon">💼</span>
              <div>
                <h3 className="support-title">Support & Operations Team</h3>
                <p className="support-text">Our backend team ensures smooth coordination, timely updates, and continuous support throughout the student journey.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-max">
          <hr className="section-divider" />
        </div>

        {/* Dual Lists: Approach and Differentiators */}
        <section className="container-max">
          <div className="dual-section">
            
            {/* Approach */}
            <div>
              <h2 className="sub-section-title">Our Approach as a Team</h2>
              <ul className="feature-list">
                {approaches.map((item, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Differentiators */}
            <div>
              <h2 className="sub-section-title">What Makes Our Team Different</h2>
              <ul className="feature-list blue-check">
                {differentiators.map((item, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Footer Bottom Banner */}
        <section className="commitment-banner">
          <div className="commitment-content">
            <h2 className="commitment-title">Our Commitment</h2>
            <p className="commitment-text">
              "As a team, we are committed to helping every student make the right decision, achieve their academic goals, and build a successful future globally."
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default OurTeam;