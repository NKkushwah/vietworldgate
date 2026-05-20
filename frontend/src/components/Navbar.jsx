import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // Mobile main menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mobile dropdown toggles ke liye state (konsa index open hai)
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveDropdown(null); // Menu close hote hi sub-dropdowns bhi close ho jayein
  };

  const handleDropdownClick = (e, index) => {
    // Mobile par default link check ya hover behavior rokne ke liye
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="top-header">
        <div className="top-left">
          <span>Our New Branches In Kerala –</span>
          <a href="#">Noida</a>
          <a href="#">Ghaziabad</a>
          <a href="#">Delhi</a>
          <a href="#">International branch London</a>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input type="text" placeholder="Search here..." />
          <button>🔍</button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        {/* LOGO SECTION */}
        <div className="logo-section">
          <img
            src="/src/assets/vietworldgate.png"
            alt="Viet World Gate Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <h2>VIET WORLDGATE</h2>
            <p>Your Gateway to Global Opportunities</p>
          </div>
        </div>

        {/* MOBILE MENU BUTTON (BURGER ICON) */}
        <div 
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          {/* Menu status toggle hote hi content CSS se change hoga */}
        </div>

        {/* MENU */}
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li onClick={closeMenu}>Home</li>

          {/* ABOUT */}
          <li 
            className={`dropdown ${activeDropdown === 1 ? "drop-active" : ""}`} 
            onClick={(e) => handleDropdownClick(e, 1)}
          >
            About Us 
            <ul className="dropdown-menu">
              <li onClick={closeMenu}>Company Profile</li>
              <li onClick={closeMenu}>Our Team</li>
              <li onClick={closeMenu}>Mission & Vision</li>
              <li onClick={closeMenu}>Success Stories</li>
            </ul>
          </li>

          {/* SERVICES */}
          <li 
            className={`dropdown ${activeDropdown === 2 ? "drop-active" : ""}`} 
            onClick={(e) => handleDropdownClick(e, 2)}
          >
            Services 
            <ul className="dropdown-menu">
              <li onClick={closeMenu}>Study Abroad</li>
              <li onClick={closeMenu}>Visa Assistance</li>
              <li onClick={closeMenu}>IELTS Coaching</li>
              <li onClick={closeMenu}>Career Counseling</li>
            </ul>
          </li>

          {/* DESTINATIONS */}
          <li 
            className={`dropdown ${activeDropdown === 3 ? "drop-active" : ""}`} 
            onClick={(e) => handleDropdownClick(e, 3)}
          >
            Destinations 
            <ul className="dropdown-menu">
              <li onClick={closeMenu}>Canada</li>
              <li onClick={closeMenu}>Australia</li>
              <li onClick={closeMenu}>United Kingdom</li>
              <li onClick={closeMenu}>USA</li>
              <li onClick={closeMenu}>Germany</li>
            </ul>
          </li>

          <li onClick={closeMenu}>Scholarships</li>

          {/* BRANCHES */}
          <li 
            className={`dropdown ${activeDropdown === 4 ? "drop-active" : ""}`} 
            onClick={(e) => handleDropdownClick(e, 4)}
          >
            Branches 
            <ul className="dropdown-menu">
              <li onClick={closeMenu}>Delhi</li>
              <li onClick={closeMenu}>Noida</li>
              <li onClick={closeMenu}>Ghaziabad</li>
              <li onClick={closeMenu}>International branch london</li>
            </ul>
          </li>

          <li onClick={closeMenu}>Gallery</li>

          {/* EVENTS */}
          <li 
            className={`dropdown ${activeDropdown === 5 ? "drop-active" : ""}`} 
            onClick={(e) => handleDropdownClick(e, 5)}
          >
            Events 
            <ul className="dropdown-menu">
              <li onClick={closeMenu}>Upcoming Events</li>
              <li onClick={closeMenu}>Seminars</li>
              <li onClick={closeMenu}>Education Fair</li>
            </ul>
          </li>

          <li onClick={closeMenu}>Find a Course</li>
          <li onClick={closeMenu}>Careers</li>
          <li onClick={closeMenu}>Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;