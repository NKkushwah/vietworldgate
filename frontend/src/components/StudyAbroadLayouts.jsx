import React, { useState, useEffect, useRef } from "react";
import "./StudyAbroadLayouts.css";

export default function StudyAbroadLayouts() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Ref to hold the auto-play timer instance
  const autoPlayRef = useRef(null);

  // =========================
  // TESTIMONIALS
  // =========================
  const testimonials = [
    {
      id: 1,
      name: "Amakanch Prashant Dhanek",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      name: "Celebrating the visa grant",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 3,
      name: "Jagriti Prakash",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
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
      branch: "VIEC-Amritsar (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      title: "JCU Singapore",
      date: "19th May 2026, 1:00 PM",
      speaker: "Mr. Tanuj Soni",
      branch: "VIEC-Bhutan (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      title: "Edith Cowan University",
      date: "19th May 2026, 10:00 AM to 12:00 PM",
      speaker: "Ms. Neelam Jain",
      branch: "VIEC-Kochi (Office)",
      type: "University Visits",
      img: "https://tse2.mm.bing.net/th/id/OIP.Vd3ZsTLfGsC0TpYGHqsTcAHaE8?pid=Api&h=220&P=0",
    },
    {
      id: 4,
      title: "Swinburne University",
      date: "20th May 2026, 11:30 AM to 12:30 PM",
      speaker: "Mrs. Prachi Hajela",
      branch: "VIEC-Mumbai, Andheri (Office)",
      type: "University Visits",
      img: "https://www.buildingengineering.com.au/wp-content/uploads/2023/02/Bldg-Eng-University-of-Melbourne-International-House-01-1536x1028.jpg",
    },
    {
      id: 5,
      title: "CQUniversity Australia",
      date: "26th May 2026, 10:00 AM to 11:30 AM",
      speaker: "Ms. Shobhagya Sharma",
      branch: "VIEC-Sri Lanka, Colombo (Office)",
      type: "University Visits",
      img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=1200",
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

  // Helper logic to find maximum sliding threshold depending on screen width
  const getVisibleCardsCount = () => {
    if (window.innerWidth < 768) return 1; 
    if (window.innerWidth < 1024) return 2;
    return 3; 
  };

  // =========================
  // NEXT SLIDE
  // =========================
  const nextSlide = () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = universityVisits.length - visibleCards;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // =========================
  // PREVIOUS SLIDE
  // =========================
  const prevSlide = () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = universityVisits.length - visibleCards;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Start the auto-sliding timer (Interval runs every 3000ms / 3s)
  const startAutoPlay = () => {
    stopAutoPlay(); // Prevent stacking duplicate intervals
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  // =========================
  // STOP AUTOPLAY
  // =========================
  const stopAutoPlay = () => {

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Initialize auto-play when the component mounts, and clean up when it unmounts
  useEffect(() => {

    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]); // Depend on currentIndex to ensure calculation uses active boundaries

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

            <div key={item.id} className="testimonial-card">

              <div className="video-thumbnail-box">

                <div className="circular-video-frame">

                  <img src={item.img} alt={item.name} />

                  <div className="play-btn-overlay">
                    ▶
                  </div>

                </div>

              </div>

              <h4 className="student-name">
                {item.name}
              </h4>

            </div>

          ))}

        </div>

      </section>


      {/* SECTION 2: UPCOMING UNIVERSITY VISITS (AUTO-SLIDER) */}
      <section className="university-visits-section">

        <h2 className="section-title-dark">
          Upcoming <span>University Visits</span>
        </h2>

        {/* Added onMouseEnter to pause sliding when viewing a card 
          Added onMouseLeave to resume sliding when mouse exits the section
        */}
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

                <div
                  key={visit.id}
                  className="visit-card-wrapper"
                >

                  <div className="visit-card">

                    <div className="visit-img-banner">

                      <img
                        src={visit.img}
                        alt={visit.title}
                      />

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
                        <span className="arrow-circle-visit">
                          ➔
                        </span>
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <button
            className="slider-arrow-btn right-arrow"
            onClick={nextSlide}
          >
            &#10095;
          </button>

        </div>

      </section>


      {/* SECTION 3: HOW IT WORKS TIMELINE */}
      <section className="how-it-works-section">

        <h2 className="section-title-light">
          How It Works -
          <span> Your Journey Simplified</span>
        </h2>

        <div className="timeline-container">

          <div className="timeline-step">

            <div className="icon-circle-wrapper">
              <span className="step-icon">💼</span>
              <div className="step-number-badge">1</div>
            </div>

            <div className="step-content-box">
              <h4>Initial Counselling</h4>

              <p>
                Book a free consultation with one of our
                expert advisors.
              </p>
            </div>

          </div>

          <div className="timeline-step">

            <div className="icon-circle-wrapper">
              <span className="step-icon">📋</span>
              <div className="step-number-badge">2</div>
            </div>

            <div className="step-content-box">
              <h4>Planning & Shortlisting</h4>

              <p>
                We help you shortlist universities and
                courses.
              </p>
            </div>

          </div>

          <div className="timeline-step active">

            <div className="icon-circle-wrapper">
              <span className="step-icon">📝</span>
              <div className="step-number-badge">3</div>
            </div>

            <div className="step-content-box">
              <h4>Application & Documentation</h4>

              <p>
                We assist with SOPs, transcripts and
                applications.
              </p>
            </div>

          </div>

          <div className="timeline-step">

            <div className="icon-circle-wrapper">
              <span className="step-icon">🛂</span>
              <div className="step-number-badge">4</div>
            </div>

            <div className="step-content-box">
              <h4>Visa Process</h4>

              <p>
                Complete visa guidance and interview
                preparation.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}