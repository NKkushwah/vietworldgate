import React from "react";
import "./Infrastructure.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/vietworldgate1.png";

const Infrastructure = () => {
  const facilities = [
    {
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      title: "Student Counseling Center",
      desc: "Dedicated counseling cabins where our experts guide students in choosing the right country, course, and university.",
    },
    {
      img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      title: "Visa Documentation Support",
      desc: "Specialized team and workspace for preparing strong visa files, SOPs, and documentation with high approval success.",
    },
    {
      img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      title: "University Selection Zone",
      desc: "Access to updated university databases, brochures, and global admission resources to help students choose wisely.",
    },
    {
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      title: "IELTS & Interview Training Rooms",
      desc: "Smart classrooms for IELTS preparation, mock interviews, and confidence-building sessions for visa success.",
    },
    {
      img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      title: "Seminar & Guidance Hall",
      desc: "We regularly host seminars and sessions to guide students about study abroad opportunities and visa processes.",
    },
    {
      img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
      title: "Digital Processing System",
      desc: "Fast and secure digital systems to manage applications, track progress, and ensure smooth processing of student visas.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="infra-hero">
        <div className="hero-overlay"></div>

        <div className="hero-container-box">

          {/* Left Side */}
          <div className="hero-text-wrapper">
            
            <div className="hero-heading-inline">
              <div className="hero-badge-inline">
                <img src={logo} alt="VietWorldGate Logo" />
              </div>
              <h1>
                VIET-WORLDGATE <span>Infrastructure</span>
              </h1>
            </div>

            <p>
              Our infrastructure is designed to support students at every step 
              of their study abroad journey — from career counseling to visa approval.
            </p>
          </div>

          {/* Right Side Stats */}
          <div className="hero-stats-side">
            <div className="stat-item">
              <h3>99%</h3>
              <p>Visa Success</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Universities</p>
            </div>
            <div className="stat-item">
              <h3>10k+</h3>
              <p>Students Guided</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== FACILITIES SECTION ===== */}
      <section className="infra-section">
        <div className="section-header">
          <span>Our Facilities</span>
          <h2>Everything You Need for Study Abroad</h2>
        </div>

        <div className="infra-grid">
          {facilities.map((item, index) => (
            <div className="infra-card" key={index}>
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Infrastructure;