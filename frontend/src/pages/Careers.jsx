import React, { useState } from 'react';
import './Careers.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  // Mock data specifically for a Global Mobility / Visa Industry company
  const initialJobs = [
    { id: 1, title: 'Senior Visa Case Officer (Canada & Australia)', department: 'Immigration', location: 'Delhi / Hybrid', type: 'Full-time' },
    { id: 2, title: 'Overseas Education Consultant', department: 'Student Visa', location: 'Mumbai Office', type: 'Full-time' },
    { id: 3, title: 'IELTS / PTE Corporate Trainer', department: 'Training & Development', location: 'Remote', type: 'Part-time' },
    { id: 4, title: 'B2B Global Mobility Specialist', department: 'Corporate Work Visa', location: 'Bangalore Office', type: 'Full-time' },
    { id: 5, title: 'Customer Success Executive (Pre-Departure Support)', department: 'Operations', location: 'Pune Office', type: 'Full-time' },
  ];

  const [jobs] = useState(initialJobs);
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = selectedDept === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDept);

  return (
    <>
      <Navbar />
      <div className="careers-container">
        
        {/* 1. Global Hero Section */}
        <header className="careers-hero-global">
          <div className="hero-overlay-global">
            <div className="hero-content-global">
              <span className="hero-badge">🌍 Build a Global Career</span>
              <h1>Shape Futures Across Borders</h1>
              <nav className="breadcrumb">
               
              </nav>
            </div>
          </div>
        </header>

        {/* 2. Welcome Section */}
        <main className="careers-main">
          <h2>Why Build Your Career With Us?</h2>
          <div className="content-wrapper-global">
            <div className="badge-icon-global">🚀</div>
            <p className="careers-description">
              We are a leading Global Mobility firm specializing in **Work Visas, Study Visas, and Permanent Residency PR** programs. Working here means you don't just do a job—you change lives by helping professionals and students transition smoothly into international destinations like <strong>Canada, Australia, the UK, and the USA and more country</strong>. If you are passionate about global immigration laws, career counselling, or international relations, we want you!
            </p>
          </div>
        </main>

        {/* 3. Global Perks & Visa Advantage Section */}
        <section className="visa-perks-section">
          <h3>The Perks of Going Global With Us</h3>
          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon">✈️</div>
              <h4>International Mobility</h4>
              <p>Top performers get opportunities to work at our international partner offices or attend global immigration summits.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon">🎓</div>
              <h4>Visa Expertise & Certifications</h4>
              <p>Get certified by RCIC (Canada) or MARA (Australia) agents. We fund your global immigration compliance training.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon">💼</div>
              <h4>Corporate Visa Sponsorship</h4>
              <p>Yes, we practice what we preach! For internal transfers, we facilitate and sponsor employee work visas for overseas branches.</p>
            </div>
          </div>
        </section>

       

       
       

      </div>
      <Footer />
    </>
  );
};

export default Careers;