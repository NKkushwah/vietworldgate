import React from 'react';
import './StudyAbroadFeatures.css';

export default function StudyAbroadFeatures() {
  
  // Dummy student image for banner placeholder (You can replace this with your local asset)
  const studentBannerImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";

  const steps = [
    {
      id: 1,
      title: "Study Destination",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Course Selection",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Scholarship Guidance",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      title: "VISA Process",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Support",
      desc: "As a top-rated study abroad consultant in India, we provide end-to-end services — including course advice, university short-listing, application assistance, visa processing, and pre-departure guidance.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Personalized Guidance",
      desc: "We understand that each student's goals, background and budget are unique. Our experts help match you to the right country, university and course perfectly.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "End-to-End Guidance",
      desc: "As a preferred study overseas education consultant in Delhi, India, we offer complete support — from shortlisting universities to preparing your visa file and even pre-departure assistance.",
      img: "https://images.unsplash.com/photo-1521791136366-3e553771295d?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Wide Network & Global Reach",
      desc: "With partnerships with 400+ institutions in 10+ countries, we ensure you get access to the best-fit top universities around the world without hassle.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Local Presence for 'near me' Support",
      desc: "Whether you're in Delhi, Mumbai, Pune or any other city — our branch network means you can easily find a study abroad consultant near me and meet face-to-face with mentors.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Track Record of Success",
      desc: "Over 28 years in the field, thousands of students placed, countless courses offered — we know how to get clear results and help you fulfil your global education dreams.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="features-page-wrapper">
      
      {/* ===================================================
          NEW SECTION: HERO BANNER & FINDER (Screenshots)
         =================================================== */}
      <section className="hero-finder-container">
        <div className="finder-flex-row">
          
          {/* Left Card View */}
          <div className="finder-left-card">
            <div className="finder-img-wrap">
              <img src={studentBannerImg} alt="Student holding books" />
            </div>
            <div className="finder-text-wrap">
              <h2>Find My Dream University</h2>
              <p>Shortlist Universities With Our Course Finder</p>
              <button className="btn-shortlist">Shortlist Universities</button>
            </div>
          </div>

          {/* Right Text & CTA View */}
          <div className="finder-right-content">
            <span className="sub-title">📖 FIND MY DREAM UNIVERSITY</span>
            <h1>Shortlist Universities With Our <br /><span>Course Finder</span></h1>
            
            <div className="course-finder-box">
              <p>Explore our advanced Course Finder to look for the course that is the right fit for you.</p>
              <span className="bg-number">99</span>
            </div>

            <button className="btn-click-here">
              CLICK HERE ➔
            </button>
          </div>

        </div>

        {/* Bottom Banner Component */}
        <div className="location-consultant-banner">
          <h3>Find a <span>Study Abroad Consultant</span> Near Me</h3>
          <p>
            If you're searching for a "study abroad consultant near me", just locate your city branch 
            on our website and book an appointment. Our local presence ensures you get in-person 
            counselling, local support and a trusted partner in your neighbourhood. Whether you're 
            in Delhi, Mumbai, Pune, Hyderabad or any other city, we're right there to help.
          </p>
        </div>
      </section>


      {/* ==========================================
          SECTION 1: Easy Steps to Study Abroad
         ========================================== */}
      <section className="steps-section">
        <div className="section-header-center">
          <span className="sub-tag">VIET WORLDGATE EXPERTISE</span>
          <h2>Easy Steps to <span className="purple-highlight italic-bold">Study Abroad</span></h2>
        </div>

        <div className="steps-row">
          {steps.map((step) => (
            <div key={step.id} className="step-circle-card">
              <div className="circle-animation-wrapper">
                <svg className="animated-ring-svg" viewBox="0 0 100 100">
                  <circle className="bg-ring" cx="50" cy="50" r="47" />
                  <circle className="fill-ring" cx="50" cy="50" r="47" />
                </svg>
                <div className="circle-image-inner">
                  <img src={step.img} alt={step.title} />
                </div>
              </div>
              <h4 className="step-card-title">{step.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 2: Why Choose Us Grid
         ========================================== */}
      <section className="why-choose-section">
        <div className="section-header-center">
          <h2>Why Choose Us as Your <span className="purple-highlight italic-bold">Study Abroad Education</span> Consultant</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-horizontal-card">
              <div className="benefit-img-side">
                <img src={benefit.img} alt={benefit.title} />
              </div>
              <div className="benefit-text-side">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}