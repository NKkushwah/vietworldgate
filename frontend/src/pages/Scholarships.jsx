import React, { useState } from 'react';
import './Scholarships.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const scholarshipData = [
  {
    id: 1,
    institution: "University of West London",
    country: "UK",
    scholarships: [
      {
        name: "International Ambassador Scholarship",
        value: "Up to £5,000",
        description: "Awarded to outstanding international students.",
        eligibility: "International Students",
        level: "Undergraduate, Postgraduate",
        deadline: "30 Jun 2026",
        iconType: "global",
        targetUrl: "https://www.uwl.ac.uk/international"
      },
      {
        name: "Vice Chancellor Scholarship",
        value: "Up to £3,000",
        description: "Merit-based award for academic excellence.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.uwl.ac.uk"
      },
      {
        name: "Early Payment Discount",
        value: "£500",
        description: "Fee discount for early tuition payment.",
        eligibility: "All Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "fee",
        targetUrl: "https://www.uwl.ac.uk"
      },
      {
        name: "Sports Scholarship",
        value: "Up to £1,500",
        description: "For students excelling in sports.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "sports",
        targetUrl: "https://www.uwl.ac.uk"
      }
    ]
  },

  {
    id: 2,
    institution: "University of Hertfordshire",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £5,000",
        description: "Range of scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.herts.ac.uk/international"
      },
      {
        name: "Chancellor’s Scholarship",
        value: "£2,000",
        description: "Awarded for academic excellence.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.herts.ac.uk"
      },
      {
        name: "Family Scholarship",
        value: "10% Fee Discount",
        description: "For students with family studying at university.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "family",
        targetUrl: "https://www.herts.ac.uk"
      },
      {
        name: "Alumni Discount",
        value: "20% Fee Discount",
        description: "For returning students.",
        eligibility: "Alumni",
        level: "Postgraduate",
        deadline: "Varies",
        iconType: "pg",
        targetUrl: "https://www.herts.ac.uk"
      }
    ]
  },

  {
    id: 3,
    institution: "Coventry University",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarship",
        value: "Up to £3,000",
        description: "Scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.coventry.ac.uk"
      },
      {
        name: "Academic Excellence Scholarship",
        value: "£2,000",
        description: "For high-achieving students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.coventry.ac.uk"
      },
      {
        name: "EU Support Scholarship",
        value: "£1,500",
        description: "Support for EU students.",
        eligibility: "EU Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.coventry.ac.uk"
      },
      {
        name: "Sports Scholarship",
        value: "Up to £1,500",
        description: "For sports excellence.",
        eligibility: "All Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "sports",
        targetUrl: "https://www.coventry.ac.uk"
      }
    ]
  },

  // 👉 SAME STRUCTURE CONTINUES FOR ALL UNIVERSITIES

  {
    id: 16,
    institution: "University of Toronto",
    country: "Canada",
    scholarships: [
      {
        name: "Lester B. Pearson Scholarship",
        value: "Fully Funded",
        description: "Covers tuition, books & living.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://future.utoronto.ca/pearson/about/"
      },
      {
        name: "President’s Scholars of Excellence",
        value: "CAD 10,000",
        description: "For top students.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://utoronto.ca"
      },
      {
        name: "International Scholar Award",
        value: "Up to CAD 50,000",
        description: "Merit-based scholarship.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://utoronto.ca"
      },
      {
        name: "Faculty Entrance Scholarship",
        value: "CAD 5,000",
        description: "Department-level award.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://utoronto.ca"
      }
    ]
  },

  {
    id: 19,
    institution: "McGill University",
    country: "Canada",
    scholarships: [
      {
        name: "Entrance Scholarship",
        value: "Up to CAD 12,000",
        description: "Merit-based award.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.mcgill.ca"
      },
      {
        name: "Major Entrance Scholarship",
        value: "Up to CAD 48,000",
        description: "Highly competitive scholarship.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.mcgill.ca"
      },
      {
        name: "PBEEE Scholarship",
        value: "Varies",
        description: "Government-funded scholarship.",
        eligibility: "International Students",
        level: "Postgraduate",
        deadline: "Varies",
        iconType: "pg",
        targetUrl: "https://www.mcgill.ca"
      },
      {
        name: "Faculty Scholarship",
        value: "CAD 5,000",
        description: "Department-specific awards.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.mcgill.ca"
      }
    ]
  }
];
export default function Scholarships() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [country, setCountry] = useState('All Country');
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCountry('All Country');
    setOpenAccordion(null);
    setShowAll(false);
  };

  // Filtering Logic
  const filteredData = scholarshipData.filter(item => {
    const matchesSearch = item.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = country === 'All Country' || item.country === country;
    return matchesSearch && matchesCountry;
  });

  // Determines initial pagination limits
  const displayedData = showAll ? filteredData : filteredData.slice(0, 4);

  // Appends and displays all filtered universities inline on the same page
  const handleShowMore = () => {
    setShowAll(true);
  };

  // Redirect handler to open the respective university link in a new browser tab
  const handleRedirect = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert("Official link not available for this scholarship.");
    }
  };

  // Helper method to assign matching visual representations
  const getIcon = (type) => {
    switch(type) {
      case 'merit': return '🎓';
      case 'vc': return '⭐';
      case 'global': return '🌐';
      case 'pg': return '👥';
      default: return '📜';
    }
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
        </div>

        {/* Filter Bar Section */}
        <div className="filter-container">
          <div className="filter-bar">
            <select 
              value={country} 
              onChange={(e) => {
                setCountry(e.target.value);
                setOpenAccordion(null);
              }}
              className="filter-select"
            >
              <option value="All Country">All Country</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
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
          {displayedData.length > 0 ? (
            displayedData.map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                  <div 
                    className="accordion-header" 
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <div className="header-left">
                      <span className="institution-title">{item.institution}</span>
                    </div>
                    <span className={`arrow-icon ${isOpen ? 'up' : 'down'}`}>
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="accordion-content">
                      {item.placeholder || !item.scholarships ? (
                        <div className="no-data">No active scholarship details available for this selection.</div>
                      ) : (
                        <div className="scholarships-card-grid">
                          {item.scholarships.map((sch, index) => (
                            <div key={index} className="scholarship-card">
                              <div>
                                <div className="card-header">
                                  <div className={`icon-wrapper ${sch.iconType}-icon`}>
                                    {getIcon(sch.iconType)}
                                  </div>
                                  <div className="header-title-group">
                                    <h3>{sch.name}</h3>
                                    <span className="value-badge">{sch.value}</span>
                                  </div>
                                </div>
                                <p className="card-description">{sch.description}</p>
                              </div>

                              <div>
                                <div className="card-meta">
                                  <div className="meta-item">
                                    <span className="meta-label">👤 Eligibility:</span>
                                    <span className="meta-value">{sch.eligibility}</span>
                                  </div>
                                  <div className="meta-item">
                                    <span className="meta-label">🎓 Level:</span>
                                    <span className="meta-value">{sch.level}</span>
                                  </div>
                                  <div className="meta-item">
                                    <span className="meta-label">⏰ Deadline:</span>
                                    <span className="meta-value">{sch.deadline}</span>
                                  </div>
                                </div>
                                <button 
                                  className="card-action-btn"
                                  onClick={() => handleRedirect(sch.targetUrl)}
                                >
                                  CLICK HERE <span className="arrow">➔</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="no-results">No universities found matching your criteria.</div>
          )}
        </div>

        {/* Show More Button Controls */}
        {!showAll && filteredData.length > 4 && (
          <div className="show-more-container">
            <button onClick={handleShowMore} className="show-more-btn">
              Show More Universities ➔
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}