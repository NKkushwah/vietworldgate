import React, { useState } from 'react';
import { FaGraduationCap, FaLaptop, FaCalendarAlt, FaPassport, FaAward, FaPenFancy, FaFilter, FaClock, FaMapMarkerAlt, FaInfoCircle, FaTicketAlt } from "react-icons/fa";
import './UpcomingEvents.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Mock Data for Events
const INITIAL_EVENTS = [
  { 
    id: 1, 
    title: "Study in Canada Webinar 🇨🇦", 
    date: "10 Aug 2026", 
    day: "Mon", 
    time: "5:00 PM - 6:30 PM",
    location: "Online Event", 
    category: "Webinar", 
    country: "Canada", 
    mode: "ONLINE", 
    seatsLeft: 45, 
    totalSeats: 100, 
    img: "https://images.pexels.com/photos/6147016/pexels-photo-6147016.jpeg" 
  },

  { 
    id: 2, 
    title: "Australia Education Fair 🇦🇺", 
    date: "15 Aug 2026", 
    day: "Sat", 
    time: "11:00 AM - 4:00 PM", 
    location: "Hyatt Regency, Mumbai", 
    category: "Education Fair", 
    country: "Australia", 
    mode: "OFFLINE", 
    seatsLeft: 60, 
    totalSeats: 120, 
    img: "https://images.pexels.com/photos/10513247/pexels-photo-10513247.jpeg"
   },

  { 
    id: 3, 
    title: "USA University Webinar 🇺🇸", 
    date: "18 Aug 2026", 
    day: "Tue", 
    time: "6:00 PM - 7:30 PM", 
    location: "Online Event", 
    category: "Webinar", 
    country: "USA", 
    mode: "ONLINE", 
    seatsLeft: 70, 
    totalSeats: 150, 
    img: "https://images.pexels.com/photos/14495769/pexels-photo-14495769.jpeg" 
  },

  { 
    id: 4, 
    title: "Study in Singapore Fair 🇸🇬", 
    date: "22 Aug 2026", 
    day: "Sat", 
    time: "11:00 AM - 4:00 PM", 
    location: "The Lalit, Bangalore", 
    category: "Education Fair", 
    country: "Singapore", 
    mode: "OFFLINE", 
    seatsLeft: 55, 
    totalSeats: 100, 
    img: "https://images.pexels.com/photos/36672131/pexels-photo-36672131.jpeg"
   },

  { 
    id: 5, 
    title: "UK Visa & Scholarship Seminar 🇬🇧", 
    date: "28 Aug 2026", 
    day: "Fri", 
    time: "2:00 PM - 5:00 PM", 
    location: "Le Méridien, New Delhi", 
    category: "Visa Seminar", 
    country: "UK", 
    mode: "OFFLINE", 
    seatsLeft: 12, 
    totalSeats: 50, 
    img: "https://images.pexels.com/photos/34397465/pexels-photo-34397465.jpeg" 
  }
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedMode, setSelectedMode] = useState('All Modes');
  const [activeFaq, setActiveFaq] = useState(null);

  // Filter Logic
  const filteredEvents = INITIAL_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || event.category === selectedCategory;
    const matchesCountry = selectedCountry === 'All Countries' || event.country === selectedCountry;
    const matchesMode = selectedMode === 'All Modes' || event.mode === selectedMode;

    return matchesSearch && matchesCategory && matchesCountry && matchesMode;
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <Navbar />

      <div className="eduworld-container fade-in-up">
        
        {/* --- FILTER BAR --- */}
        <div className="filter-bar">
          <div className="search-wrapper">
            <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder="Search events or locations..." 
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Education Fair</option>
            <option>Webinar</option>
            <option>Visa Seminar</option>
          </select>

          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
            <option>All Countries</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>USA</option>
            <option>Singapore</option>
            <option>UK</option>
          </select>

          <select value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)}>
            <option>All Modes</option>
            <option>ONLINE</option>
            <option>OFFLINE</option>
          </select>

          <button className="btn-search" onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); setSelectedCountry('All Countries'); setSelectedMode('All Modes'); }}>
            Reset
          </button>
        </div>

        {/* --- FEATURED EVENT & CALENDAR --- */}
        <section className="featured-section">
          <div className="featured-card">
            <div className="featured-details">
              <span className="badge-featured">🌟 FEATURED EVENT</span>
              <h2>UK Education Fair 2026 🇬🇧</h2>
              <p className="featured-desc">Meet top UK universities, explore premium engineering & management courses, unlock explicit scholarships, and map your direct route abroad.</p>
              
              <div className="event-meta-grid">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>25 June 2026</span>
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Noida, Sector 63</span>
                </div>
              </div>

              <div className="countdown-timer">
                <div className="time-box"><h3>18</h3><p>Days</p></div>
                <div className="time-box"><h3>07</h3><p>Hours</p></div>
                <div className="time-box"><h3>45</h3><p>Mins</p></div>
                <div className="time-box"><h3>30</h3><p>Secs</p></div>
              </div>

              <button className="btn-register-yellow">
                Register For Free →
              </button>
            </div>
            <div className="featured-image-wrapper">
              <img src="https://images.pexels.com/photos/33524620/pexels-photo-33524620.jpeg" alt="UK Big Ben" />
              
            </div>
          </div>

          {/* Mini Calendar */}
          <div className="mini-calendar">
            <div className="calendar-header">
              <button className="cal-btn">&lt;</button>
              <h4>June 2026</h4>
              <button className="cal-btn">&gt;</button>
            </div>
            <div className="calendar-days-grid">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <span key={d} className="day-name">{d}</span>)}
              {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
                const highlights = [3, 8, 14, 21, 25, 28];
                const isHighlighted = highlights.includes(day);
                return (
                  <span key={day} className={`calendar-day ${isHighlighted ? 'highlighted' : ''}`}>
                    {day}
                  </span>
                );
              })}
            </div>
            <a href="#full-calendar" className="view-full-cal">View Full Calendar →</a>
          </div>
        </section>

        {/* --- DYNAMIC EVENTS LIST SECTION --- */}
        <section className="upcoming-section">
          <div className="section-header">
            <h2>Upcoming Events ({filteredEvents.length})</h2>
          </div>
          <div className="events-grid">
            {filteredEvents.map(event => {
              const fillPercentage = ((event.totalSeats - event.seatsLeft) / event.totalSeats) * 100;

              return (
                <div className="event-grid-card animate-card" key={event.id}>
                  <div className="card-img-container">
                    <img src={event.img} alt={event.title} />
                    <span className={`badge-mode ${event.mode.toLowerCase()}`}>{event.mode}</span>
                  </div>
                  <div className="card-body">
                    <h3>{event.title}</h3>

                    <div className="card-meta-line">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{event.date} ({event.day})</span>
                    </div>

                    <div className="card-meta-line">
                      <FaClock className="meta-icon" />
                      <span>{event.time}</span>
                    </div>

                    <div className="card-meta-line">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{event.location}</span>
                    </div>

                    <div className="seats-bar">
                      <div className="seats-text">
                        <span>Slots Filled: {event.totalSeats - event.seatsLeft}/{event.totalSeats}</span>
                        <span className="seats-urgent">{event.seatsLeft} left!</span>
                      </div>
                      <div className="progress-line">
                        <div className="progress-fill" style={{ width: `${fillPercentage}%` }}></div>
                      </div>
                    </div>

                    <div className="card-actions">
                      <button className="btn-outline" onClick={() => alert(`Overview of ${event.title}`)}>
                        <FaInfoCircle /> Overview
                      </button>
                      <button className="btn-card-reg" onClick={() => alert(`Booked spot for ${event.title}`)}>
                        <FaTicketAlt /> Book Spot
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredEvents.length === 0 && (
              <p className="no-events">No events found matching the filters.</p>
            )}
          </div>
        </section>

        {/* --- CATEGORIES --- */}
        <section className="categories-section">
          <h2>Explore Event Categories</h2>
          <div className="categories-grid">
            <div className="cat-item" onClick={() => setSelectedCategory("Education Fair")}>
              <FaGraduationCap className="cat-icon" />
              <p>Education Fair</p>
            </div>

            <div className="cat-item" onClick={() => setSelectedCategory("Webinar")}>
              <FaLaptop className="cat-icon" />
              <p>University Webinar</p>
            </div>

            <div className="cat-item" onClick={() => setSelectedCategory("Visa Seminar")}>
              <FaPassport className="cat-icon" />
              <p>Visa Seminar</p>
            </div>

            <div className="cat-item">
              <FaAward className="cat-icon" />
              <p>Scholarship Session</p>
            </div>

            <div className="cat-item">
              <FaPenFancy className="cat-icon" />
              <p>IELTS Workshop</p>
            </div>

            <div className="cat-item" onClick={() => setSelectedCategory("All Categories")}>
              <FaFilter className="cat-icon" />
              <p>Clear Filter</p>
            </div>
          </div>
        </section>

        {/* --- UNIVERSITIES & PROCESS --- */}
        <section className="uni-process-section">
          <div className="uni-logos-container">
            <h3>Participating Global Universities</h3>
            <div className="logos-flex">
              <div className="uni-chip">🏛️ University of Melbourne</div>
              <div className="uni-chip"> University of Toronto</div>
              <div className="uni-chip"> King's College London</div>
              <div className="uni-chip"> NUS Singapore</div>
              <div className="uni-chip"> University of Sydney</div>
            </div>
          </div>

          <div className="process-container">
            <h3>Smooth Application Process</h3>
            <div className="process-steps">
              <div className="step-node">
                <div className="step-circle">1</div>
                <p>Select Event</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-node">
                <div className="step-circle">2</div>
                <p>Fill Form</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-node">
                <div className="step-circle">3</div>
                <p>Get Invite</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-node">
                <div className="step-circle">4</div>
                <p>Attend Live</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS & FAQ --- */}
        <section className="testimonial-faq-section">
          <div className="testimonial-card-box">
            <h3>What Students Say</h3>
            <div className="t-box">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"The premium webinar session helped me map out scholarships easily. The physical fair interaction was flawless!"</p>
              <div className="student-profile">
                <div className="avatar-placeholder">👩‍🎓</div>
                <div>
                  <strong>Neha Sharma</strong>
                  <p>MSc Student, UK Admissions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-box">
            <h3>Frequently Asked Questions</h3>
            {[
              { q: "Are the global events completely free to attend?", a: "Yes! All educational fairs, counseling sessions, and webinars hosted by EduWorld are entirely free for students." },
              { q: "Will I get a verified structural certificate for joining?", a: "Webinars and intensive structural workshops provide participation certificates over email post-event validation." },
              { q: "Can I directly bring transcripts to evaluate profile data?", a: "Absolutely. For offline events, carrying physical or digital copies of grade cards allows immediate profiling with experts." },
              { q: "How do I instantly cancellation my registered token?", a: "You can click on the cancellation hyperlink directly provided within your registered automated email confirmation dashboard." }
            ].map((faq, index) => (
              <div className={`faq-item-wrapper ${activeFaq === index ? 'active' : ''}`} key={index} onClick={() => toggleFaq(index)}>
                <div className="faq-item">
                  <span>{faq.q}</span> 
                  <span className="faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer-container">
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

       

      </div>

      {/* --- FOOTER --- */}
      <Footer />
    </>
  );
}