import React from 'react';
import './MissionVision.css'; // Just importing the simple CSS file directly
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MissionVision = () => {
  return (
    <>
    <Navbar />
    <div className="mv-container">
      
      {/* Top Banner Section */}
      <div className="mv-banner">
        <div className="mv-banner-content">
          <h1 className="mv-title">Our Mission and Vision Statement</h1>
          <p className="mv-subtitle">
            Discover the driving purpose and future aspirations of VIET Worldgate Private Limited. 
            We define our goals, core expertise, and expectations to deliver elite global education consultancy.
          </p>
        </div>
      </div>

      {/* Main Content Area with Angled Graphic Overlay */}
      <div className="mv-content-wrapper">
        
        {/* Background Split Effect */}
        <div className="mv-angled-bg" />

        {/* Content Container */}
        <div className="mv-grid">
          
          {/* --- VISION SECTION --- */}
          <div className="mv-card">
            <div className="mv-icon-circle">
              <svg className="mv-icon" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            
            <h2 className="mv-card-heading">Vision</h2>
            <div className="mv-divider" />
            
            <p className="mv-main-statement">
              To become one of the most trusted, respected, and globally recognized education and immigration consultancy firms by transforming the lives of students through international education and global career opportunities.
            </p>

            {/* Vision Pillars */}
            <div className="mv-pillars-list">
              <h3 className="mv-section-label">Our Long-Term Horizons</h3>
              {[
                { title: "Trusted Global Brand", desc: "Known for reliability, professionalism, and successful student outcomes." },
                { title: "Empowering Future Generations", desc: "Inspiring students to become globally competitive professionals." },
                { title: "Expanding International Presence", desc: "Strengthening partnerships with world-class universities and institutions." },
                { title: "Delivering Excellence", desc: "High-quality counseling and transparent processes that exceed expectations." },
                { title: "Global Success Stories", desc: "Transforming futures through admissions, scholarships, and visa approvals." },
                { title: "Innovation & Modern Education", desc: "Adapting to digital transformations and emerging global opportunities." }
              ].map((item, index) => (
                <div key={index} className="mv-pillar-item">
                  <h4 className="mv-pillar-title">{item.title}</h4>
                  <p className="mv-pillar-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- MISSION SECTION --- */}
          <div className="mv-card">
            <div className="mv-icon-circle">
              <svg className="mv-icon" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h2 className="mv-card-heading">Mission</h2>
            <div className="mv-divider" />
            
            <p className="mv-main-statement">
              To empower students, graduates, and professionals by providing trusted guidance, transparent consultation, and quality international education opportunities that help them build successful global careers.
            </p>

            {/* Mission Pillars */}
            <div className="mv-pillars-list">
              <h3 className="mv-section-label">Our Commitments</h3>
              {[
                { title: "Student-Centered Guidance", desc: "Personalized support helping individuals make informed pathway decisions." },
                { title: "Transparency & Ethical Practices", desc: "Dedicated to maintaining absolute honesty, integrity, and professionalism." },
                { title: "Quality International Opportunities", desc: "Connecting students with globally recognized institutions and scholarships." },
                { title: "End-to-End Support", desc: "Comprehensive care from initial counseling up to pre-departure steps." },
                { title: "Continuous Growth & Innovation", desc: "Upgrading services matching modern global trends and immigration policies." },
                { title: "Global Career Development", desc: "Preparing students with confidence and skills for a competitive environment." }
              ].map((item, index) => (
                <div key={index} className="mv-pillar-item">
                  <h4 className="mv-pillar-title">{item.title}</h4>
                  <p className="mv-pillar-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info inside layout wrapper */}
        <div className="mv-footer">
          <p>© {new Date().getFullYear()} VIET Worldgate Private Limited. All rights reserved.</p>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default MissionVision;