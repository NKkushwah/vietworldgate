import React from 'react';
import './Testimonials.css';
import { FaStar, FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Amandeep kaur",
      rating: 5,
      text: "It has been very beneficial. The whole process was quite smooth and all necessary help was provided to me . Appreciate the coordination and..."
    },
    {
      id: 2,
      name: "Sandeep Punia",
      rating: 5,
      text: "I am so happy for getting Australia Visa.....Thank you VIEC and all team members....services and guidance of VIEC is very good....Thank you..."
    },
    {
      id: 3,
      name: "Inderjeet Kaur",
      rating: 5,
      text: "VIEC team is very supportive. I got my student visa within one week and i got scholarship from UTS. They guide me in every step while processing of my..."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>
          Student <span className="italic-lime">Reviews & Feedback</span>
        </h2>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              {/* Left Side Accent Line & Glowing User Icon */}
              <div className="card-accent-line"></div>
              <div className="user-icon-circle">
                <FaUser className="user-avatar" />
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="user-name">{review.name}</h3>
                <div className="stars-container">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="review-text">“{review.text}”</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-wrapper">
          <button className="view-all-btn">VIEW ALL</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;