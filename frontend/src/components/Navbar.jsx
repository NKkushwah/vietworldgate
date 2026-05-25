import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Navbar.css";

// IMPORT LOGO
import logo from "../assets/vietworldgate.png";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [activeDropdown, setActiveDropdown] =
    useState(null);

  // =========================
  // BODY SCROLL LOCK
  // =========================
  useEffect(() => {

    if (isMenuOpen) {

      document.body.classList.add(
        "menu-open"
      );

    } else {

      document.body.classList.remove(
        "menu-open"
      );

    }

    return () => {

      document.body.classList.remove(
        "menu-open"
      );

    };

  }, [isMenuOpen]);

  // =========================
  // TOGGLE MOBILE MENU
  // =========================
  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {

      setActiveDropdown(null);

    }

  };

  // =========================
  // HANDLE DROPDOWN
  // =========================
  const handleDropdownClick =
    (e, index) => {

      if (window.innerWidth <= 1024) {

        e.preventDefault();

        e.stopPropagation();

        setActiveDropdown(

          activeDropdown === index
            ? null
            : index

        );

      }

    };

  // =========================
  // CLOSE MENU
  // =========================
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

        {/* LEFT SCROLL LINKS */}
        <div className="top-scroll">

          <div className="top-left">

            <span className="branch-heading">
              Our New Branches In India –
            </span>

            <a href="#">
              Noida
            </a>

            <a href="#">
              Ghaziabad
            </a>

            <a href="#">
              Delhi
            </a>

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

        {/* SEARCH */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search here..."
          />

          <button>
            🔍
          </button>

        </div>

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

            <h2>
              VIET WORLDGATE
            </h2>

            <p>
              Your Gateway to Global Opportunities
            </p>

          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div

          className={`mobile-menu ${
            isMenuOpen
              ? "open"
              : ""
          }`}

          onClick={toggleMenu}

        >

        </div>

        {/* NAV LINKS */}
        <ul

          className={`nav-links ${
            isMenuOpen
              ? "nav-active"
              : ""
          }`}

        >

          {/* HOME */}
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>

          {/* ABOUT */}
          <li

            className={`dropdown ${
              activeDropdown === 1
                ? "drop-active"
                : ""
            }`}

            onClick={(e) =>
              handleDropdownClick(e, 1)
            }

          >

            <span className="nav-item">

              About Us

              <span className="arrow">

                <FiChevronDown />

              </span>

            </span>

            <ul className="dropdown-menu">

             <li onClick={closeMenu}>
            <Link to="/companyprofile">
              Company Profile
            </Link>
          </li>
              <li onClick={closeMenu}>
                Our Team
              </li>

              <li onClick={closeMenu}>
                Mission & Vision
              </li>

              <li onClick={closeMenu}>
                Success Stories
              </li>

            </ul>

          </li>

          {/* SERVICES */}
          <li

            className={`dropdown ${
              activeDropdown === 2
                ? "drop-active"
                : ""
            }`}

            onClick={(e) =>
              handleDropdownClick(e, 2)
            }

          >

            <span className="nav-item">

              Services

              <span className="arrow">

                <FiChevronDown />

              </span>

            </span>

            <ul className="dropdown-menu">

              <li onClick={closeMenu}>
                Study Abroad
              </li>

              <li onClick={closeMenu}>
                Visa Assistance
              </li>

              <li onClick={closeMenu}>
                IELTS Coaching
              </li>

              <li onClick={closeMenu}>
                Career Counseling
              </li>

            </ul>

          </li>

          {/* DESTINATIONS */}
          <li

            className={`dropdown ${
              activeDropdown === 3
                ? "drop-active"
                : ""
            }`}

            onClick={(e) =>
              handleDropdownClick(e, 3)
            }

          >

            <span className="nav-item">

              Destinations

              <span className="arrow">

                <FiChevronDown />

              </span>

            </span>

            <ul className="dropdown-menu">

              <li onClick={closeMenu}>
                Canada
              </li>

              <li onClick={closeMenu}>
                Australia
              </li>

              <li onClick={closeMenu}>
                United Kingdom
              </li>

              <li onClick={closeMenu}>
                USA
              </li>

              <li onClick={closeMenu}>
                Germany
              </li>

            </ul>

          </li>

          {/* SCHOLARSHIPS */}
          <li onClick={closeMenu}>
            Scholarships
          </li>

          {/* BRANCHES */}
          <li

            className={`dropdown ${
              activeDropdown === 4
                ? "drop-active"
                : ""
            }`}

            onClick={(e) =>
              handleDropdownClick(e, 4)
            }

          >

            <span className="nav-item">

              Branches

              <span className="arrow">

                <FiChevronDown />

              </span>

            </span>

            <ul className="dropdown-menu">

              <li onClick={closeMenu}>
                Delhi
              </li>

              <li onClick={closeMenu}>
                Noida
              </li>

              <li onClick={closeMenu}>
                Ghaziabad
              </li>

              <li onClick={closeMenu}>
                International Branch London
              </li>

            </ul>

          </li>

          {/* GALLERY */}
          <li onClick={closeMenu}>
            Gallery
          </li>

          {/* EVENTS */}
          <li

            className={`dropdown ${
              activeDropdown === 5
                ? "drop-active"
                : ""
            }`}

            onClick={(e) =>
              handleDropdownClick(e, 5)
            }

          >

            <span className="nav-item">

              Events

              <span className="arrow">

                <FiChevronDown />

              </span>

            </span>

            <ul className="dropdown-menu">

              <li onClick={closeMenu}>
                Upcoming Events
              </li>

              <li onClick={closeMenu}>
                Seminars
              </li>

              <li onClick={closeMenu}>
                Education Fair
              </li>

            </ul>

          </li>

          {/* OTHER LINKS */}
          <li onClick={closeMenu}>
            Find a Course
          </li>

          <li onClick={closeMenu}>
            Careers
          </li>

          <li onClick={closeMenu}>
            <Link to="/contact-us">
              Contact Us
            </Link>
          </li>

        </ul>

      </nav>

    </>

  );

}

export default Navbar;