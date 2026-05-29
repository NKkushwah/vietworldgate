import React, { useState } from 'react';
import './Scholarships.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Complete Mock Data with mapped scholarship arrays for rendering cards
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
      }
    ]
  },

  {
    id: 3,
    institution: "Coventry University",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £3,000",
        description: "Scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.coventry.ac.uk/international-students-hub/"
      }
    ]
  },

  {
    id: 4,
    institution: "University of Essex",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £5,000",
        description: "Various scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.essex.ac.uk/study/international"
      }
    ]
  },

  {
    id: 5,
    institution: "Cape Breton University",
    country: "Canada",
    scholarships: [
      {
        name: "Entrance Scholarships",
        value: "Up to CAD 10,000",
        description: "Merit-based entrance scholarships.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.cbu.ca/international/"
      }
    ]
  },

  {
    id: 6,
    institution: "University of Chester",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £2,000",
        description: "Support for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.chester.ac.uk/international/"
      }
    ]
  },

  {
    id: 7,
    institution: "University of Bedfordshire",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £3,000",
        description: "Merit-based scholarships.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.beds.ac.uk/international/"
      }
    ]
  },

  {
    id: 8,
    institution: "University of Sunderland",
    country: "UK",
    scholarships: [
      {
        name: "Global Scholarships",
        value: "Up to £5,000",
        description: "Scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.sunderland.ac.uk/international/"
      }
    ]
  },

  {
    id: 9,
    institution: "University of Cumbria",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £2,500",
        description: "Financial support for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.cumbria.ac.uk/international/"
      }
    ]
  },

  {
    id: 10,
    institution: "University of Bolton",
    country: "UK",
    scholarships: [
      {
        name: "International Excellence Scholarships",
        value: "Up to £5,000",
        description: "Awarded for academic excellence.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.bolton.ac.uk/international/"
      }
    ]
  },

  {
    id: 11,
    institution: "University of Wales Trinity Saint David",
    country: "UK",
    scholarships: [
      {
        name: "International Scholarships",
        value: "Up to £3,000",
        description: "Scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.uwtsd.ac.uk/international/"
      }
    ]
  },

  // 🔥 NEW UNIVERSITIES

  {
    id: 12,
    institution: "Technical University of Munich",
    country: "Germany",
    scholarships: [
      {
        name: "TUM Scholarships",
        value: "Varies",
        description: "Financial aid and scholarships for international students.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.tum.de/en/studies/international-students"
      }
    ]
  },

  {
    id: 13,
    institution: "Delft University of Technology",
    country: "Netherlands",
    scholarships: [
      {
        name: "TU Delft Excellence Scholarships",
        value: "Up to €30,000",
        description: "Highly competitive scholarships for international students.",
        eligibility: "International Students",
        level: "Postgraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.tudelft.nl/en/education/programmes/masters/scholarships"
      }
    ]
  },

  {
    id: 14,
    institution: "University of Bologna",
    country: "Italy",
    scholarships: [
      {
        name: "Unibo Action Scholarships",
        value: "Up to €11,000",
        description: "Scholarships for international degree programs.",
        eligibility: "International Students",
        level: "All Programs",
        deadline: "Varies",
        iconType: "global",
        targetUrl: "https://www.unibo.it/en/study/grants-and-subsidies"
      }
    ]
  },

  {
    id: 15,
    institution: "PSL University",
    country: "France",
    scholarships: [
      {
        name: "PSL International Scholarships",
        value: "Varies",
        description: "Funding opportunities for international students.",
        eligibility: "International Students",
        level: "Postgraduate",
        deadline: "Varies",
        iconType: "pg",
        targetUrl: "https://www.psl.eu/en/education/fees-and-funding"
      }
    ]
  },

  {
    id: 16,
    institution: "University of Toronto",
    country: "Canada",
    scholarships: [
      {
        name: "Lester B. Pearson Scholarship",
        value: "Fully Funded",
        description: "Prestigious scholarship covering tuition and living.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://future.utoronto.ca/pearson/about/"
      }
    ]
  },

  {
    id: 17,
    institution: "University of British Columbia",
    country: "Canada",
    scholarships: [
      {
        name: "International Scholars Program",
        value: "Up to Full Funding",
        description: "Need and merit-based scholarships.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/"
      }
    ]
  },

  {
    id: 18,
    institution: "University of Waterloo",
    country: "Canada",
    scholarships: [
      {
        name: "International Student Entrance Scholarship",
        value: "Up to CAD 10,000",
        description: "Automatic entrance scholarships.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://uwaterloo.ca/future-students/financing"
      }
    ]
  },

  {
    id: 19,
    institution: "McGill University",
    country: "Canada",
    scholarships: [
      {
        name: "Entrance Scholarships",
        value: "Up to CAD 12,000",
        description: "Merit-based scholarships.",
        eligibility: "International Students",
        level: "Undergraduate",
        deadline: "Varies",
        iconType: "merit",
        targetUrl: "https://www.mcgill.ca/studentaid/scholarships-aid"
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