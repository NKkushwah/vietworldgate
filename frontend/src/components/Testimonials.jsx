import React from "react";
import { Link } from "react-router-dom";
import "./Testimonials.css";

import { FaStar, FaUser } from "react-icons/fa";

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      name: "Aman Sharma",
      country: "United Kingdom",
      rating: 5,
      text:
        "Studying in the UK was always my dream, but I was confused about admissions, scholarships, and visa procedures. The team at VIET Worldgate guided me professionally throughout the entire process."
    },

    {
      id: 2,
      name: "Priya Verma",
      country: "Canada",
      rating: 5,
      text:
        "I was confused about my career options after graduation, but the counselors at VIET Worldgate guided me properly according to my interests and goals."
    },

    {
      id: 3,
      name: "Rahul Singh",
      country: "Australia",
      rating: 5,
      text:
        "My admission process was handled very professionally by VIET Worldgate. The staff was supportive, transparent, and always available to answer my questions."
    }
  ];

  return (
    <section className="testimonials-section">

      {/* HEADER */}
      <div className="testimonials-header">
        <h2>
          Student{" "}
          <span className="italic-lime">
            Reviews & Feedback
          </span>
        </h2>
      </div>

      {/* CONTAINER */}
      <div className="testimonials-container">

        {/* GRID */}
        <div className="testimonials-grid">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="testimonial-card"
            >

              {/* LEFT LINE */}
              <div className="card-accent-line"></div>

              {/* USER ICON */}
              <div className="user-icon-circle">
                <FaUser className="user-avatar" />
              </div>

              {/* CONTENT */}
              <div className="card-content">

                <h3 className="user-name">
                  {review.name}
                </h3>

                <span className="review-country">
                  {review.country}
                </span>

                {/* STARS */}
                <div className="stars-container">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="star-icon"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="review-text">
                  “{review.text}”
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* BUTTON */}
<div className="view-all-wrapper">
  <Link to="/feedback">
    <button className="view-all-btn">
      VIEW ALL
    </button>
  </Link>
</div>
      </div>
    </section>
  );
};

export default Testimonials;