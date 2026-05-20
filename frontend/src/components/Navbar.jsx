import "./Navbar.css";

function Navbar() {
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

          <input
            type="text"
            placeholder="Search here..."
          />

          <button>
            🔍
          </button>

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

       {/* MENU */}
<ul className="nav-links">

  <li>Home</li>

  {/* ABOUT */}
  <li className="dropdown">

    About Us

    <ul className="dropdown-menu">
      <li>Company Profile</li>
      <li>Our Team</li>
      <li>Mission & Vision</li>
      <li>Success Stories</li>
    </ul>

  </li>

  {/* SERVICES */}
  <li className="dropdown">

    Services

    <ul className="dropdown-menu">
      <li>Study Abroad</li>
      <li>Visa Assistance</li>
      <li>IELTS Coaching</li>
      <li>Career Counseling</li>
    </ul>

  </li>

  {/* DESTINATIONS */}
  <li className="dropdown">

    Destinations

    <ul className="dropdown-menu">
      <li>Canada</li>
      <li>Australia</li>
      <li>United Kingdom</li>
      <li>USA</li>
      <li>Germany</li>
    </ul>

  </li>

  <li>Scholarships</li>

  {/* BRANCHES */}
  <li className="dropdown">

    Branches

    <ul className="dropdown-menu">
      <li>Delhi</li>
      <li>Noida</li>
      <li>Lucknow</li>
      <li>Mumbai</li>
    </ul>

  </li>

  <li>Gallery</li>

  {/* EVENTS */}
  <li className="dropdown">

    Events

    <ul className="dropdown-menu">
      <li>Upcoming Events</li>
      <li>Seminars</li>
      <li>Education Fair</li>
    </ul>

  </li>

  <li>Find a Course</li>

  <li>Careers</li>

  <li>Contact Us</li>

</ul>
      </nav>
    </>
  );
}

export default Navbar;