import React, { useState, useEffect, useRef } from 'react';
import './StudyAbroadLayouts.css';

export default function StudyAbroadLayouts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  
  // Ref to hold the auto-play timer instance
  const autoPlayRef = useRef(null);

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
    },
    {
      id: 4,
      title: "Swinburne University",
      date: "20th May 2026, 11:30 AM to 12:30 PM",
      speaker: "Mrs. Prachi Hajela",
      branch: "VIEC-Mumbai, Andheri (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 5,
      title: "CQUniversity Australia",
      date: "26th May 2026, 10:00 AM to 11:30 AM",
      speaker: "Ms. Shobhagya Sharma",
      branch: "VIEC-Sri Lanka, Colombo (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1525920980462-9ed05ab88b75?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 6,
      title: "University of Toronto",
      date: "28th May 2026, 02:00 PM to 04:00 PM",
      speaker: "Dr. Alan Mercer",
      branch: "VIEC-Delhi (Office)",
      type: "Global Meet",
      img: "https://images.unsplash.com/photo-1574097656146-0b43b7660cb6?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 7,
      title: "Deakin University",
      date: "01st June 2026, 11:00 AM",
      speaker: "Mr. Ryan Reynolds",
      branch: "VIEC-Bangalore (Office)",
      type: "Admissions Day",
      img: "https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 8,
      title: "University of Leeds",
      date: "03rd June 2026, 01:00 PM to 03:00 PM",
      speaker: "Ms. Sarah Jenkins",
      branch: "VIEC-Chandigarh (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 9,
      title: "Auckland Tech University",
      date: "05th June 2026, 10:30 AM",
      speaker: "Mr. David Boon",
      branch: "VIEC-Pune (Office)",
      type: "Scholarship Seminar",
      img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 10,
      title: "Dublin City University",
      date: "10th June 2026, 04:00 PM",
      speaker: "Ms. Emma Walsh",
      branch: "VIEC-Hyderabad (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1564982743470-47edd0c2c507?auto=format&fit=crop&q=80&w=400"
    }
  ];

  // Dynamically update card count based on screen sizes (Fixed iPad Pro boundaries)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1025) { // Fixed to capture iPad Pro exactly
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = universityVisits.length - visibleCards;

  // Slide Forward
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Slide Backward
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Start the auto-sliding timer
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  // Clear/Stop the auto-sliding timer
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, visibleCards]);

  // Adjusting track translate index fluidly
  const slideTranslateX = currentIndex * (100 / visibleCards);

  return (
    <div className="layouts-container">

      {/* SECTION 1: SUCCESS STORIES */}
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

      {/* SECTION 2: UPCOMING UNIVERSITY VISITS (AUTO-SLIDER) */}
      <section className="university-visits-section">
        <h2 className="section-title-dark">Upcoming <span>University Visits</span></h2>

        <div 
          className="slider-outer-wrapper"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <button className="slider-arrow-btn left-arrow" onClick={prevSlide}>&#10094;</button>

          <div className="visits-slider-container">
            <div 
              className="visits-slider-track" 
              style={{ transform: `translateX(-${slideTranslateX}%)` }}
            >
              {universityVisits.map((visit) => (
                <div key={visit.id} className="visit-card-wrapper">
                  <div className="visit-card">
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

                      <button className="btn-read-more-visit">
                        Read More <span className="arrow-circle-visit">➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow-btn right-arrow" onClick={nextSlide}>&#10095;</button>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS TIMELINE */}
      <section className="how-it-works-section">
        <h2 className="section-title-light">How It Works - <span>Your Journey Simplified</span></h2>
        <div className="timeline-container">
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