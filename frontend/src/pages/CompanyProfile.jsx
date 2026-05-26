import React, { useState } from 'react';
import './CompanyProfile.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState('Overview');

const sidebarItems = [
  { name: 'Overview', icon: '📋', link: '/about/overview' },
  { name: 'Our History', icon: '🕒', link: '/about/history' },
  { name: 'Vision & Mission', icon: '👁️', link: '/MissionVision' },
  { name: 'Our Values', icon: '💎', link: '/ValuesGrid' },
  { name: 'Why Choose Us', icon: '👍', link: '/about/why-choose-us' },
  { name: 'Our Achievements', icon: '🏆', link: '/about/achievements' },
  { name: 'Our Team', icon: '👥', link: '/ourteam' },
  { name: 'Our Infrastructure', icon: '🏢', link: '/about/infrastructure' },
  { name: 'Accreditations', icon: '🏅', link: '/about/accreditations' },
  { name: 'Our Presence', icon: '🌐', link: '/about/presence' },
  { name: 'Social Responsibility', icon: '❤️', link: '/about/social-responsibility' },
  { name: 'Gallery', icon: '🖼️', link: '/about/gallery' }
];

  const stats = [
    { number: '6+', label: 'Years of Excellence', icon: '🎓' },
    { number: '2600+', label: 'Students Guided', icon: '👥' },
    { number: '200+', label: 'Professional Courses', icon: '📄' },
    { number: '2', label: 'Countries Tie-ups', icon: '🌐' }
  ];

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="profile-container">

        {/* 1. Header Banner */}
        <header className="hero-banner">
          <div className="hero-content">
            <h1>Company Profile</h1>
            <p className="breadcrumbs">
              Home &gt; Company Profile
            </p>
          </div>

          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Innovative Institute Building"
              className="hero-building-img"
            />
          </div>
        </header>

        {/* Main Layout Workspace */}
        <div className="main-layout">

       {/* 2. Left Side Menu Navigation */}
<aside className="sidebar-nav">
  <ul>
    {sidebarItems.map((item) => (
      <a 
        href={item.link} 
        key={item.name} 
        className="sidebar-link-anchor"
        style={{ textDecoration: 'none', color: 'inherit' }} // CSS रीसेट के लिए inline-style
      >
        <li
          className={activeTab === item.name ? 'active' : ''}
          onClick={() => setActiveTab(item.name)}
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
        </li>
      </a>
    ))}
  </ul>
</aside>

          {/* Right Side Content Grid Area */}
          <main className="content-area">

            {/* Top Section: Overview Card & Stats Panels */}
            <div className="top-grid">

              <section className="overview-main-card">
                <div className="card-header-icon">
                  📋
                </div>

                <h2>Overview</h2>

                <p>
                  Innovative Institute is a leading educational
                  organization committed to providing quality
                  education and career guidance to students.
                  Since our inception, we have empowered
                  thousands of students to achieve their dreams
                  and build successful careers.
                </p>

                <button className="know-more-btn">
                  Know More &rarr;
                </button>
              </section>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">

                    <div className="stat-icon">
                      {stat.icon}
                    </div>

                    <h3>{stat.number}</h3>

                    <p>{stat.label}</p>

                  </div>
                ))}
              </div>
            </div>

            {/* Middle Section */}
            <div className="middle-grid">

              <div className="mission-vision-wrapper">

                <div className="inner-info-card">
                  <div className="info-icon green-bg">
                    🎯
                  </div>

                  <div>
                    <h4>Our Mission</h4>

                    <p>
                      To deliver world-class education and
                      training that empowers students to
                      achieve academic excellence and
                      professional success.
                    </p>
                  </div>
                </div>

                <div className="inner-info-card">
                  <div className="info-icon green-bg">
                    👁️
                  </div>

                  <div>
                    <h4>Our Vision</h4>

                    <p>
                      To be a global leader in education and
                      career development, recognized for
                      innovation, integrity, and impactful
                      learning.
                    </p>
                  </div>
                </div>
              </div>

              <section className="values-card">

                <div className="values-header">
                  <span className="value-icon-main">
                    💎
                  </span>

                  <h4>Our Values</h4>
                </div>

                <ul>
                  <li>✔️ Integrity & Transparency</li>
                  <li>✔️ Excellence in Education</li>
                  <li>✔️ Student-Centric Approach</li>
                  <li>✔️ Innovation & Continuous Improvement</li>
                  <li>✔️ Respect & Collaboration</li>
                </ul>

              </section>

              <blockquote className="quote-box">

                <span className="quote-mark">
                  “
                </span>

                <p>
                  Our commitment is to build a brighter future
                  for every student through quality education,
                  strong values, and global opportunities.
                </p>

                <div className="quote-bg-icon">
                  🏢
                </div>

              </blockquote>
            </div>

            {/* Bottom Section */}
            <div className="bottom-grid">

              <section className="offers-section">

                <h3>What We Offer</h3>

                <div className="offers-row">

                  <div className="offer-item">
                    <div className="offer-icon purple-light">
                      💡
                    </div>

                    <div>
                      <h5>Career Guidance</h5>

                      <p>
                        Expert counseling for the right career path.
                      </p>
                    </div>
                  </div>

                  <div className="offer-item">
                    <div className="offer-icon purple-light">
                      ⚙️
                    </div>

                    <div>
                      <h5>Skill Development</h5>

                      <p>
                        Industry-oriented training and workshops.
                      </p>
                    </div>
                  </div>

                  <div className="offer-item">
                    <div className="offer-icon purple-light">
                      🌐
                    </div>

                    <div>
                      <h5>Global Exposure</h5>

                      <p>
                        International partnerships and study abroad support.
                      </p>
                    </div>
                  </div>

                  <div className="offer-item">
                    <div className="offer-icon purple-light">
                      💼
                    </div>

                    <div>
                      <h5>Placement Support</h5>

                      <p>
                        Assistance for better career opportunities.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              <div className="get-in-touch-card">

                <h4>Get in Touch</h4>

                <p>
                  Have questions or need more information?
                  We are here to help you!
                </p>

                <button className="contact-btn">
                  Contact Us &rarr;
                </button>

                <div className="headphone-bg-icon">
                  🎧
                </div>

              </div>
            </div>

          </main>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}