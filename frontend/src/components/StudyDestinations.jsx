import React, { useState, useEffect } from 'react';
import './StudyDestinations.css';

const destinations = [
  { id: 1, name: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Canada', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'UK', image: 'https://images.pexels.com/photos/28245665/pexels-photo-28245665.jpeg' },
  { id: 5, name: 'Germany', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600&auto=format&fit=crop' },
  { id: 7, name: 'Ireland', image: 'https://images.pexels.com/photos/29819760/pexels-photo-29819760.jpeg' },
  { id: 8, name: 'Singapore', image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop' },
  { id: 9, name: 'Dubai', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop' },
  { id: 10, name: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop' }
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