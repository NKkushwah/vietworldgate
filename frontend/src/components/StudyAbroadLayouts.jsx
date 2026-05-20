import React from 'react';
import './StudyAbroadLayouts.css';

export default function StudyAbroadLayouts() {

  const testimonials = [
    {
      id: 1,
      name: "Amakanch Prashant Dhanek",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      name: "Celebrating the visa grant",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      name: "Jagriti Prakash",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const universityVisits = [
    {
      id: 1,
      title: "Navitas Canada",
      date: "18th May 2026, 03:30 PM to 04:30 PM",
      speaker: "Mr. Gaurav Singh",
      branch: "VIEC-Amritsar (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "JCU Singapore",
      date: "19th May 2026, 1:00 PM",
      speaker: "Mr. Tanuj Soni",
      branch: "VIEC-Bhutan (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Edith Cowan University",
      date: "19th May 2026, 10:00 AM to 12:00 PM",
      speaker: "Ms. Neelam Jain",
      branch: "VIEC-Kochi (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="layouts-container">

      {/* ==========================================
          SECTION 1: SUCCESS STORIES
         ========================================== */}
      <section className="success-stories-section">
        <h2 className="section-title-dark">Success Stories from <span>Our Students</span></h2>
        
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="video-thumbnail-box">
                <div className="circular-video-frame">
                  <img src={item.img} alt={item.name} />
                  <div className="play-btn-overlay">▶</div>
                </div>
              </div>
              <h4 className="student-name">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          SECTION 2: UPCOMING UNIVERSITY VISITS
         ========================================== */}
      <section className="university-visits-section">
        <h2 className="section-title-dark">Upcoming <span>University Visits</span></h2>

        <div className="visits-grid">
          {universityVisits.map((visit) => (
            <div key={visit.id} className="visit-card">
              <div className="visit-img-banner">
                <img src={visit.img} alt={visit.title} />
              </div>
              
              <div className="visit-info-body">
                <h3>{visit.title}</h3>
                
                <div className="meta-info-row">
                  <span className="icon">📅</span>
                  <span>{visit.date}</span>
                </div>
                <div className="meta-info-row">
                  <span className="icon">👤</span>
                  <span>{visit.speaker}</span>
                </div>
                <div className="meta-info-row">
                  <span className="icon">🏢</span>
                  <span>{visit.branch}</span>
                </div>
                <div className="meta-info-row">
                  <span className="icon">🎓</span>
                  <span>{visit.type}</span>
                </div>

                <button className="btn-read-more">
                  Read More ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          SECTION 3: HOW IT WORKS TIMELINE
         ========================================== */}
      <section className="how-it-works-section">
        <h2 className="section-title-light">How It Works - <span>Your Journey Simplified</span></h2>

        <div className="timeline-container">
          
          {/* Step 1 */}
          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">💼</span>
              <div className="step-number-badge">1</div>
            </div>
            <div className="step-content-box">
              <h4>Initial Counselling</h4>
              <p>Book a free consultation with one of our expert advisors and discuss your ambitions, academic profile and destination preferences.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">📋</span>
              <div className="step-number-badge">2</div>
            </div>
            <div className="step-content-box">
              <h4>Planning & Shortlisting</h4>
              <p>Based on the discussion, we help you shortlist courses and universities and draw up a timeline.</p>
            </div>
          </div>

          {/* Step 3 (Active Highlighted State) */}
          <div className="timeline-step active">
            <div className="icon-circle-wrapper">
              <span className="step-icon">📝</span>
              <div className="step-number-badge">3</div>
            </div>
            <div className="step-content-box">
              <h4>Application & Documentation</h4>
              <p>We assist in filling applications, preparing SOPs, gathering transcripts, and submitting to universities.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">🛂</span>
              <div className="step-number-badge">4</div>
            </div>
            <div className="step-content-box">
              <h4>Visa Process</h4>
              <p>We guide you through documentation, interview preparation and liaise with the embassy so you're well-prepared.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}