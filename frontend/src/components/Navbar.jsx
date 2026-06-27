import { useState, useEffect } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate import

import "./Navbar.css";

// IMPORT LOGO
import logo from "../assets/vietworldgate.png";

// ==========================================
// SEARCHBOX COMPONENT (Extracted cleanly)
// ==========================================
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchTerm.toLowerCase().trim();

    const routes = {
     
  "education fair": "/EducationFair", Eeducation ,
  "our presence": "/OurPresence",
  "our services": "/OurServices",
  infrastructure: "/Infrastructure",
  "why choose us": "/WhyChooseUs",
  "course portal": "/CoursePortal",
  careers: "/Careers",

  "contact london": "/ContactLondon",
  "contact ghaziabad": "/ContactGhaziabad",
  "contact noida": "/ContactNoida",
  "contact delhi": "/ContactDelhi",

  scholarships: "/Scholarships",

  italy: "/ItalyDestination",
  japan: "/JapanDestination",
  "new zealand": "/NZDestination",
  nz: "/NZDestination",
  uk: "/UKDestination",
  dubai: "/DubaiDestination",
  germany: "/GermanyDestination",
  canada: "/CanadaDestination",
  australia: "/AustraliaDestination",

  "pre departure": "/PreDeparture",
  "shortlist universities": "/ShortlistUniversities",
  "course advice": "/courseAdvice",
  "visa assistance": "/visaAssistance",

  "our team": "/ourteam",
  "mission vision": "/MissionVision",
  "contact us": "/contact-us",
  "company profile": "/companyprofile",
  values: "/ValuesGrid",
  feedback: "/feedback",
  "university partners": "/universitypartner",
  certificate: "/Certificate",
  "upcoming events": "/upcomingevents",
  seminar: "/seminar",
  gallery: "/gallary",
  video: "/gallary",
  "terms and conditions": "/termsandconditions",
  accreditations: "/Accrediations"
    };

    if (routes[query]) {
      navigate(routes[query]);
      setSearchTerm("");
    } 
     
  };

  return (
    <div className="search-box">
     <input
  type="text"
  placeholder="Search here..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
/>
      <button type="button" onClick={handleSearch}>
        <FiSearch />
      </button>
    </div>
  );
};

// ==========================================
// MAIN NAVBAR COMPONENT
// ==========================================
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  // Handle dropdown toggle on mobile/tablet view
  const handleDropdownClick = (e, index) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  // Close all menus
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* =========================
          TOP HEADER
      ========================= */}
      <div className="top-header">
        <div className="top-scroll">
          <div className="top-left">
            <span className="branch-heading">
              Our New Branches In India –
            </span>

            <a href="/">Noida</a>
            <a href="/">Ghaziabad</a>
            <a href="/">Delhi</a>

            {/* INTERNATIONAL BRANCH */}
            <div className="international-branch">
              <span className="branch-heading">
                International Branch –
              </span>
              <span className="london-text">
                OXFORD STREET, LONDON
              </span>
            </div>
          </div>
        </div>

        {/* Render SearchBox inside top-header layout safely */}
        <SearchBox />
      </div>

      {/* =========================
          MAIN NAVBAR
      ========================= */}
      <nav className="navbar">
        {/* LOGO SECTION */}
        <div className="logo-section">
          <img
            src={logo}
            alt="Viet World Gate Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <h2>VIET WORLDGATE</h2>
            <p>Your Gateway to Global Opportunities</p>
          </div>
        </div>

        {/* MOBILE MENU HAMBURGER */}
        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          
          {/* HOME */}
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>

          {/* ABOUT DROPDOWN */}
          <li
            className={`dropdown ${activeDropdown === 1 ? "drop-active" : ""}`}
            onClick={(e) => handleDropdownClick(e, 1)}
          >
            <span className="nav-item">
              About Us
              <span className="arrow">
                <FiChevronDown />
              </span>
            </span>

            <ul className="dropdown-menu">
              <li onClick={closeMenu}>
                <Link to="/companyprofile">Company Profile</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/Certificate">Certificate</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ourteam">Our Team</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/MissionVision">Mission & Vision</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/feedback">Success Stories</Link>
              </li>
            </ul>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className={`dropdown ${activeDropdown === 2 ? "drop-active" : ""}`}
            onClick={(e) => handleDropdownClick(e, 2)}
          >
            <span className="nav-item">
              Services
              <span className="arrow">
                <FiChevronDown />
              </span>
            </span>

            <ul className="dropdown-menu">
              <li onClick={closeMenu}>
                <Link to="/PreDeparture">Pre-Departure Guidelines</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/VisaAssistance">Visa Assistance</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ShortlistUniversities">Shortlist University</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/CourseAdvice">Course Advice</Link>
              </li>
             <li onClick={closeMenu}>
                <Link to="/Abroadcostcalculator">Cost Calculate</Link>
              </li>
            </ul>
          </li>

          {/* DESTINATIONS DROPDOWN */}
          <li
            className={`dropdown ${activeDropdown === 3 ? "drop-active" : ""}`}
            onClick={(e) => handleDropdownClick(e, 3)}
          >
            <span className="nav-item">
              Destinations
              <span className="arrow">
                <FiChevronDown />
              </span>
            </span>

            <ul className="dropdown-menu">
              <li onClick={closeMenu}>
                <Link to="/CanadaDestination">Canada</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/AustraliaDestination">Australia</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/DubaiDestination">Dubai</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/GermanyDestination">Germany</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ItalyDestination">Italy</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/JapanDestination">Japan</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/NZDestination">New Zealand</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/UKDestination">UK</Link>
              </li>
            </ul>
          </li>

          {/* SCHOLARSHIPS */}
          <li onClick={closeMenu}>
            <Link to="/scholarships">Scholarships</Link>
          </li>

          {/* BRANCHES DROPDOWN */}
          <li
            className={`dropdown ${activeDropdown === 4 ? "drop-active" : ""}`}
            onClick={(e) => handleDropdownClick(e, 4)}
          >
            <span className="nav-item">
              Branches
              <span className="arrow">
                <FiChevronDown />
              </span>
            </span>

            <ul className="dropdown-menu">
              <li onClick={closeMenu}>
                <Link to="/ContactDelhi">Delhi</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ContactNoida">Noida</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ContactGhaziabad">Ghaziabad</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ContactLondon">International Branch London</Link>
              </li>
            </ul>
          </li>

          {/* GALLERY */}
          <li onClick={closeMenu}>
            <Link to="/gallary">Gallery</Link>
          </li>

          {/* EVENTS DROPDOWN */}
          <li
            className={`dropdown ${activeDropdown === 5 ? "drop-active" : ""}`}
            onClick={(e) => handleDropdownClick(e, 5)}
          >
            <span className="nav-item">
              Events
              <span className="arrow">
                <FiChevronDown />
              </span>
            </span>

            <ul className="dropdown-menu">
              <li onClick={closeMenu}>
                <Link to="/upcomingevents">Upcoming Events</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/seminar">Seminars</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/EducationFair">Education Fair</Link>
              </li>
            </ul>
          </li>

          {/* OTHER LINKS */}
          <li onClick={closeMenu}>
            <Link to="/CoursePortal">Find a Course</Link>
          </li>

          <li onClick={closeMenu}>
            <Link to="/careers">Careers</Link>
          </li>

          <li onClick={closeMenu}>
            <Link to="/contact-us">Contact Us</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;