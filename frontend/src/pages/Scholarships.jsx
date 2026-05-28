import React, { useState } from 'react';
import './Scholarships.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Mock Data matching the layout and screenshots
const scholarshipData = [
  {
    id: 1,
    institution: "CQUniversity Australia",
    scholarshipName: "International Merit Scholarship",
    value: "15% to 25% of the total course fee",
    deadline: "31-12-2030",
    eligibility: [
      "The International Merit Scholarship is awarded, at the discretion of the University, to international students, undertaking study at CQUniversity Australia.",
      "The International Merit Scholarship is only available to students applying for vocational, research, full degree and packaged academic course.",
      "The International Merit Scholarship is only available to students new to CQUniversity Australia OR to CQUniversity students who have completed a CQUniversity qualification at diploma, undergraduate, postgraduate coursework level and applying to commence another qualification at CQUniversity if they meet the minimum eligibility criteria.",
      "The International Merit Scholarship is not available in conjunction with any other CQUniversity Australia scholarship.",
      "The International Merit Scholarship is not available to any student who has been given entrance to CQUniversity Australia based on work experience."
    ],
    link: "https://delivery-cqucontenthub.stylelabs.cloud/api/public/content/international-merit-scholarship"
  },
  {
    id: 2,
    institution: "Griffith University",
    scholarshipName: "International Student Academic Excellence Scholarship",
    value: "25% of tuition fees",
    deadline: "For year 2025 & 2026 intakes",
    eligibility: [
      "Be a citizen of a country other than Australia or New Zealand.",
      "Have a minimum GPA in previous studies of 5.5 or above on a 7 point scale or equivalent in the most recent recognised qualification.",
      "Satisfy all academic and English language entry requirements for your chosen undergraduate or postgraduate coursework program.",
      "Be a full-time student starting in 2025 or 2026.",
      "Excludes the following programs: Bachelor of Medical Science, Bachelor of Dental Health Science, Doctor of Medicine, Master of Dentistry, Master of Pharmacy, Master of Speech Pathology and Graduate Diploma of Flight Management."
    ],
    link: "https://www.griffith.edu.au/international/scholarships-finance/scholarships/academic-excellence"
  },
  { id: 3, institution: "The University of Western Australia", placeholder: true },
  { id: 4, institution: "University of Technology Sydney (UTS)", placeholder: true },
  { id: 5, institution: "UTS College", placeholder: true },
  { id: 6, institution: "The University of Queensland", placeholder: true },
  { id: 7, institution: "Navitas - Deakin College", placeholder: true },
  { id: 8, institution: "Victoria University", placeholder: true },
  { id: 9, institution: "Australian Catholic University", placeholder: true },
  { id: 10, institution: "RMIT University", placeholder: true }
];

export default function Scholarships() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [country, setCountry] = useState('All Country');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCountry('All Country');
    setOpenAccordion(null);
  };

  return (
    <> 
    <Navbar />
    <div className="scholarship-portal">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Scholarships</h1>
          <div className="breadcrumb">
            <span className="home-icon">🏠</span> ➔ <span className="current-page">Scholarships</span>
          </div>
        </div>
        <div className="hero-overlay-image">
          {/* Decorative student image equivalent */}
          <div className="gradient-blend"></div>
        </div>
      </div>

      {/* Filter Bar Section */}
      <div className="filter-container">
        <div className="filter-bar">
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
            className="filter-select"
          >
            <option value="All Country">All Country</option>
            <option value="Australia">Australia</option>
          </select>
          
          <input 
            type="text" 
            placeholder="Search university..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
          
          <button onClick={handleReset} className="reset-btn">
            RESET
          </button>
        </div>
      </div>

      {/* Accordion List Section */}
      <div className="accordion-container">
        {scholarshipData
          .filter(item => item.institution.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <div key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                <div 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="institution-title">{item.institution}</span>
                  <span className={`arrow-icon ${isOpen ? 'up' : 'down'}`}>▼</span>
                </div>

                {isOpen && (
                  <div className="accordion-content">
                    {item.placeholder ? (
                      <div className="no-data">No active scholarship details available for this selection.</div>
                    ) : (
                      <div className="table-wrapper">
                        <table className="scholarship-table">
                          <thead>
                            <tr>
                              <th>SCHOLARSHIP</th>
                              <th>SCHOLARSHIP VALUE</th>
                              <th>DEADLINE</th>
                              <th>ELIGIBILITY</th>
                              <th>REGISTER</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="fw-bold">{item.scholarshipName}</td>
                              <td>{item.value}</td>
                              <td>{item.deadline}</td>
                              <td>
                                <ol className="eligibility-list">
                                  {item.eligibility.map((criterion, idx) => (
                                    <li key={idx}>{criterion}</li>
                                  ))}
                                </ol>
                                <a href={item.link} target="_blank" rel="noreferrer" className="source-link">
                                  {item.link}
                                </a>
                              </td>
                              <td className="register-cell">
                                <button className="register-icon-btn" title="Register">
                                  👤<sup>+</sup>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
    <Footer />
    </>
  );
}