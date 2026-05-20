import React from 'react';
import { GraduationCap, Gift, FileText, Calendar, BookOpen, Users, ArrowUp } from 'lucide-react';
import './StudyAbroad.css';

export default function StudyAbroad() {
  
  // Custom Rendered Logos data to avoid broken images issues
 const universities = [
  {
    main: "Charles Darwin",
    sub: "University Australia",
    iconColor: "#1A365D",
    isDarkBg: false
  },
  {
    main: "Charles Sturt",
    sub: "University",
    iconColor: "#DD6B20",
    isDarkBg: false
  },
  {
    main: "CQ University",
    sub: "Australia",
    iconColor: "#2B6CB0",
    isDarkBg: false
  },
  {
    main: "Curtin University",
    sub: "",
    iconColor: "#D69E2E",
    isDarkBg: true
  },
  {
    main: "Deakin",
    sub: "University",
    iconColor: "#2D3748",
    isDarkBg: false
  },

  // 🔥 NEW UNIVERSITIES
  {
    main: "University of Melbourne",
    sub: "Australia",
    iconColor: "#003A8F",
    isDarkBg: false
  },
  {
    main: "Monash",
    sub: "University",
    iconColor: "#0055A4",
    isDarkBg: false
  },
  {
    main: "University of Sydney",
    sub: "",
    iconColor: "#B22222",
    isDarkBg: false
  },
  {
    main: "RMIT",
    sub: "University",
    iconColor: "#E60028",
    isDarkBg: false
  },
  {
    main: "University of Queensland",
    sub: "",
    iconColor: "#51247A",
    isDarkBg: false
  }
];

  const routes = [
    { title: 'University Visits', icon: <GraduationCap size={26} color="#7D0068" /> },
    { title: 'Scholarships', icon: <Gift size={26} color="#7D0068" /> },
    { title: 'Post Study Work Permit', icon: <FileText size={26} color="#7D0068" /> },
    { title: 'Upcoming Events', icon: <Calendar size={26} color="#7D0068" /> },
    { title: 'Course Finder', icon: <BookOpen size={26} color="#7D0068" /> },
    { title: 'Students Feedback', icon: <Users size={26} color="#7D0068" /> },
  ];

  return (
    <div className="study-abroad-container">
      
      {/* ==========================================
          SECTION 1: Banner & University Partners 
         ========================================== */}
      <section className="max-width-wrapper">
        
        {/* Main Banner Card */}
        <div className="banner-card">
          {/* Left Side: Mock Image Graphics */}
          <div className="banner-image-side">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#7D0068" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
            </svg>
          </div>
          
          {/* Right Side: Information Content */}
          <div className="banner-text-side">
            <h2>
              Aspiring to Study Abroad? <span className="purple-highlight">We Can Help!</span>
            </h2>
            <p>
              Contact us today and our experts will be in touch with you soon.
            </p>
            <button className="btn-primary">
              Study Abroad?
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="section-title-center">
          <h3>
            University <span className="purple-highlight italic-bold">Partners</span>
          </h3>
        </div>

        {/* University Logos Grid with Custom Layout and Hover Effects */}
        <div className="partners-grid">
          {universities.map((uni, idx) => (
            <div 
              key={idx} 
              className="logo-card"
              style={{ backgroundColor: uni.isDarkBg ? '#111111' : '' }}
            >
              <div className="uni-logo-flex">
                {/* Dynamic SVG Icon Badge */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill={uni.iconColor}>
                  <rect width="24" height="24" rx="4" opacity="0.15" />
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke={uni.iconColor} strokeWidth="1.5" fill="none" />
                </svg>
                
                {/* University Name Labels */}
                <div className="uni-text-box">
                  <span 
                    className="uni-main-title"
                    style={{ color: uni.isDarkBg ? '#FFFFFF' : '#1A202C' }}
                  >
                    {uni.main}
                  </span>
                  {uni.sub && (
                    <span 
                      className="uni-sub-title"
                      style={{ color: uni.isDarkBg ? '#A0AEC0' : '#718096' }}
                    >
                      {uni.sub}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Section Action Trigger */}
        <div className="center-btn-wrapper">
          <button className="btn-secondary">
            View All
          </button>
        </div>
      </section>


      {/* ==========================================
          SECTION 2: International Education Routes 
         ========================================== */}
      <section className="dark-bg-section">
        <div className="max-width-wrapper">
          
          <h2 className="dark-section-title">
            Discover your route to <span className="lime-highlight italic-bold">International Education</span>
          </h2>

          <div className="routes-grid">
            {routes.map((route, idx) => (
              <div key={idx} className="route-card">
                <div className="icon-box">
                  {route.icon}
                </div>
                
                <span className="route-card-title">
                  {route.title}
                </span>

                {/* Bottom-Right Purple Cutout Corner */}
                <div className="corner-cut"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Button to Scroll Up */}
      <button className="floating-scroll-btn">
        <ArrowUp size={22} />
      </button>

    </div>
  );
}