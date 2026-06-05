import React from "react";
import {
  GraduationCap,
  Gift,
  FileText,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";

import "./StudyAbroad.css";
import { Link } from "react-router-dom";

export default function StudyAbroad() {
  const universities = [
    {
      main: "University of West London",
      logo: "/logos/uwl.jpg",
      website: "https://www.uwl.ac.uk",
    },
    {
      main: "ETH Zurich",
      logo: "/logos/OlP.jpg",
      website: "https://ethz.ch",
    },
    {
      main: "Technical University of Munich",
      logo: "/logos/Tum.jpg",
      website: "https://www.tum.de",
    },
    {
      main: "Delft University of Technology",
      logo: "/logos/Tud.jpg ",
      website: "https://www.tudelft.nl",
    },
    {
      main: "University of Bologna",
      logo: "/logos/bologna.jpg",
      website: "https://www.unibo.it",
    },
    {
      main: "PSL University",
      logo: "/logos/psl.jpg",
      website: "https://psl.eu",
    },
    {
      main: "University of British Columbia",
      logo: "/logos/ubc.jpg",
      website: "https://www.ubc.ca",
    },
    {
      main: "University of Waterloo",
      logo: "/logos/waterloo.jpg",
      website: "https://uwaterloo.ca",
    },
    {
      main: "McGill University",
      logo: "/logos/mcgill.jpg",
      website: "https://www.mcgill.ca",
    },
    {
      main: "University of Melbourne",
      logo: "/logos/mlb.jpg",
      website: "https://www.unimelb.edu.au",
    },
    {
      main: "Australian National University",
      logo: "/logos/Anu.jpg",
      website: "https://www.anu.edu.au",
    },
    {
      main: "University of Sydney",
      logo: "/logos/sydney.png",
      website: "https://www.sydney.edu.au",
    },
    {
      main: "Monash University",
      logo: "/logos/monas.png",
      website: "https://www.monash.edu",
    },
    {
      main: "Coventry University",
      logo: "/logos/coventry.jpeg",
      website: "https://www.coventry.ac.uk/",
    },
  ];

  const routes = [
    { 
      title: "University", 
      icon: <GraduationCap className="route-icon" />,
      path:"/universitypartner",
    },

    { 
      title: "Scholarships", 
      icon: <Gift className="route-icon" />, 
      path: "/Scholarships", 
    },

    { 
      title: "Post Study Work Permit", 
      icon: <FileText className="route-icon" />,
      path:"#",
    },

    { 
      title: "Upcoming Events", 
      icon: <Calendar className="route-icon" />,
      path:"#",
     },

    { 
      title: "Course Finder",
      icon: <BookOpen className="route-icon" />,
      path:"/CoursePortal",
    },

    { 
      title: "Students Feedback", 
      icon: <Users className="route-icon" />,
      path:"/feedback",
    },
      
  ];

  return (
    <div className="study-abroad-container">
      {/* Banner Section */}
      <section className="max-width-wrapper">
        <div className="banner-card">
          <div className="banner-image-side">
            <GraduationCap className="banner-lucide-icon" />
          </div>

          <div className="banner-text-side">
            <h2>
              Aspiring to Study Abroad?{" "}
              <span className="purple-highlight">We Can Help!</span>
            </h2>
            <p>Contact us today and our experts will be in touch with you soon.</p>
            <button className="btn-primary">Study Abroad?</button>
          </div>
        </div>

        {/* University Partners Title */}
        <div className="section-title-center">
          <h3>
            University <span className="purple-highlight italic-bold">Partners</span>
          </h3>
        </div>

        {/* --- INFINITE AUTO-SCROLLER --- */}
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
            {/* Second Loop (For seamless transition) */}
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

        <Link to="/universitypartner">
          <div className="center-btn-wrapper">
            <button className="btn-secondary">View All</button>
          </div>
        </Link>
      </section>

      {/* Routes Section */}
      <section className="dark-bg-section">
        <div className="max-width-wrapper">
          <h2 className="dark-section-title">
            Discover your route to{" "}
            <span className="lime-highlight italic-bold">International Education</span>
          </h2>

          <div className="routes-grid">
            {routes.map((route, idx) => (
              <Link
                key={idx}
                to={route.path}
                className="route-link"
              >
                <div className="route-card">
                  <div className="icon-box">{route.icon}</div>
                  <span className="route-card-title">{route.title}</span>
                  <div className="corner-cut"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}