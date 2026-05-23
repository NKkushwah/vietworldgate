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

export default function StudyDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Dynamic screen sizing check for perfect mathematical translation
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

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = destinations.length - itemsPerSlide;

  // Smooth auto-sliding effect loop
  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < maxIndex) {
          return prevIndex + 1;
        } else {
          return 0; // Seamless loop back to card one
        }
      });
    }, 3000);

    return () => clearInterval(autoSlideTimer);
  }, [maxIndex]);

  // Pure mathematical response handler for desktop, tablet and mobile transitions
  const getTranslateX = () => {
    if (window.innerWidth <= 650) {
      return currentIndex * 100; // Mobile view 100% steps
    } else if (window.innerWidth <= 1024) {
      return currentIndex * 50; // Tablet view 50% steps
    }
    return currentIndex * (33.333 + 1.5); // Desktop layout math
  };

  return (
    <div className="study-container">
      {/* Header Info Banner Section */}
      <section className="who-we-are">
        <h2>Who <span>We Are</span></h2>
        <p>
         We’re more than just a consultancy — we’re your mentors, advisors, and 
         guide throughout the entire process. Every student is unique, so our 
         counselling is personalized, thoughtful, and tailored to match your dreams, 
         budget, and academic profile. Whether you’re exploring options for undergraduate, postgraduate, 
         or diploma programs, our team makes sure you feel confident and informed at each step.
        </p>
      </section>

      {/* Auto Slider Section */}
      <section className="destination-slider-section">
        <h2 className="section-title">Choose your <span>Study Destination</span></h2>
        <p className="section-subtitle">
          As a leading study abroad consultant in India, we help you explore a wide range of destinations.
        </p>

        <div className="slider-view-window">
          <div 
            className="card-track" 
            style={{ transform: `translateX(-${getTranslateX()}%)` }} 
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
    </div>
  );
}