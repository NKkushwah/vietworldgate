import React, { useState, useEffect, useRef } from "react";
import "./StudyAbroadLayouts.css";
import logo1 from "../assets/story1photo.jpeg";
import logo2 from "../assets/story2photo.jpeg";
import logo3 from "../assets/story1video.mp4";

export default function StudyAbroadLayouts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to manage active video popup modal
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  
  // Ref to hold the auto-play timer instance
  const autoPlayRef = useRef(null);

  // =========================
  // TESTIMONIALS
  // =========================
  const testimonials = [
   
    {
      id: 1,
      name: "Vibhu Patel",
      img: logo3, 
      isVideo: true 
    },
  
  ];

  // =========================
  // UNIVERSITY VISITS
  // =========================
  const universityVisits = [
    {
      id: 1,
      title: "Navitas Canada",
      date: "18th May 2026, 03:30 PM to 04:30 PM",
      speaker: "Mr. Gaurav Singh",
      branch: "VIET WORLDGATE-Amritsar (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      title: "JCU Singapore",
      date: "19th May 2026, 1:00 PM",
      speaker: "Mr. Tanuj Soni",
      branch: "VIET WORLDGATE-Bhutan (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      title: "Edith Cowan University",
      date: "19th May 2026, 10:00 AM to 12:00 PM",
      speaker: "Ms. Neelam Jain",
      branch: "VIET WORLDGATE-Kochi (Office)",
      type: "University Visits",
      img: "https://tse2.mm.bing.net/th/id/OIP.Vd3ZsTLfGsC0TpYGHqsTcAHaE8?pid=Api&h=220&P=0",
    },
    {
      id: 4,
      title: "Swinburne University",
      date: "20th May 2026, 11:30 AM to 12:30 PM",
      speaker: "Mrs. Prachi Hajela",
      branch: "VIET WORLDGATE-Mumbai, Andheri (Office)",
      type: "University Visits",
      img: "https://www.buildingengineering.com.au/wp-content/uploads/2023/02/Bldg-Eng-University-of-Melbourne-International-House-01-1536x1028.jpg",
    },
    {
      id: 5,
      title: "CQUniversity Australia",
      date: "26th May 2026, 10:00 AM to 11:30 AM",
      speaker: "Ms. Shobhagya Sharma",
      branch: "VIET WORLDGATE-Sri Lanka, Colombo (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 6,
      title: "University of Toronto",
      date: "28th May 2026, 02:00 PM to 04:00 PM",
      speaker: "Dr. Alan Mercer",
      branch: "VIET WORLDGATE-Delhi (Office)",
      type: "Global Meet",
      img: "https://images.unsplash.com/photo-1574097656146-0b43b7660cb6?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 7,
      title: "Deakin University",
      date: "01st June 2026, 11:00 AM",
      speaker: "Mr. Ryan Reynolds",
      branch: "VIET WORLDGATE-Noida (Office)",
      type: "Admissions Day",
      img: "https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 8,
      title: "University of Leeds",
      date: "03rd June 2026, 01:00 PM to 03:00 PM",
      speaker: "Ms. Sarah Jenkins",
      branch: "VIET WORLDGATE-Noida",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 9,
      title: "Auckland Tech University",
      date: "05th June 2026, 10:30 AM",
      speaker: "Mr. David Boon",
      branch: "VIET WORLDGATE-Ghaziabad (Office)",
      type: "Scholarship Seminar",
      img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 10,
      title: "Dublin City University",
      date: "10th June 2026, 04:00 PM",
      speaker: "Ms. Emma Walsh",
      branch: "VIET WORLDGATE-Noida (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1564982743470-47edd0c2c507?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const getVisibleCardsCount = () => {
    if (window.innerWidth < 768) return 1; 
    if (window.innerWidth < 1024) return 2;
    return 3; 
  };

  const nextSlide = () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = universityVisits.length - visibleCards;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = universityVisits.length - visibleCards;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const visibleCardsCount = getVisibleCardsCount();
  const slideTranslateX = currentIndex * (100 / visibleCardsCount);

  return (
    <div className="layouts-container">

      {/* SUCCESS STORIES */}
      <section className="success-stories-section">
        <h2 className="section-title-dark">
          Success Stories from <span>Our Students</span>
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="testimonial-card"
              onClick={() => item.isVideo && setActiveVideoUrl(item.img)}
              style={{ cursor: item.isVideo ? "pointer" : "default" }}
            >
              <div className="video-thumbnail-box">
                <div className="circular-video-frame">
                  {item.isVideo ? (
                    <video 
                      src={item.img} 
                      muted 
                      loop 
                      playsInline 
                      autoPlay
                      preload="auto"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <img src={item.img} alt={item.name} />
                  )}

                  {item.isVideo && (
                    <div className="play-btn-overlay">
                      ▶
                    </div>
                  )}
                </div>
              </div>

              <h4 className="student-name">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      {activeVideoUrl && (
        <div 
          className="video-modal-overlay" 
          onClick={() => setActiveVideoUrl(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '750px',
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveVideoUrl(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'background 0.2s'
              }}
            >
              &times;
            </button>

            {/* Added standard type constraints and explicit keying */}
            <video 
              key={activeVideoUrl}
              src={activeVideoUrl} 
              controls 
              autoPlay 
              playsInline
              preload="auto"
              style={{ width: '100%', maxHeight: '80vh', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* SECTION 2: UPCOMING UNIVERSITY VISITS */}
      <section className="university-visits-section">
        <h2 className="section-title-dark">
          Upcoming <span>University Visits</span>
        </h2>

        <div 
          className="slider-outer-wrapper"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <button className="slider-arrow-btn left-arrow" onClick={prevSlide}>&#10094;</button>

          <div className="visits-slider-container">
            <div
              className="visits-slider-track"
              style={{
                transform: `translateX(-${slideTranslateX}%)`,
              }}
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
                        Read More
                        <span className="arrow-circle-visit">➔</span>
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
        <h2 className="section-title-light">
          How It Works - <span> Your Journey Simplified</span>
        </h2>

        <div className="timeline-container">
          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">💼</span>
              <div className="step-number-badge">1</div>
            </div>
            <div className="step-content-box">
              <h4>Initial Counselling</h4>
              <p>Book a free consultation with one of our expert advisors.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">📋</span>
              <div className="step-number-badge">2</div>
            </div>
            <div className="step-content-box">
              <h4>Planning & Shortlisting</h4>
              <p>We help you shortlist universities and courses.</p>
            </div>
          </div>

          <div className="timeline-step active">
            <div className="icon-circle-wrapper">
              <span className="step-icon">📝</span>
              <div className="step-number-badge">3</div>
            </div>
            <div className="step-content-box">
              <h4>Application & Documentation</h4>
              <p>We assist with SOPs, transcripts and applications.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="icon-circle-wrapper">
              <span className="step-icon">🛂</span>
              <div className="step-number-badge">4</div>
            </div>
            <div className="step-content-box">
              <h4>Visa Process</h4>
              <p>Complete visa guidance and interview preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}