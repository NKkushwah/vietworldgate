import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './StudyDestinations.css';

// Study destinaton
const destinations = [
  { 
    id: 1, 
    name: 'Italy',
    path: '/ItalyDestination', 
    image: "https://images.pexels.com/photos/13849371/pexels-photo-13849371.jpeg" 
    
  },

  { 
    id: 2,
     name: 'Australia',
     path: '/AustraliaDestination', 
     image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop' 
    },

  { 
    id: 3,
     name: 'Canada',
     path: '/CanadaDestination', 
     image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=600&auto=format&fit=crop' 
    },

  { 
    id: 4, 
    path: '/UKDestination',
    name: 'UK', 
    image: 'https://images.pexels.com/photos/28245665/pexels-photo-28245665.jpeg' 
  },

  { 
    id: 5,
    path: '/GermanyDestination', 
    name: 'Germany', 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop'
   },

  { 
    id: 6, 
    path: '/NZDestination',
    name: 'New Zealand', 
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600&auto=format&fit=crop' 
  },
   { 
    id: 7, 
    path:'/DubaiDestination',
    name: 'Dubai', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop' 
  },

  {
    id: 8,
    path: '/JapanDestination',
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop'
  }
];

// work destination
const workDestinations = [
  { 
    id: 1, 
    name: 'Dubai', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Canada', 
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Germany', 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    name: 'Italy', 
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'New Zealand', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    name: 'Australia', 
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 7, 
    name: 'UK', 
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop' 
  },
  
];

export default function StudyDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0); 
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

  // Work Slider Auto-sliding Effect 
  useEffect(() => {
    const autoWorkSlideTimer = setInterval(() => {
      setCurrentWorkIndex((prevIndex) => (prevIndex < maxWorkIndex ? prevIndex + 1 : 0));
    }, 3500); 
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

      Study Slider Section
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

      <Link to={dest.path} className="read-more-wrapper">
        <span className="arrow-circle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>

        <span className="read-more-text">
          Read More
        </span>
      </Link>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

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