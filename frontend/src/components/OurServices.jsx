import React from 'react';
import { BookOpen, GraduationCap, FileCheck } from 'lucide-react';
import './OurServices.css';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Course Advice",
      description: "Our expert counsellors assist you in selecting the correct program that is tailored to your career aspirations.",
      // Using a placeholder image with similar content (counselling session)
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      icon: <BookOpen size={22} color="#ffffff" />
    },
    {
      id: 2,
      title: "Shortlist Universities",
      description: "After choosing the right course, our advisors help you match your personal, academic, and financial profile to ideal universities.",
      // Using a placeholder image with similar content (notebook / planning)
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      icon: <GraduationCap size={22} color="#ffffff" />
    },
    {
      id: 3,
      title: "Visa Assistance",
      description: "We will walk you through the application process and assist you in preparing documentation for a successful visa outcome.",
      // Using a placeholder image with similar content (laptop / application desk)
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      icon: <FileCheck size={22} color="#ffffff" />
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <h2>Our <span className="italic-title">Services</span></h2>
          <p>As your dedicated study abroad consultant, we offer the following tailored services</p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              
              {/* Image Container with Badged Icon */}
              <div className="service-image-wrapper">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="service-img" 
                />
                <div className="service-icon-badge">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <button className="btn-read-more">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}