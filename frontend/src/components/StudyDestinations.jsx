import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './StudyDestinations.css';

import AusImg from '../assets/studydestination/austraila.jpg';
import Canada from '../assets/studydestination/canada.jpg';
import Dubai from '../assets/studydestination/dubai.jpg';
import Germany from '../assets/studydestination/germany.jpg';
import Japan from '../assets/studydestination/japan.jpg';
import Newszeland from '../assets/studydestination/newszeland.png';
import Uk from '../assets/studydestination/ukdest.jpg';
import Italy from '../assets/studydestination/italy.jpg';

// Study destinations data
const destinations = [
  { 
    id: 1, 
    name: 'Italy', 
    path: '/ItalyDestination', 
    image: Italy 
  },

  { 
    id: 2, 
    name: 'Australia', 
    path: '/AustraliaDestination', 
    image: AusImg 
  },
  { 
    id: 3, 
    name: 'Canada', 
    path: '/CanadaDestination', 
    image: Canada 
  },

  { 
    id: 4, 
    name: 'UK', 
    path: '/UKDestination', 
    image: Uk 
  },

  { 
    id: 5, 
    name: 'Germany', 
    path: '/GermanyDestination', 
    image: Germany 
  },

  { 
    id: 6, 
    name: 'New Zealand', 
    path: '/NZDestination', 
    image: Newszeland 
  },

  { 
    id: 7, 
    name: 'Dubai', 
    path: '/DubaiDestination', 
    image: Dubai 
  },

  { 
    id: 8, 
    name: 'Japan', 
    path: '/JapanDestination', 
    image: Japan 
  }
];

// University Partners data
const universities = [
  { 
    main: "University of West London", 
    logo: "/logos/uwl.jpg", 
    website: "https://www.uwl.ac.uk" 
  },

  { 
    main: "ETH Zurich", 
    logo: "/logos/OlP.jpg", 
    website: "https://ethz.ch" 
  },

  { 
    main: "Technical University of Munich", 
    logo: "/logos/Tum.jpg", 
    website: "https://www.tum.de" 
  },

  { 
    main: "Delft University of Technology", 
    logo: "/logos/Tud.jpg", 
    website: "https://www.tudelft.nl" 
  },

  { 
    main: "University of Bologna", 
    logo: "/logos/bologna.jpg", 
    website: "https://www.unibo.it"
   },

  { 
    main: "PSL University", 
    logo: "/logos/psl.jpg", 
    website: "https://psl.eu" 
  },

  { 
    main: "University of British Columbia", 
    logo: "/logos/ubc.jpg", 
    website: "https://www.ubc.ca" 
  },

  {
     main: "University of Waterloo", 
     logo: "/logos/waterloo.jpg", 
     website: "https://uwaterloo.ca" 
    },

  { 
    main: "McGill University", 
    logo: "/logos/mcgill.jpg", 
    website: "https://www.mcgill.ca" 
  },

  { 
    main: "University of Melbourne", 
    logo: "/logos/mlb.jpg", 
    website: "https://www.unimelb.edu.au" 
  },

  { 
    main: "Australian National University", 
    logo: "/logos/Anu.jpg", 
    website: "https://www.anu.edu.au" 
  },

  {  
    main: "University of Sydney", 
    logo: "/logos/sydney.png", 
    website: "https://www.sydney.edu.au" 
  },

  { 
    main: "Monash University", 
    logo: "/logos/monas.png", 
    website: "https://www.monash.edu" 
  },

  { 
    main: "Coventry University", 
    logo: "/logos/coventry.jpeg", 
    website: "https://www.coventry.ac.uk/" 
  }
];

// Work destinations data
const workDestinations = [
  { 
    id: 1, 
    name: 'Dubai', 
    image: Dubai 
  },

  { 
    id: 2, 
    name: 'Canada', 
    image: Canada 
  },

  { 
    id: 3, 
    name: 'Germany', 
    image: Germany 
  },

  { 
    id: 4, 
    name: 'Italy', 
    image: Italy 
  },

  { 
    id: 5, 
    name: 'New Zealand', 
    image: Newszeland 
  },

  { 
    id: 6, 
    name: 'Australia', 
    image: AusImg 
  },

  { 
    id: 7, 
    name: 'UK', 
    image: Uk 
  }
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
        </p>
        <p>
          Over the years, we have built a strong reputation for providing honest advice, professional services, and end-to-end support to students who want to pursue higher education abroad. We help students identify the right career pathways based on their academic profile, interests, budget, and future goals.
        </p>
        <p>
          Our team remains updated with the latest university requirements, scholarship programs, visa regulations, and global education trends to ensure students receive accurate and up-to-date guidance.
        </p>
      </section>

      {/* --- 1. STUDY DESTINATION SLIDER --- */}
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                    <span className="read-more-text">Read More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. UNIVERSITY PARTNERS INFINITE AUTO-SCROLLER --- */}
      <section className="university-partners-section">
        <div className="section-title-center">
          <h3>
            University <span className="purple-highlight italic-bold">Partners</span>
          </h3>
        </div>

        <div className="slider-wrapper">
          <div className="slider-track">
            {/* First Loop */}
            {universities.map((uni, idx) => (
              <a
                key={`first-${idx}`}
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-card"
              >
                <div className="logo-image-wrapper">
                  <img src={uni.logo} alt={uni.main} className="university-logo" />
                </div>
              </a>
            ))}
            {/* Second Loop (For seamless infinite transition) */}
            {universities.map((uni, idx) => (
              <a
                key={`second-${idx}`}
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-card"
              >
                <div className="logo-image-wrapper">
                  <img src={uni.logo} alt={uni.main} className="university-logo" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <Link to="/universitypartner">
          <div className="center-btn-wrapper">
            <button className="btn-secondary">View All</button>
          </div>
        </Link>
      </section>

      {/* --- 3. WORK DESTINATION SLIDER --- */}
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