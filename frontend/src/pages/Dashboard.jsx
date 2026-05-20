import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Dashboard.css";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import StudyAbroad from "../components/StudyAbroad";
import OurServices from "../components/OurServices";
import StudyAbroadFeatures from "../components/StudyAbroadFeatures";
import StudyAbroadLayouts from "../components/StudyAbroadLayouts";
import StudyDestinations from "../components/StudyDestinations";


function Dashboard() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* SLIDER BACKGROUND */}
        <div className="hero-slider">

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
            alt="Study Abroad"
            className="slide"
          />

          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070"
            alt="University"
            className="slide"
          />

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
            alt="Students"
            className="slide"
          />

        </div>

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* HERO CONTENT WRAPPER */}
        <div className="hero-content">

          {/* LEFT CONTENT */}
          <div className="hero-left">

            <span className="tag">
              POST STUDY WORK RIGHT – AUSTRALIA, UK, CANADA
            </span>

            <h1>
              Extend your stay and work
              <br />
              after Graduation
            </h1>

            <p>
              Explore world-class universities and build your future
              with global education opportunities.
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="appointment-box">

            <h3>Book your Appointment</h3>

            <form>

              <input
                type="text"
                placeholder="Name"
              />

              <input
                type="email"
                placeholder="Email"
              />

              <input
                type="text"
                placeholder="Mobile"
              />

              <input
                type="text"
                placeholder="City"
              />

              <textarea
                placeholder="Message"
              ></textarea>

              <button type="submit">
                BOOK NOW
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-card">
            <h2>400+</h2>
            <p>Institutions Worldwide</p>
          </div>

          <div className="stat-card">
            <h2>39+</h2>
            <p>Branches</p>
          </div>

          <div className="stat-card">
            <h2>44600+</h2>
            <p>Students Placed</p>
          </div>

          <div className="stat-card">
            <h2>28+</h2>
            <p>Years Experience</p>
          </div>
         
        </div>

      </section>
      <StudyDestinations />
      <StudyAbroadLayouts />
      <StudyAbroadFeatures />
      <OurServices />
      <StudyAbroad />
      <Testimonials />
      <FaqSection />

      <Footer />
    </>
  );
}

export default Dashboard;