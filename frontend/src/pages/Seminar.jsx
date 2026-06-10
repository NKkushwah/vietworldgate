import React from 'react';
import './Seminar.css'; 

// Aapke customized Navbar aur Footer components yahan link ho chuke hain
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  GraduationCap, 
  ArrowUpRight, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

const EventPage = () => {
  const speakers = [
    {
      name: "Mr. Amrit Pal Singh",
      role: "Senior Global Education Consultant",
      company: "Ex-Visa Officer / Study Abroad Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
    },
    {
      name: "Ms. Shalini Sharma",
      role: "Head of International Admissions",
      company: "Global Career Pathways",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
    },
    {
      name: "Dr. David Vance",
      role: "International University Representative",
      company: "Global Education Alliance",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    }
  ];

  return (
    <div className="event-wrapper">
      
      {/* --- EXTERNAL NAVBAR COMPONENT --- */}
      <Navbar />

      <div className="event-container">
        
        {/* --- BANNER SECTION --- */}
        <div className="event-banner">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <span className="badge-seminar">Free Mega Seminar</span>
            <h1 className="banner-title">Global Study Abroad & Visa Consultation 2026</h1>
            <p className="banner-description">
              Unlock your international future! Meet top university representatives and visa experts. Get direct guidance on scholarships, courses, and post-study work visas for the USA, UK, Canada, Australia, and Europe.
            </p>
            
            <div className="banner-meta">
              <div className="meta-item">
                <Calendar size={16} className="meta-icon" />
                <span>28 June 2026</span>
              </div>
              <div className="meta-item">
                <Clock size={16} className="meta-icon" />
                <span>10:30 AM - 04:30 PM</span>
              </div>
              <div className="meta-item">
                <MapPin size={16} className="meta-icon" />
                <span>36, Block H, Sector 63,Uttar Pradesh 201301, NoidaDelhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN LAYOUT GRID --- */}
        <div className="main-layout">
          
          {/* LEFT SECTION: About & Experts */}
          <div className="left-section">
            
            <div className="about-block">
              <h2 className="section-title">About the Consultation Seminar</h2>
              <p className="section-desc">
                Confused about university applications, course selections, or visa processing? This mega seminar is designed to provide students and parents with end-to-end transparency regarding overseas education. Get 1-on-1 personalized profile evaluations completely free of cost and discover financial aids that match your academic performance.
              </p>
            </div>

            {/* Features Row tailored for Abroad Consultation */}
            <div className="features-row">
              <div className="feature-card">
                <div className="feature-icon-wrapper icon-blue">
                  <GraduationCap size={20} />
                </div>
                <div className="feature-info-text">
                  <span className="feature-name">Profile Assessment</span>
                  <span className="feature-detail">Instant eligibility checks for top 500+ global universities.</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper icon-purple">
                  <Compass size={20} />
                </div>
                <div className="feature-info-text">
                  <span className="feature-name">Scholarship Schemes</span>
                  <span className="feature-detail">Identify up to 100% tuition fee waiver opportunities.</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper icon-green">
                  <ShieldCheck size={20} />
                </div>
                <div className="feature-info-text">
                  <span className="feature-name">Visa Guidance</span>
                  <span className="feature-detail">Step-by-step guidance on complex visa documentation.</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper icon-orange">
                  <Award size={20} />
                </div>
                <div className="feature-info-text">
                  <span className="feature-name">IELTS / TOEFL Tips</span>
                  <span className="feature-detail">Get special diagnostic kits and learning material strategy.</span>
                </div>
              </div>
            </div>

            {/* Speakers / Consultants Section */}
            <div className="speakers-section">
              <div className="speakers-header">
                <h2 className="section-title">Meet Our Overseas Experts</h2>
                <a href="#all-consultants" className="view-all-link">
                  View All Experts <ArrowUpRight size={16} style={{ marginLeft: '4px' }} />
                </a>
              </div>

              <div className="speakers-grid">
                {speakers.map((speaker, index) => (
                  <div className="speaker-card" key={index}>
                    <img src={speaker.image} alt={speaker.name} className="speaker-img" />
                    <div className="speaker-info">
                      <h4 className="speaker-name">{speaker.name}</h4>
                      <p className="speaker-role">{speaker.role}</p>
                      <p className="speaker-company">{speaker.company}</p>
                      <div className="linkedin-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077b5">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SECTION: Event Details Side Panel */}
          <div className="right-section">
            <div className="details-card">
              <h3 className="sidebar-title">Session Details</h3>
              
              <div className="sidebar-info-list">
                <div className="sidebar-item">
                  <Calendar size={18} className="sidebar-icon" />
                  <div>
                    <label>Date</label>
                    <p>28 June 2026</p>
                  </div>
                </div>

                <div className="sidebar-item">
                  <Clock size={18} className="sidebar-icon" />
                  <div>
                    <label>Timings</label>
                    <p>10:30 AM - 04:30 PM</p>
                  </div>
                </div>

                <div className="sidebar-item">
                  <MapPin size={18} className="sidebar-icon" />
                  <div>
                    <label>Venue Location</label>
                    <p>36, Block H, Sector 63,Uttar Pradesh 201301, NoidaDelhi, India</p>
                  </div>
                </div>

                <div className="sidebar-item">
                  <Users size={18} className="sidebar-icon" />
                  <div>
                    <label>Free Slots Remaining</label>
                    <p className="seats-highlight">Only 45 Left</p>
                  </div>
                </div>
              </div>

              <hr className="divider" />

              <div className="registration-block">
                <label>Entry Fee</label>
                <h2 className="price">100% Free <span className="tax-text">(Prior Registration Mandatory)</span></h2>
              </div>

              <div className="action-buttons">
                <button className="btn-register">Book Free Slots Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- EXTERNAL FOOTER COMPONENT --- */}
      <Footer />

    </div>
  );
};

export default EventPage;