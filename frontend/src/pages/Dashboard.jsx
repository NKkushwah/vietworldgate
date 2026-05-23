import React, { useState } from "react";

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

  // =========================
  // FORM STATE
  // =========================
  const [formData, setFormData] = useState({

    name: "",
    email: "",
    mobile: "",
    city: "",
    message: ""

  });

  // =========================
  // LOADING STATE
  // =========================
  const [loading, setLoading] =
    useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (e) => {

    e.preventDefault();

    // =========================
    // MOBILE VALIDATION
    // =========================
    if (formData.mobile.length < 10) {

      alert(
        "❌ Please Enter Valid Mobile Number"
      );

      return;

    }

    try {

      // START LOADING
      setLoading(true);

      // =========================
      // API CALL
      // =========================
      const response = await fetch(

        "https://vietworldgate-4-g8ns.onrender.com/api/appointments/book",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            Accept:
              "application/json"

          },

          body: JSON.stringify(
            formData
          )

        }

      );

      // =========================
      // HANDLE INVALID RESPONSE
      // =========================
      if (!response.ok) {

        const errorText =
          await response.text();

        throw new Error(
          errorText ||
          "Failed To Submit Form"
        );

      }

      // =========================
      // RESPONSE DATA
      // =========================
      const data =
        await response.json();

      console.log(
        "Success:",
        data
      );

      // =========================
      // SUCCESS ALERT
      // =========================
      alert(
        "✅ Appointment Submitted Successfully"
      );

      // =========================
      // RESET FORM
      // =========================
      setFormData({

        name: "",
        email: "",
        mobile: "",
        city: "",
        message: ""

      });

    }

    // =========================
    // ERROR HANDLING
    // =========================
    catch (error) {

      console.error(
        "Fetch Error:",
        error
      );

      alert(

        "❌ Unable To Connect Server. Please Try Again."

      );

    }

    finally {

      // STOP LOADING
      setLoading(false);

    }

  };

  return (

    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* SLIDER */}
        <div className="hero-slider">

          <img
            src="https://images.pexels.com/photos/7018490/pexels-photo-7018490.jpeg"
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

        {/* HERO CONTENT */}
        <div className="hero-content">

          {/* LEFT CONTENT */}
          <div className="hero-left">

            <span className="tag">

              POST STUDY WORK RIGHT
              – AUTSTRALIA, UK, NEWZELAND, JAPAN, RUSSIA

            </span>

            <h1>

              Extend your stay and work

              <br />

              after Graduation

            </h1>

            <p>

              Explore world-class universities
              and build your future with
              global education opportunities.

            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="appointment-box">

            <h3>

              Book your Appointment

            </h3>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* MOBILE */}
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength="10"
              />

              {/* CITY */}
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formData.city}
                onChange={handleChange}
                required
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Write Your Message..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
              >

                {

                  loading

                    ?

                    "Submitting..."

                    :

                    "BOOK NOW"

                }

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-card">

            <h2>200+</h2>

            <p>

              Institutions Worldwide

            </p>

          </div>

          <div className="stat-card">

            <h2>7+</h2>

            <p>

              Branches

            </p>

          </div>

          <div className="stat-card">

            <h2>2600+</h2>

            <p>

              Students Placed

            </p>

          </div>

          <div className="stat-card">

            <h2>6+</h2>

            <p>

              Years Experience

            </p>

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