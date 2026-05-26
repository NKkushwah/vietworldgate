import React, { useState } from 'react';
import './VisaAssistance.css';

const VisaAssistance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    country: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha) === 9) {
      alert('Form submitted successfully!');
      // Handle actual form submission logic here
    } else {
      alert('Incorrect captcha answer. Please try again.');
    }
  };

  return (
    <div className="visa-page-container">
      
      {/* Hero Banner Section */}
      <header className="visa-hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Visa Assistance</h1>
            <nav className="breadcrumb">
              <span className="home-icon">🏠</span> 
              <span className="arrow">→</span> 
              <span className="current-page">Visa assistance</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="visa-main-content">
        <div className="visa-grid-container">
          
          {/* Left Column: Sidebar Details & Form */}
          <aside className="visa-sidebar">
            {/* Call Center Widget */}
            <div className="appointment-call-widget">
              <div className="widget-flex">
                <div className="headset-icon">🎧</div>
                <div className="widget-text">
                  <p>Our Appointment Service call us</p>
                  <a href="tel:+911140515555" className="phone-number">+91-11 40515555</a>
                </div>
              </div>
              <div className="white-arrow-decor">➔</div>
            </div>

            {/* Appointment Form Card */}
            <div className="appointment-form-card">
              <h3>APPOINTMENT</h3>
              <div className="heading-underline"></div>
              
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    value={formData.city} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="country" 
                    placeholder="Country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    rows="3"
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                {/* Captcha Field */}
                <div className="captcha-wrapper">
                  <span className="captcha-equation">1 + 8 =</span>
                  <input 
                    type="number" 
                    name="captcha" 
                    className="captcha-input"
                    value={formData.captcha} 
                    onChange={handleChange} 
                    required 
                  />
                  <button type="button" className="refresh-captcha-btn" title="Refresh Captcha">🔄</button>
                </div>

                <button type="submit" className="submit-btn">SUBMIT</button>
              </form>
            </div>
          </aside>

          {/* Right Column: Imagery and Descriptive Text */}
          <section className="visa-details-body">
            {/* Visual Workspace Mockup Element */}
            <div className="workspace-preview-holder">
              <div className="mock-laptop-workspace">
                <div className="passport-overlay-tag">PASSPORT</div>
                <div className="application-form-tag">VISA APPLICATION</div>
              </div>
            </div>

            <div className="intro-text-block">
              <h2>Visa assistance</h2>
              <p>We will walk you through the application process and assist you in preparing the necessary paperwork for your visa submission.</p>
            </div>

            {/* Three Pillars Services Grid */}
            <div className="services-three-column-grid">
              
              {/* Card 1 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">👥</div>
                <h4>Guidance on Visa Documentation</h4>
                <p>There are several factors to consider while applying for Student Visa, however, the requirements may differ as per country you are planning to study.</p>
              </div>

              {/* Card 2 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">💬</div>
                <h4>Financial Strategy & Proof Required</h4>
                <p>Funds requirement and documents required to show funds may differ from country to country.</p>
              </div>

              {/* Card 3 */}
              <div className="service-feature-card">
                <div className="feature-icon-circle">📜</div>
                <h4>Medical / Health Requirements / Police Checks</h4>
                <p>Some countries may ask you to undertake Medical examination / police checks.</p>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer Disclaimer Text */}
      <footer className="visa-footer-bar">
        <p>If you are a VIEC student, we will ensure you are fully aware about the latest visa requirements.</p>
      </footer>

      {/* Sticky Floating Chat Bubble & Scroll to Top buttons matching the reference UI */}
      <div className="floating-action-widgets">
        <button className="chat-bubble-widget" aria-label="Open Chat">💬</button>
        <button className="scroll-top-widget" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Scroll to top">▲</button>
      </div>

    </div>
  );
};

export default VisaAssistance;