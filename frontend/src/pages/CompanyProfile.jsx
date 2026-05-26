import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaClipboardList,
  FaHistory,
  FaEye,
  FaGem,
  FaThumbsUp,
  FaTrophy,
  FaUsers,
  FaBuilding,
  FaAward,
  FaGlobe,
  FaHeart,
  FaImages,
  FaBullseye,
  FaLightbulb,
  FaCogs,
  FaBriefcase,
  FaHeadphones,
} from "react-icons/fa";

import "./CompanyProfile.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CompanyProfile() {

  const [activeTab, setActiveTab] =
    useState("Overview");

  const sidebarItems = [

    {
      name: "Overview",
      icon: <FaClipboardList />,
      link: "/about/overview",
    },

    {
      name: "Our History",
      icon: <FaHistory />,
      link: "/about/history",
    },

    {
      name: "Vision & Mission",
      icon: <FaEye />,
      link: "/about/mission-vision",
    },

    {
      name: "Our Values",
      icon: <FaGem />,
      link: "/about/values",
    },

    {
      name: "Why Choose Us",
      icon: <FaThumbsUp />,
      link: "/about/why-choose-us",
    },

    {
      name: "Our Achievements",
      icon: <FaTrophy />,
      link: "/about/achievements",
    },

    {
      name: "Our Team",
      icon: <FaUsers />,
      link: "/about/our-team",
    },

    {
      name: "Our Infrastructure",
      icon: <FaBuilding />,
      link: "/about/infrastructure",
    },

    {
      name: "Accreditations",
      icon: <FaAward />,
      link: "/about/accreditations",
    },

    {
      name: "Our Presence",
      icon: <FaGlobe />,
      link: "/about/presence",
    },

    {
      name: "Social Responsibility",
      icon: <FaHeart />,
      link: "/about/social-responsibility",
    },

    {
      name: "Gallery",
      icon: <FaImages />,
      link: "/about/gallery",
    },

  ];

  const stats = [

    {
      number: "6+",
      label: "Years of Excellence",
      icon: <FaTrophy />,
    },

    {
      number: "2600+",
      label: "Students Guided",
      icon: <FaUsers />,
    },

    {
      number: "200+",
      label: "Professional Courses",
      icon: <FaClipboardList />,
    },

    {
      number: "2",
      label: "Countries Tie-ups",
      icon: <FaGlobe />,
    },

  ];

  return (
    <>
      <Navbar />

      <div className="profile-container">

        {/* HERO SECTION */}
        <header className="hero-banner">

          <div className="hero-content">

            <h1>
              Company Profile
            </h1>

            <p className="breadcrumbs">
              Home &gt; Company Profile
            </p>

          </div>

          <div className="hero-image-container">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Institute"
              className="hero-building-img"
            />

          </div>

        </header>

        {/* MAIN LAYOUT */}
        <div className="main-layout">

          {/* SIDEBAR */}
          <aside className="sidebar-nav">

            <ul>

              {sidebarItems.map((item) => (

                <li
                  key={item.name}
                  className={
                    activeTab === item.name
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveTab(item.name)
                  }
                >

                  <Link
                    to={item.link}
                    className="sidebar-link-anchor"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                    }}
                  >

                    <span className="menu-icon">
                      {item.icon}
                    </span>

                    <span className="menu-text">
                      {item.name}
                    </span>

                    {activeTab === item.name && (

                      <span className="arrow-indicator">
                        &gt;
                      </span>

                    )}

                  </Link>

                </li>

              ))}

            </ul>

          </aside>

          {/* CONTENT AREA */}
          <main className="content-area">

            {/* TOP SECTION */}
            <div className="top-grid">

              <section className="overview-main-card">

                <div className="card-header-icon">
                  <FaClipboardList />
                </div>

                <h2>
                  Overview
                </h2>

                <p>
                  Innovative Institute is a leading
                  educational organization committed
                  to providing quality education and
                  career guidance to students.
                </p>

                <button className="know-more-btn">
                  Know More →
                </button>

              </section>

              <div className="stats-grid">

                {stats.map((stat, index) => (

                  <div
                    key={index}
                    className="stat-card"
                  >

                    <div className="stat-icon">
                      {stat.icon}
                    </div>

                    <h3>
                      {stat.number}
                    </h3>

                    <p>
                      {stat.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* MIDDLE SECTION */}
            <div className="middle-grid">

              <div className="mission-vision-wrapper">

                <div className="inner-info-card">

                  <div className="info-icon green-bg">
                    <FaBullseye />
                  </div>

                  <div>

                    <h4>
                      Our Mission
                    </h4>

                    <p>
                      To deliver world-class education
                      and training that empowers
                      students.
                    </p>

                  </div>

                </div>

                <div className="inner-info-card">

                  <div className="info-icon green-bg">
                    <FaEye />
                  </div>

                  <div>

                    <h4>
                      Our Vision
                    </h4>

                    <p>
                      To be a global leader in
                      education and career
                      development.
                    </p>

                  </div>

                </div>

              </div>

              {/* VALUES */}
              <section className="values-card">

                <div className="values-header">

                  <span className="value-icon-main">
                    <FaGem />
                  </span>

                  <h4>
                    Our Values
                  </h4>

                </div>

                <ul>
                  <li>✔️ Integrity & Transparency</li>
                  <li>✔️ Excellence in Education</li>
                  <li>✔️ Student-Centric Approach</li>
                  <li>✔️ Innovation & Growth</li>
                  <li>✔️ Respect & Collaboration</li>
                </ul>

              </section>

              {/* QUOTE */}
              <blockquote className="quote-box">

                <span className="quote-mark">
                  “
                </span>

                <p>
                  Our commitment is to build a brighter
                  future for every student through
                  quality education and global
                  opportunities.
                </p>

                <div className="quote-bg-icon">
                  <FaBuilding />
                </div>

              </blockquote>

            </div>

            {/* BOTTOM SECTION */}
            <div className="bottom-grid">

              <section className="offers-section">

                <h3>
                  What We Offer
                </h3>

                <div className="offers-row">

                  <div className="offer-item">

                    <div className="offer-icon purple-light">
                      <FaLightbulb />
                    </div>

                    <div>

                      <h5>
                        Career Guidance
                      </h5>

                      <p>
                        Expert counseling for the
                        right career path.
                      </p>

                    </div>

                  </div>

                  <div className="offer-item">

                    <div className="offer-icon purple-light">
                      <FaCogs />
                    </div>

                    <div>

                      <h5>
                        Skill Development
                      </h5>

                      <p>
                        Industry-oriented training
                        and workshops.
                      </p>

                    </div>

                  </div>

                  <div className="offer-item">

                    <div className="offer-icon purple-light">
                      <FaGlobe />
                    </div>

                    <div>

                      <h5>
                        Global Exposure
                      </h5>

                      <p>
                        International partnerships
                        and study abroad support.
                      </p>

                    </div>

                  </div>

                  <div className="offer-item">

                    <div className="offer-icon purple-light">
                      <FaBriefcase />
                    </div>

                    <div>

                      <h5>
                        Placement Support
                      </h5>

                      <p>
                        Assistance for better career
                        opportunities.
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              {/* CONTACT CARD */}
              <div className="get-in-touch-card">

                <h4>
                  Get in Touch
                </h4>

                <p>
                  Have questions or need more
                  information? We are here to help!
                </p>

                <button className="contact-btn">
                  Contact Us →
                </button>

                <div className="headphone-bg-icon">
                  <FaHeadphones />
                </div>

              </div>

            </div>

          </main>

        </div>
      </div>

      <Footer />
    </>
  );
}