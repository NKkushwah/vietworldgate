import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Gift,
  FileText,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";
import "./StudyAbroad.css";

export default function StudyAbroad() {
  const routes = [
    { 
      title: "University", 
      icon: <GraduationCap className="route-icon" />,
      path: "/universitypartner",
      isExternal: false
    },
    { 
      title: "Scholarships", 
      icon: <Gift className="route-icon" />, 
      path: "/Scholarships", 
      isExternal: false
    },
    { 
      title: "Post Study Work Permit", 
      icon: <FileText className="route-icon" />,
      path: "#",
      isExternal: false
    },
    { 
      title: "Book Your Appointment", 
      icon: <Calendar className="route-icon" />,
      path: "https://docs.google.com/forms/d/e/1FAIpQLSefWVUVnbBT3GSCLjJM9bKP7hymqVhPTHbixEvbltPcJtVbMA/viewform?usp=publish-editor",
      isExternal: true
    },
    { 
      title: "Course Finder",
      icon: <BookOpen className="route-icon" />,
      path: "/CoursePortal",
      isExternal: false
    },
    { 
      title: "Students Feedback", 
      icon: <Users className="route-icon" />,
      path: "/feedback",
      isExternal: false
    },
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSefWVUVnbBT3GSCLjJM9bKP7hymqVhPTHbixEvbltPcJtVbMA/viewform?usp=publish-editor";

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
            
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Study Abroad?</button>
            </a>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="dark-bg-section">
        <div className="max-width-wrapper">
          <h2 className="dark-section-title">
            Discover your route to{" "}
            <span className="lime-highlight italic-bold">International Education</span>
          </h2> 

          <div className="routes-grid">
            {routes.map((route, idx) => {
              const cardContent = (
                <div className="route-card">
                  <div className="icon-box">{route.icon}</div>
                  <span className="route-card-title">{route.title}</span>
                  <div className="corner-cut"></div>
                </div>
              );

              if (route.isExternal) {
                return (
                  <a
                    key={idx}
                    href={route.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="route-link"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link
                  key={idx}
                  to={route.path}
                  className="route-link"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}