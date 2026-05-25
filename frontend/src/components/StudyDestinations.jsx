import React, { useState, useEffect } from 'react';
import './StudyDestinations.css';

const destinations = [
  { id: 1, name: 'Italy', image: "data:image/jpeg;base64,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" },
  { id: 2, name: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Canada', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'UK', image: 'https://images.pexels.com/photos/28245665/pexels-photo-28245665.jpeg' },
  { id: 5, name: 'Germany', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600&auto=format&fit=crop' },
];

// Naya data array Work Destinations ke liye
const workDestinations = [
  { 
    id: 1, 
    name: 'Dubai', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Cyprus', 
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Germany', 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    name: 'Russia', 
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'England', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    name: 'Australia', 
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 7, 
    name: 'Romania', 
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop' 
  },
];

export default function StudyDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0); // Naya state work slider ke liye
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Dynamic screen sizing check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setItemsPerSlide(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = destinations.length - itemsPerSlide;
  const maxWorkIndex = workDestinations.length - itemsPerSlide;

  // Study Slider Auto-sliding Effect
  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 3000);
    return () => clearInterval(autoSlideTimer);
  }, [maxIndex]);

  // Work Slider Auto-sliding Effect (Naya loop)
  useEffect(() => {
    const autoWorkSlideTimer = setInterval(() => {
      setCurrentWorkIndex((prevIndex) => (prevIndex < maxWorkIndex ? prevIndex + 1 : 0));
    }, 3500); // Thoda sa different time taaki dono ek sath na bhaagen
    return () => clearInterval(autoWorkSlideTimer);
  }, [maxWorkIndex]);

  // Math translation handler
  const getTranslateX = (index) => {
    if (window.innerWidth <= 650) {
      return index * 100;
    } else if (window.innerWidth <= 1024) {
      return index * 50;
    }
    return index * (33.333 + 1.5);
  };

  return (
    <div className="study-container">
      {/* Header Info Banner Section */}
      <section className="who-we-are">
        <h2>Who <span>We Are</span></h2>
        <p>
        We are a passionate team of education consultants, career advisors, visa experts, and support professionals who believe in transforming ambitions into achievements. Our company was founded with the vision of simplifying the overseas education process and making international opportunities accessible to students from all backgrounds.

      Over the years, we have built a strong reputation for providing honest advice, professional services, and end-to-end support to students who want to pursue higher education abroad. We help students identify the right career pathways based on their academic profile, interests, budget, and future goals.

      Our team remains updated with the latest university requirements, scholarship programs, visa regulations, and global education trends to ensure students receive accurate and up-to-date guidance.
        </p>
      </section>

      {/* Study Slider Section */}
      <section className="destination-slider-section">
        <h2 className="section-title">Choose your <span>Study Destination</span></h2>
        <p className="section-subtitle">
          As a leading study abroad consultant in India, we help you explore a wide range of destinations.
        </p>

        <div className="slider-view-window">
          <div 
            className="card-track" 
            style={{ transform: `translateX(-${getTranslateX(currentIndex)}%)` }} 
          >
            {destinations.map((dest) => (
              <div className="destination-card" key={dest.id}>
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.name} />
                </div>
                <div className="card-content">
                  <h3>{dest.name}</h3>
                  <div className="read-more-wrapper">
                    <span className="arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                    <span className="read-more-text">Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Slider Section (Naya Section jo aapne manga tha) */}
      <section className="destination-slider-section work-slider-section">
        <h2 className="section-title">Choose your <span>Work Destination</span></h2>
        <p className="section-subtitle">
          Expand your career horizons with incredible global work opportunities in top countries.
        </p>

        <div className="slider-view-window">
          <div 
            className="card-track" 
            style={{ transform: `translateX(-${getTranslateX(currentWorkIndex)}%)` }} 
          >
            {workDestinations.map((dest) => (
              <div className="destination-card" key={dest.id}>
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.name} />
                </div>
                <div className="card-content">
                  <h3>{dest.name}</h3>
                  <div className="read-more-wrapper">
                    <span className="arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                    <span className="read-more-text">Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}